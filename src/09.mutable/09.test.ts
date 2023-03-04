export type UserType = {
    name: string
    age: number
}

const  icreaseAge = (u:UserType) => {
    u.age++;
}

test('reference type test', ()=> {
    let user: UserType = {
        name : 'Isa',
        age: 21
    }

    icreaseAge(user)

    expect(user.age).toBe(22)
})

test('array test', ()=> {
    let users = [
        {
            name : 'Isa',
            age: 21
        },
        {
            name : 'Isa',
            age: 21
        }
    ]

    let admin = users

    admin.push({name: 'bandit', age: 10})

    expect(users[2]).toEqual({name: 'bandit', age: 10})
})