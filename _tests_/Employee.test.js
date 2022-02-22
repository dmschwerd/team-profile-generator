const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Employee should be made successfully', () => {
        const e = new Employee();

        expect(e).not.toBeUndefined();
    });

    it('Employee constructor should take in credentials', () => {
        const e = new Employee('testName', 'testId', 'testEmail');

        expect(e.name).toEqual('testName');
        expect(e.id).toEqual('testId');
        expect(e.email).toEqual('testEmail');
    });

    it('getName should return name', () => {
        const e = new Employee('testName', 'testId', 'testEmail');

        expect(e.getName()).toEqual('Employee')
    });

    it('getEmail should return email', () => {
        const e = new Employee('testName', 'testId', 'testEmail');

        expect(e.getEmail()).toEqual('Employee')
    });
    
    it('getId should return id', () => {
        const e = new Employee('testName', 'testId', 'testEmail');

        expect(e.getId()).toEqual('Employee')
    });

    it('getRole should return role', () => {
        const e = new Employee('testName', 'testId', 'testEmail');

        expect(e.getRole()).toEqual('Employee')
    });
})