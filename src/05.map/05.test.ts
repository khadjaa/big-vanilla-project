import {createGreetingMessage, ManType} from "./05";

let people: ManType[]

beforeEach( ()=> {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "islam isa", age: 21},
        {name: "Dmitry San", age: 27}
    ]
})

test('should get array of greeting messages', ()=> {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrew. Welcome to IT')
    expect(messages[1]).toBe('Hello islam. Welcome to IT')
    expect(messages[2]).toBe('Hello Dmitry. Welcome to IT')
})