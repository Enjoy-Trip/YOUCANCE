// import React from 'react'
import { useState, useCallback, memo, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';

const containerStyle = {
    width: 'calc(100vw - 460px)',
    height: '100vh'
};

const WrapperStyle = {

}

const myStyles = [
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
    },
];

function MyMap({ props: { list, setAttractionDetail, getAttractionDetail, center, setCenter, zoom, updateZoom } }) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
    });

    const [map, setMap] = useState(null);
    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }

        setActiveMarker(marker);
    };

    const onLoad = useCallback(function callback(map) {
        map.setZoom(zoom);
        setMap(map);
    }, [list]);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, [list]);

    useEffect(() => {
        if (!map) {
            return;
        }

        map.setZoom(zoom);
    }, [zoom]);

    console.log(list);

    useEffect(() => {
        const updatedata = async () => {
            if (!list || list.length === 0) {
                return;
            }
    
            setAttractionDetail(await getAttractionDetail(list[0].contentid));
            setCenter({
                'lat': Number(list[0].mapy), 
                'lng': Number(list[0].mapx)
            });
            updateZoom(15);
        }

        updatedata();
    }, [list]);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                // disableDefaultUI: true,
                styles: myStyles
            }}
        >
            {
                list && list.length !== 0 ? list.map(data => {
                    return (
                        <MarkerF
                            key={data.contentid}
                            position={{
                                lat: Number(data.mapy),
                                lng: Number(data.mapx)
                            }}
                            onClick={async () => {
                                const rst = await getAttractionDetail(data.contentid);

                                setCenter({ lat: Number(data.mapy), lng: Number(data.mapx) });
                                updateZoom(16);
                                setAttractionDetail(rst);
                            }}
                            onMouseOver={() => handleActiveMarker(data.contentid)}
                            onMouseOut={() => setActiveMarker(null)}>
                            {
                                activeMarker === data.contentid || (center.lat === Number(data.mapy) && center.lng === Number(data.mapx))
                                    ?
                                    (<InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                                        <div>{data.title}</div>
                                    </InfoWindowF>)
                                    : null
                            }
                        </MarkerF>
                    )
                }) : <></>
            }
        </GoogleMap>
    ) : <></>
}

export default memo(MyMap);