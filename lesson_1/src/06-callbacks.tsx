// const callback = () => {
//     // alert("hey")
// };
// window.setTimeout(callback, 1000)



import type {ChangeEvent} from "react";

export const User = () => {

    const deleteUser = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    // const saveUser = (event:) => {
    //     alert("user have been saved")
    // }

    const onNameChanged = () => {
        console.log("name changed")
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed: " + event.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log("focus lost")
    }
    
    return <div><textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name="delete" onClick={deleteUser}>delete</button>
        {/*<button name="save" onClick={deleteUser}>x</button>*/}
    </div>
}