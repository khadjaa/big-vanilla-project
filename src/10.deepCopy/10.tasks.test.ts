export {}

test('man age should be changed', () => {

    // data
    let man = {
        name: 'John',
        age: 28
    };

    //action
    let manFullCopy = {...man, age: 20} //  your code

    // expected
    expect(man.age).not.toEqual(manFullCopy.age)
})

test('man array age should be changed', () => {

    // data
    let man2 = {
        name: 'John',
        age: 28,
        friends: ["Peter", "Steven", "William"]
    };

    //action
    let manFullCopy = {...man2, friends: [...man2.friends, 'Masha']} //  your code

    // expected
    expect(man2.friends).not.toBe(manFullCopy.friends)
})

test('man array1 age should be changed', () => {
    // data
    let people = [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ];
    //action
    // let manFullCopy = [...people, people[0]: {...}] //  your code
    let peopleFullCopy = people.map(el => el.age === 30 ? {...el, age: 555} : {...el})

    // expected
    // expect(man2.friends).not.toBe(manFullCopy.friends)
    expect(people[0].age).not.toEqual(peopleFullCopy[0].age)
    expect(people[1]).not.toBe(peopleFullCopy[1])
})

