export const usersObj = {
    '0': 'first',
    '1': 'second',
    '2': 'third',
    '3': 'fourth'
}

export type UserType = {
    [key: string]: { id: number, name: string }
}

export const userArray = [
    {id: 101, name: 'first'},
    {id: 1020, name: 'second'},
    {id: 323232, name: 'third'},
    {id: 1, name: 'fourth'}
]
userArray.find(e => e.id === 1)

export let users: UserType = {
    '101': {id: 101, name: 'first'},
    '1020': {id: 1020, name: 'second'},
    '323232': {id: 323232, name: 'third'},
    '1': {id: 1, name: 'fourth'}
}

// users[1]

const user = {id: 2010, name: 'Isa'}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Islam'
