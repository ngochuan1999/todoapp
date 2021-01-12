
function Status(props) {
    const { status } = props;
    switch (status) {
        case 'done':
            return <p style={{ color: 'green', fontWeight: 'bold' }}>{status} </p>
        case 'cancel':
            return <p style={{ color: 'red', textDecoration: 'line-through' }}>{status}</p>
        case 'pending':
            return <p style={{ color: 'violet', textDecoration: 'underline' }}>{status}</p>
        default:
            return <p>{status}</p>
    }
}
export default Status