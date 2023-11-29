import * as Styled from './style'

export default function FormInputCol({ data: {
    text, type, id, name, onChangeFunc, ref, placeholder, value, readOnly
}}) {

    return (
        <>
            <Styled.StyledLabel htmlFor={id}>{text}</Styled.StyledLabel>
            <Styled.StyledInput type={type} id={id} name={name} onChange={onChangeFunc ??= null} ref={ref} placeholder={placeholder ??= ""} value={value} readOnly={readOnly ??= false} />
        </>
    )
}