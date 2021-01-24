
import { useState } from 'react'
import todoStore from '../TodoStore/TodoStore'
import Taskitem from './Taskitem';
function Text(props) {
    const { isTitle, content, index } = props;


    if (isTitle) {

        return (<div><h1>{content}</h1> <Taskitem index={index} />
        </div>)

    } else {
        return (<p>{content}</p>)
    }
}
// return (
//     <p style={isTitle ? { fontWeight: 'bold' } : {}}>  {content}</p>

// );

export default (Text) 