var expect = require('expect');
var nv = require('../index.js');

describe('Test: node-validator', () => {

    describe('Should validate email', () => {
        it('Void', () => {
            expect(nv.isEmail('')).toBe(false);
        });
        it('English characters and numbers', () => {
            expect(nv.isEmail('sdoifnvlkn34kj')).toBe(false);
        });
        it('Domain name', () => {
            expect(nv.isEmail('vno.io')).toBe(false);
        });
        it('English characters space and number domain', () => {
            expect(nv.isEmail('vno 8.io')).toBe(false);
        });
        it('foo@bar without .net or .com etc...', () => {
            expect(nv.isEmail('vno@io')).toBe(true);
        });
        it('Normal email', () => {
            expect(nv.isEmail('vno@vno.io')).toBe(true);
        });
    });
    describe('Should validate pure english', () => {
        it('void', () => {
            expect(nv.isEmail('')).toBe(false);
        });
        it('numbers', () => {
            expect(nv.isEmail('1234')).toBe(false);
        });
        it('numbers & symbols', () => {
            expect(nv.isEmail('*&341')).toBe(false);
        });
        it('English characters and spaces', () => {
            expect(nv.isEmail('asdf adf')).toBe(false);
        });
        it('English characters and numbers', () => {
            expect(nv.isEmail('akjdhf9873')).toBe(false);
        });
        it('pure English characters', () => {
            expect(nv.isEmail('PureEnglish')).toBe(false);
        });
    });

});
