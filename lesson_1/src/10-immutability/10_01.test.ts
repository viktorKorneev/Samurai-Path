import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    type UserType,
    type UserWithBooksType,
    type UserWithLaptopType, type WithCompaniesTyep, type WithCompaniesType
} from "./10_01.ts";
import {expect} from "vitest";


test("reference type test", () => {
    let user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk"
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const awasomeUser = makeHairstyle(user, 2);

    user = awasomeUser;

    expect(user.hair).toBe(32)
    expect(awasomeUser.hair).toBe(16)
    expect(awasomeUser.address).toBe(user.address)
})

test("change address", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const movedUser = moveUser(user, "Kiev");

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Kiev")
})

test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const userCopy = upgradeUserLaptop(user, "Macbook");

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("ZenBook")
})

test("upgrade laptop to macbook", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = moveUserToOtherHouse(user, 99);

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address).toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})

test("add new books to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = addNewBooksToUser(user, "ts");

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe("ts")
    expect(user.books.length).toBe(4)
})

test("update js to ts", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = updateBook(user, "js", "ts");

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("ts")
    expect(user.books.length).toBe(4)
})

test("remove js book", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = removeBook(user, "js");

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("react")
})

test("update company", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        companies: [{id: 1, title: "Епам"}, {id: 2, title: "IT-INCUBATOR"}],

    }

    const userCopy = updateCompanyTitle(user, 1, "EPAM")

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe("EPAM")
})

test("update company", () => {
    let companies = {
        "Dimych": [{id: 1, title: "Епам"}, {id: 2, title: "IT-INCUBATOR"}],
        "Artem": [{id: 2, title: "IT-INCUBATOR"}]
    }

    const copy = updateCompanyTitle2(companies, "Dimych", 1, "EPAM")

    expect(copy["Dimych"]).not.toBe(companies["Dimych"])
    expect(copy["Artem"]).toBe(companies["Artem"])
    expect(copy["Dimych"][0].title).toBe("EPAM")
})