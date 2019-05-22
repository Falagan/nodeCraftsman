'use strict'

let greet = function(name){
    let result;
    result = name ? `Hello ${name}!` : 'Hello world!';
    return result;
};

module.exports = greet;