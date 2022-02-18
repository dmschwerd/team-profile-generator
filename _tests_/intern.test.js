const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('Intern should be made successfully', () => {
        const e = new Intern();

        expect(e).not.toBeUndefined();
    });
})