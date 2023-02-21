export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: "Andrew Ivanov", age: 33},
    {name: "islam isa", age: 21},
    {name: "Dmitry San", age: 27}
]

const dimychTransformator = (man: ManType) => {
    return {
        stack: ["css, html", "js, ts", "react"],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
}

const devs = [
    {
        stack: ["css, html", "js, ts", "react"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["css, html", "js, ts", "react"],
        firstName: "islam", lastName: "isa"
    },
    {
        stack: ["css, html", "js, ts", "react"],
        firstName: "Dmitry", lastName: "San"
    },
]

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const devs3 = people.map(dimychTransformator)

const devs4 = people.map(man => ({
        stack: ["css, html", "js, ts", "react"],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    })
)


export const createGreetingMessage = (people: ManType[]) => {
    return  people.map( man => `Hello ${man.name.split(' ')[0]}. Welcome to IT`)
}
