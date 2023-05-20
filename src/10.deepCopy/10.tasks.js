// links to watch theory
// https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be

// 1. Simple object

let man = {
    name: 'John',
    age: 28
};

let manFullCopy = {...man, age: 20} //  your code
console.log('manFullCopy', manFullCopy.age)
console.log('man', man.age)


// 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy = [...numbers, 4] //  your code
console.log('numbersFullCopy', numbersFullCopy)
console.log('numbers', numbers)

// 3. Object inside an object
let man1 = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};

let man1FullCopy = {...man1, mother: {...man1.mother, name: 'Buva'}}// your code
console.log('man1FullCopy', man1FullCopy.mother.name)
console.log('man1', man1.mother.name)

// 4. Array of primitives inside an object
let man2 = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};

let man2FullCopy = {...man2, friends: [...man2.friends, 'Albert']}// your code
console.log('man2FullCopy', man2FullCopy.friends)
console.log('man2', man2.friends)

// 5 Array of objects
let people = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
];

let peopleFullCopy = people.map(el => el.age === 30 ? {...el, age: 555} : {...el}) // your code

people[2].age = 1000

console.log('peopleFullCopy', peopleFullCopy[2].age)
console.log('people', people[0].age)

// 6 Array of objects inside object
let man3 = {
    name: 'John',
    age: 28,
    friends: [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ]
};

let man3FullCopy = {...man3, friends: man3.friends.map(el => ({...el, status: false}))} //  your code
console.log('man3FullCopy', man3FullCopy.friends)
console.log('man3', man3.friends)

// 7 Object inside an object, inside an object
let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};

let man4FullCopy = {...man4, mother: {...man4.mother, work: {...man4.mother.work, position: 'Joker'}}}//  your code
console.log('man4FullCopy', man4FullCopy.mother.work.position)
console.log('man4', man4.mother.work.position)

// 8 Array of objects inside object -> object
let man5 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {name: "Kevin", age: 80},
            {name: "Jennifer", age: 78},
        ]
    }
};

let man5FullCopy = {
    ...man5,
    mother: {
        ...man5.mother,
        work: {
            ...man5.mother.work
        },
        parents: man5.mother.parents.map(el => ({...el, status: false}))
    }
}
//  your code
console.log('man5FullCopy', man5FullCopy.mother.parents)
console.log('man5', man5.mother.parents)

// 9 Object inside an object -> array -> object ->  object
let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};

let man6FullCopy = {
    ...man6,
    mother: {
        ...man6.mother,
        work: {
            ...man6.mother.work
        },
        parents: man6.mother.parents
            .map(el => ({...el, favoriteDish: {...el.favoriteDish, title: 'pizza'}}))
    }
}//  your code

console.log('man6FullCopy', man6FullCopy.mother.parents[1].favoriteDish.title)
console.log('man6', man6.mother.parents[1].favoriteDish.title)

//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rise", amount: 0.5}
                    ]
                }
            },
        ]
    }
};

let man7FullCopy = {
    ...man7,
    mother: {
        ...man7.mother,
        work: {
            ...man7.mother.work
        },
        parents: man7.mother.parents
            .map(el => ({
                ...el,
                favoriteDish: {
                    ...el.favoriteDish,
                    ingredients: el.favoriteDish.ingredients
                        .map(el => ({...el, title: 'Gusht'}))
                }
            }))
    }
}//  your code

console.log('man7FullCopy', man7FullCopy.mother.parents[0].favoriteDish.ingredients[0].title)
console.log('man7', man7.mother.parents[0].favoriteDish.ingredients[0].title)
