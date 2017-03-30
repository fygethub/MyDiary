import counter from './index';

describe('reducers', ()=> {
    it('should provide the initial state', () => {
        expect(counter(undefined, {})).toBe(0)
    })
})