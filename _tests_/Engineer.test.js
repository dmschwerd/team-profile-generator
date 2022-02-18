const Engineer = require('../lib/Employee');

describe('Engineer', () => {
    it('Engineer should be made successfully', () => {
        const e = new Engineer();

        expect(e).not.toBeUndefined();
    });
})