import * as Styled from './style'

export default function BoardDetailImage({ props: { src } }) {
    return (
        <Styled.StyledListItem>
            <img src={src} alt="" />
        </Styled.StyledListItem>
    )
}
