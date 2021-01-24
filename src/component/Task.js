import React from 'react';
import Text from './Text';
import Status from './Status';
import InputText from './InputText';
import PropTypes from 'props-type'


const propTypesTask = {

    content: PropTypes.string,
    title: PropTypes.string,
    updateData: PropTypes.func,
    index: PropTypes.number,
    isLastItem: PropTypes.bool,
    isFirstItem: PropTypes.bool,

}
const defaultProps = {
    isLastItem: false,
    isFirstItem: false,
    content: "new",
    title: "title new",
    index: 0,
    updateData: () => console.log('default funtion')


}

function Task(props) {
    const { isLastItem, isFirstItem, content, title, status, updateData, index, } = props;
    const chooseStyle = () => {
        if (isLastItem) return { color: 'red' };
        if (isFirstItem) return { color: 'blue' }

        return
    }
    const [isEditing, setIsEditting] = React.useState(false);
    const [inputValue, setInputValue] = React.useState({ value: '', index: 0 });
    const getValue = (value, index) => {
        setInputValue({ value: value, index: index });
    }

    const saveData = () => {
        setIsEditting(false)
        if (inputValue.value.trim()) {
            updateData(inputValue.value, inputValue.index)
        }
    }
    const showInputText = () => {
        if (isEditing) {
            return (
                <div><InputText getValue={getValue} index={index} />
                    <p onClick={() => {
                        saveData()
                    }}>Save</p>
                </div>
            )
        }

        else {
            return (<div>
                <Text index={index} isTitle content={title} />
                <div onClick={() => { setIsEditting(true) }} >
                    <Text content={content} />
                </div>

            </div>
            )
        }
    }
    return (
        <div>
            <li style={
                chooseStyle()
            }>
                {showInputText()}
                <Status status={status} />
            </li>
        </div>
    );
}
Task.propTypes = propTypesTask;
Task.defaultProps = defaultProps;
export default Task
