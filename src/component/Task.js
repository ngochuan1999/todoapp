import React from 'react';
import Text from './Text';
import Status from './Status';
import InputText from './InputText';

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
        updateData(inputValue.value, inputValue.index)
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
            return (<div onClick={() => { setIsEditting(true) }}>
                <Text isTitle content={title} />
                <Text content={content} />
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
export default Task