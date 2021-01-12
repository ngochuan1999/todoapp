
function InputText(props) {
    return (
        <input type='text' onChange={(e) => {

            console.log('input text', e.target.value)
            props.getValue(e.target.value, props.index)

        }} />
    )
}
export default InputText