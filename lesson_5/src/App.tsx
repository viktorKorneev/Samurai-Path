import './App.css'
import {useEffect, useState} from "react";

// const tasks = null
// const tasks = [
//     {
//         id: 1,
//         title: "Купить продукты на неделю",
//         isDone: false,
//         addedAt: "1 сентября",
//         priority: 3,
//     },
//     {
//         id: 2,
//         title: "Полить цветы",
//         isDone: true,
//         addedAt: "2 сентября",
//         priority: 3,
//     },
//     {
//         id: 3,
//         title: "Сходить на тренировку",
//         isDone: false,
//         addedAt: "3 сентября",
//         priority: 0,
//     },
// ]

const getPriorityColor = (priority: number) => {
    return priority === 0 ? "#ffffff" :
        priority === 1 ? "#ffd7b5" :
            priority === 2 ? "#ffb38a" :
                priority === 3 ? "#ff9248" : "#ff6700"
}

export function App() {
    const [tasks, setTasks] = useState(null)
    const [selectedTaskId, setSelectedTaskId] = useState(null)

    useEffect(() => {
        fetch("https://trelly.it-incubator.app/api/1.0/boards/tasks", {
            headers: {
                "api-key": "18dc5fd4-f962-432b-9c52-1e155a2c75c8"
            }
        })
            .then((res) => res.json())
            .then((json) => {
                setTasks(json.data)
            })
    }, [])


    if (tasks === null) {
        return (<span>Загрузка...</span>)
    }

    if (tasks.length === 0) {
        return (<span>Задачи отсутствуют</span>)
    }


    return (
        <div>
            <div>
                <button onClick={() => {setSelectedTaskId(null)}}>Сбросить выделение</button>
                {tasks.map((task) => {
                    return (
                        <ul onClick={ () => {setSelectedTaskId(task.id)}} key={task.id} style={{
                            listStyle: 'none',
                            border: selectedTaskId === task.id ? "3px solid blue" : "3px solid red",
                            textAlign: "left",
                            maxWidth: 350,
                            padding: 10,
                            backgroundColor: getPriorityColor(task.attributes.priority),
                        }}>
                            <li style={{textDecorationLine: task.attributes.status ? "line-through" : "none"}}>
                                <b>Заголовок:</b> {task.attributes.title}</li>
                            <li><b>Статус:</b> <input type={"checkbox"}/></li>
                            <li><b>Дата создания задачи:</b> {new Date(task.attributes.addedAt).toLocaleDateString()}</li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}
