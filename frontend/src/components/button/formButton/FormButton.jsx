import * as Styled from './style'

export default function FormButton({ data: { onClickFunc, content, color } }) {
    return (
        <Styled.StyledButton onClick={onClickFunc} color={color}>
            {content}
        </Styled.StyledButton>
    )
}