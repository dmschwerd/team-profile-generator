const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Manager should be made successfully', () => {
        const e = new Manager();

        expect(e).not.toBeUndefined();
    });
})