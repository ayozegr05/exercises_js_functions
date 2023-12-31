const fs = require('fs');
const rewire = require('rewire');
global.console.log = console.log = jest.fn(text => null);

it('Call the console.log function once', function () {
    const app = require('./app.js');
     expect(console.log).toHaveBeenCalledTimes(1);
});
it('The console.log output does not match what we expected', function () {
    const app = require('./app.js');
    expect(console.log).toHaveBeenCalledWith(324234 * 47);
});
it('There must be an arrow => at some point in your code', () => {
    const regex = /=>/gm;
    const fileContent = fs.readFileSync('./exercises/06-Arrow-function/app.js');
    const match = regex.exec(fileContent);
    expect(match).toBeTruthy();
});
it('Your code must not contain the word "function" anywhere', () => {
    const regex = /function/gm;
    const fileContent = fs.readFileSync('./exercises/06-Arrow-function/app.js');
    const match = regex.exec(fileContent);
    expect(match).not.toBeTruthy();
});

it('Looking for the "multi" declaration', () => {
    const app = rewire('./app.js');
    const multi = app.__get__('multi');
    expect(multi).toBeTruthy();
});

it('"multi" must be an arrow and not a tradicional function', () => {
    const app = rewire('./app.js');
    const multi = app.__get__('multi');
    expect(multi.prototype).toBe(undefined);
});
