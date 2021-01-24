
import { makeAutoObservable } from "mobx"

class TodoStore {
    taskList = [
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
    ];
    constructor() {
        makeAutoObservable(this)
    }
    addNewTask(task) {
        this.taskList.push(task);
    }
    deleteTask(index) {
        // this.taskList.slice(index, 1)
        let newList = [...this.taskList]
        newList.splice(index, 1)
        this.taskList = newList
    }
    updateData = (value, index) => {

        // const dataTemp = [...dataTask];
        // todoStore.taskList[index].content = value;
        // setDataTask(dataTemp);
        const dataTemp = [...this.taskList];
        this.taskList[index].content = value;
        this.taskList = dataTemp;
    }
    HandleCheck(a) {
        return a;
    }

}
const todoStore = new TodoStore()
export default todoStore;