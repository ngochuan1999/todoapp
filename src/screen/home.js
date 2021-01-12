import '../style/home.css'
import Task from '../component/Task.js'
import React, { useState } from 'react'
function Home() {
    const title = {
        textTransform: 'uppercase',
    }
    const DATA = [
        {
            title: 'title1',
            content: 'hoc reactjs',
            status: 'done',

        },
        {
            title: 'title2',
            content: 'hoc Js',
            status: 'cancel',
        },
        {
            title: 'title3',
            content: 'hoc html',
            status: 'pending',
        },
    ]
    const [dataTask, setDataTask] = useState(DATA)
    const updateData = (value, index) => {
        const task = {
            ...dataTask[index],
            content: value,
        }
        const dataTemp = [
            ...dataTask,
            task,
        ]
        setDataTask(dataTemp);
    }
    const renderTask = () => {
        return dataTask.map((item, index) => {
            return <Task
                key={index}
                {...item}
                isLastItem={index === dataTask.length - 1}
                isFirstItem={index === 0}
                updateData={updateData}
            />
        })
    }
    return (
        <div className="container">
            <h2 style={title}>To do list</h2>
            <ul>
                {renderTask()}
            </ul>
        </div>
    );
}
export default Home