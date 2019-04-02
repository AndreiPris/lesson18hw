const calc = require('./index.js');

test('add 2 + 2 = 4', () => {
 expect(calc.calculateSum()(2, 2)).tobe(4)

});
