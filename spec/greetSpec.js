'use strict'

let greet = require('../src/greet');

describe('greet', () => {

    it('Should greet the given name', () => {
        expect(greet('Joe')).toEqual('Hello Joe!');
    });

    it('should greet no-one special if no name is given', function () {
        expect(greet()).toEqual('Hello world!');
    });
})