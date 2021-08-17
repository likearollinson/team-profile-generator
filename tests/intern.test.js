const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should create an object with intern information', () => {
            const intern = new Intern('Brad', 1, 'brad@email.com', 'UNC');

            expect(intern.name).toEqual(expect.any(String));
            expect(intern.id).toEqual(expect.any(Number));
            expect(intern.email).toEqual(expect.any(String));
        });
    });

    describe('Name', () => {
        it('should have an intern name matching the input', () => {
            const intern = new Intern('Brad', 1, 'brad@email.com', 'UNC');

            expect(intern.name).toEqual('Brad');
        });
    });

    describe('ID', () => {
        it('should have an intern id matching the input', () => {
            const intern = new Intern('Brad', 1, 'brad@email.com', 'UNC');

            expect(intern.id).toEqual(1);
        });
    });

    describe('Email', () => {
        it('should have an intern email matching the input', () => {
            const intern = new Intern('Brad', 1, 'brad@email.com', 'UNC');

            expect(intern.email).toEqual('brad@email.com');
        });
    });

    describe('Git', () => {
        it('should have an intern school matching the input', () => {
            const intern = new Intern('Brad', 1, 'brad@email.com', 'UNC');

            expect(intern.school).toEqual('UNC');
        });
    });

    describe('Role', () => {
        it('should have an intern role matching "Intern"', () => {
            const intern = new Intern('Brad', 1, 'brad@email.com', 'UNC');

            expect(intern.getRole()).toEqual('Intern');
        });
    });
})