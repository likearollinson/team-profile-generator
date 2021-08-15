const { it } = require('@jest/globals');
const { describe } = require('yargs');
const Employee = require('../lib/Employee');

describe('Employee'), () => {
    describe('Initialization', () => {
        it('should create an object with employee information', () => {
            const employee = new Employee('Brad', 1, 'brad@email.com');

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
    });

    describe('Name', () => {
        it('should have an employee name matching the input', () => {
            const employee = new Employee('Brad', 1, 'brad@email.com');

            expect(employee.name).toEqual('Brad');
        });
    });

    describe('ID', () => {
        it('should have an employee id matching the input', () => {
            const employee = new Employee('Brad', 1, 'brad@email.com');

            expect(employee.id).toEqual(1);
        });
    });

    describe('Email', () => {
        it('should have an employee email matching the input', () => {
            const employee = new Employee('Brad', 1, 'brad@email.com');

            expect(employee.email).toEqual('brad@email.com');
        });
    });

    describe('Role', () => {
        it('should have an employee role matching "Employee"', () => {
            const employee = new Employee('Brad', 1, 'brad@email.com');

            expect(employee.getRole()).toEqual('Employee');
        });
    });
}