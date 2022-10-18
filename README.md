# JStest
  Require: Computer installs node.js
## JS
## Jest

 How to set up and first build.
 
    npm install --save-dev jest
    
   ######First, create a sum.js file: 
   
    function sum(a, b) {
       return a + b;
            }
     module.exports = sum;
   
   ######Then, create a file named sum.test.js.
   
    const sum = require('./sum');

    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
         });
         
   ######Add the following section to your package.json:
   
    {
      "scripts": {
        "test": "jest"
                 }
    }
 
   
   ######Finally, run yarn test or npm test and Jest will print this message:
   npm test and Jest will print this message:

   ![alt text](https://tse1.mm.bing.net/th?id=OIP.7k0vdZL94Ts3yACJHBU5AQHaCR&pid=Api&P=0)
