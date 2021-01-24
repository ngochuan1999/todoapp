import Text from '../component/Text';
function Doing(props) {
    const { content, title, } = props;
    return (
        <div>
            <Text isTitle content={title} />
            <Text content={content} />
        </div>
    );
}
export default Doing