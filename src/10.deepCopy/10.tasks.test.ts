import {users} from "../08.associate-array/08.associate.test";

test('should update corresponding user', () => {
    users['1'].name = 'Katya'

    expect(users['1'].name).toBe('Katya')
    expect(users['1']).toEqual({id:1, name:'Katya'})
})