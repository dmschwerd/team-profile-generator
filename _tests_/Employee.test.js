const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Employee should be made successfully', () => {
        const e = new Employee();

        expect(e).not.toBeUndefined();
    });
})