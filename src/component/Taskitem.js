import { useState } from "react";
import todoStore from '../TodoStore/TodoStore'

function Taskitem(props) {
    const [check, isCheck] = useState(false)
    const Handledelete = () => {
        todoStore.deleteTask(props.index)
    }
    const HandleCheck = () => {
        isCheck(true)
    }
    const showCheck = () => {
        if (!check) {
            return (
                <div> <button onClick={HandleCheck}><i class="far fa-check-circle"></i></button>
                    <button onClick={Handledelete}><i class="far fa-trash-alt"></i></button></div>
            )
        }
        else {
            return (<div>
                <button onClick={Handledelete}><i class="far fa-trash-alt"></i></button></div>)

        }
    }

    return (
        <div>{showCheck()}
        </div>

    );
}

export default Taskitem;
