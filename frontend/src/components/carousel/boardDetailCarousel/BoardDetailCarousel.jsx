import { useCallback, useEffect, useRef, useState } from 'react'
import BoardDetailImage from 'components/img/boardDetailImage/BoardDetailImage'
import * as Styled from './style'

export default function BoardDetailCarousel({ props: { images } }) {
    const [index, setIndex] = useState(0);
    const containerRef = useRef();
    const prevButtonRef = useRef();
    const nextButtonRef = useRef();

    const handlerLeftClick = useCallback((e) => {
        e.stopPropagation();

        setIndex(index - 1);
    }, [index]);

    const handlerRightClick = useCallback((e) => {
        e.stopPropagation();

        setIndex(index + 1);
    }, [index]);

    useEffect(() => {
        const prevButton = prevButtonRef.current;
        const nextButton = nextButtonRef.current;

        prevButton.addEventListener("click", handlerLeftClick);
        nextButton.addEventListener("click", handlerRightClick);

        return () => {
            prevButton.removeEventListener("click", handlerLeftClick);
            nextButton.removeEventListener("click", handlerRightClick);
        }
    }, [handlerLeftClick, handlerRightClick]);

    useEffect(() => {
        setIndex(0);
    }, [images]);

    return (
        <Styled.StyledCarouselWrapper>
            <Styled.StyledImageList ref={containerRef} margin={(-42 * index) + "vw"}>
                {
                    images ?
                        images.map((data, index) => <BoardDetailImage key={index} props={{ src: data }} />)
                        : <></>
                }
            </Styled.StyledImageList>
            <Styled.StyledLeftButton ref={prevButtonRef} show={index != 0 ? "flex" : "none"} >
                <span>왼쪽으로 이동</span>
                <i className="fas fa-chevron-left"></i>
            </Styled.StyledLeftButton>
            <Styled.StyledRightButton ref={nextButtonRef} show={index != images.length - 1 ? "flex" : "none"}>
                <span>오른쪽으로 이동</span>
                <i className="fas fa-chevron-right"></i>
            </Styled.StyledRightButton>
        </Styled.StyledCarouselWrapper>

    )
}
