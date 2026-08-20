import './App.css'
import {User} from "./05/06-callbacks.tsx";

function App() {

    return (
        <>
            {/*const tasks = [*/}
            {/*{ id: 1, title: "Купить продукты на неделю", isDone: false },*/}
            {/*{ id: 2, title: "Полить цветы", isDone: true },*/}
            {/*{ id: 3, title: "Сходить на тренировку", isDone: false },*/}
            {/*]*/}

            {/*<h1>Список дел</h1>*/}
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <div>Купить продукты на неделю</div>*/}
            {/*        <input type={"checkbox"}/>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <div>Полить цветы</div>*/}
            {/*        <input type={"checkbox"}/>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <div>Сходить на тренировку</div>*/}
            {/*        <input type={"checkbox"}/>*/}
            {/*    </li>*/}
            {/*</ul>*/}
            <User/>
        </>
    )
}

export default App
