export type UserType = {
    [key: string]: { id: number, name: string }
}

export let users: UserType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'first'},
        '1020': {id: 1020, name: 'second'},
        '323232': {id: 323232, name: 'third'},
        '1': {id: 1, name: 'fourth'}
    }
})

test('should update corresponding user', () => {
    users['1'].name = 'Katya'

    expect(users['1'].name).toBe('Katya')
    expect(users['1']).toEqual({id:1, name:'Katya'})
})

test('should delete corresponding user', () => {
    delete users['1']

    expect(users['1']).toBeUndefined()
})