const { it } = require('@jest/globals');
const { describe } = require('yargs');
const Manager = require('../lib/Manager');

describe('Manager'), () => {
    describe('Initialization', () => {
        it('should create an object with manager information', () => {
            const manager = new Manager('Brad', 1, 'brad@email.com', 42);

            expect(manager.name).toEqual(expect.any(String));
            expect(manager.id).toEqual(expect.any(Number));
            expect(manager.email).toEqual(expect.any(String));
        });
    });

    describe('Name', () => {
        it('should have an manager name matching the input', () => {
            const manager = new Manager('Brad', 1, 'brad@email.com', 42);

            expect(manager.name).toEqual('Brad');
        });
    });

    describe('ID', () => {
        it('should have an manager id matching the input', () => {
            const manager = new Manager('Brad', 1, 'brad@email.com', 42);

            expect(manager.id).toEqual(1);
        });
    });

    describe('Email', () => {
        it('should have an manager email matching the input', () => {
            const manager = new Manager('Brad', 1, 'brad@email.com', 42);

            expect(manager.email).toEqual('brad@email.com');
        });
    });

    describe('Git', () => {
        it('should have an manager GitHub matching the input', () => {
            const manager = new Manager('Brad', 1, 'brad@email.com', 42);

            expect(manager.gitHub).toEqual(42);
        });
    });

    describe('Role', () => {
        it('should have an manager role matching "Manager"', () => {
            const manager = new Manager('Brad', 1, 'brad@email.com', 42);

            expect(manager.getRole()).toEqual('Manager');
        });
    });
}