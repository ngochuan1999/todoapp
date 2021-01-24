
function InputText(props) {
    return (
        <input type='text' onChange={(e) => {
            props.getValue(e.target.value, props.index)


        }} />
    )
}
export default InputText