function receivesAFunction(callback) {
    
    callback();
  }
  
  receivesAFunction(function() {
    console.log('Callback function called');
  });




  function returnsANamedFunction() {
    function namedFunction() {
    
    }
    return namedFunction;
  }

  const myNamedFunction = returnsANamedFunction();
myNamedFunction();



const returnsAnAnonymousFunction = () => {
  return function() {
   
  }
}
const myAnonymousFunction = returnsAnAnonymousFunction();
myAnonymousFunction();