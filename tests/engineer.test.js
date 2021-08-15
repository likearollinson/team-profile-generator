const { it } = require('@jest/globals');
const { describe } = require('yargs');
const Engineer = require('../lib/Engineer');

describe('Engineer'), () => {
    describe('Initialization', () => {
        it('should create an object with engineer information', () => {
            const engineer = new Engineer('Brad', 1, 'brad@email.com', 'gitBrad');

            expect(engineer.name).toEqual(expect.any(String));
            expect(engineer.id).toEqual(expect.any(Number));
            expect(engineer.email).toEqual(expect.any(String));
        });
    });

    describe('Name', () => {
        it('should have an engineer name matching the input', () => {
            const engineer = new Engineer('Brad', 1, 'brad@email.com', 'gitBrad');

            expect(engineer.name).toEqual('Brad');
        });
    });

    describe('ID', () => {
        it('should have an engineer id matching the input', () => {
            const engineer = new Engineer('Brad', 1, 'brad@email.com', 'gitBrad');

            expect(engineer.id).toEqual(1);
        });
    });

    describe('Email', () => {
        it('should have an engineer email matching the input', () => {
            const engineer = new Engineer('Brad', 1, 'brad@email.com', 'gitBrad');

            expect(engineer.email).toEqual('brad@email.com');
        });
    });

    describe('Git', () => {
        it('should have an engineer GitHub matching the input', () => {
            const engineer = new Engineer('Brad', 1, 'brad@email.com', 'gitBrad');

            expect(engineer.gitHub).toEqual('gitBrad');
        });
    });

    describe('Role', () => {
        it('should have an engineer role matching "Engineer"', () => {
            const engineer = new Engineer('Brad', 1, 'brad@email.com', 'gitBrad');

            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
}