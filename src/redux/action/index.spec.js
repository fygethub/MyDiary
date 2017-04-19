import  { addTodo } from './index'


describe('todo actions', () => {
    it('should create an action to add a todo ', () => {
        const text = 'join a party';
        const expectedAction = {
            type: 'ADD_TODO',
            text,
            id: 0
        }
        expect(addTodo(text)).toEqual(expectedAction)
    })
})
















