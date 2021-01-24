import '../style/home.css'

import React, { useState } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import New from './new';
import Task from '../component/Task.js'
import Doing from './doing';
import Done from './done';
import todoStore from '../TodoStore/TodoStore';
import { observer } from "mobx-react"
function Home() {
    const title = {
        textTransform: 'uppercase',
    }

    // const DATA = [
    //     {
    //         title: 'title1',
    //         content: 'hoc reactjs',
    //         status: 'done',

    //     },
    //     {
    //         title: 'title2',
    //         content: 'hoc Js',
    //         status: 'cancel',
    //     },
    //     {
    //         title: 'title3',
    //         content: 'hoc html',
    //         status: 'pending',
    //     },
    // ]
    // const [dataTask, setDataTask] = useState(todoStore.taskList)
    // const updateData = (value, index) => {

    //     const dataTemp = [...dataTask];
    //     todoStore.taskList[index].content = value;
    //     setDataTask(dataTemp);
    // }

    const renderTask = () => {
        return todoStore.taskList.map((item, index) => {
            return <Task
                index={index}
                key={index}
                {...item}
                isLastItem={index === todoStore.taskList.length - 1}
                isFirstItem={index === 0}
                updateData={todoStore.updateData}
            />
        })
    }
    return (
        <BrowserRouter>
            <div className="container">
                <h2 style={title}>To do list</h2>
                <ul>
                    <li>
                        <Link to='/new'>New</Link>
                    </li>
                    <li>
                        <Link to='/doing'>Doing</Link>
                    </li>
                    <li>
                        <Link to='/done'>Done</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path='/new'>
                        {/* <New title={"Day la task new"}
                            content={"Phong yeu my hang"}
                            updateData={() => { }}
                            index={0}
                        /> */}

                        <ul><button
                            onClick={() => todoStore.addNewTask({
                                title: 'Task nay la task moi',
                                content: 'content',
                                status: 'pending',
                            })}
                        >Add neww task</button>
                            {renderTask()}
                        </ul>
                    </Route>
                    <Route path='/doing'>
                        <Doing
                            title={"Day la task doing"}
                            content={"Ngan ngan"}
                            updateData={() => { }}
                            index={0}
                        />
                    </Route>
                    <Route path='/done'>
                        <Task


                        />
                    </Route>
                </Switch>
                {/* <ul>
                    {renderTask()}
                </ul> */}
            </div>
        </BrowserRouter>
    );
}
export default observer(Home) 