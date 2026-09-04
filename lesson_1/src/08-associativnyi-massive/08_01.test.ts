import {beforeEach, expect} from "vitest";

type UsersType = {
    [key: string]: {id:number,name: string}
}

let users: UsersType

beforeEach(() => {
    users = {
        "101": {id: 101, name: "Dimych"},
        "3223231": {id: 3223231, name: "Natasha"},
        "1212": {id: 1212, name: "Valera"},
        "1": {id: 1, name: "Katya"},
    }
})

test("shoul select corresponding user from obj", () => {
    users['1'].name = "Ekaterina"
    expect(users[1].name).toBe("Ekaterina")
} )

test("shoul delete corresponding user from obj", () => {
    delete users['1']
    expect(users[1]).toBeUndefined()
} )