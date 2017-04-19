import todos from './todos';
import { addTodo } from '../action'
import { selectedReddit } from './reddit';
describe('reducers', ()=> {
    it('shoule provide the action add', ()=>{
        const action = {
            id: 0,
            text: 'add table',
            type: "ADD_TODO",
        };
        expect(addTodo('add table')).toEqual(action)
    })

   it('should provide the initial state', () => {
       expect(todos(undefined,{})).toEqual([])

       expect(todos(undefined,addTodo('add table'))).toEqual([{
           id: 1,
           text: 'add table',
           completed: false
       }])

       expect(todos(undefined,{
           type: 'ADD_TODO',
           text: 'Run the tests',
           id: 0
       })).toEqual([{
           id: 0,
           text: 'Run the tests',
           completed: false
       }])
    })


    it('should provide the initial state', () => {
        const selectAction = {
            type: 'SELECT_REDDIT',
            reddit: 'vuejs'
        }

        expect(selectedReddit(undefined,selectAction)).toBe('vuejs')
    })
})

