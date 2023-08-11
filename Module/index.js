var MyModule = (function() {
    // Private variables and functions
    var privateVariable = 'This is private';
  
    function privateFunction() {
      console.log('This is a private function');
    }
  
    // Public API
    return {
      publicVariable: 'This is public',
      publicFunction: function() {
        console.log('This is a public function');
      }
    };
  })()
  
  // Usage
  console.log(MyModule.publicVariable); // Output: 'This is public'
  MyModule.publicFunction(); // Output: 'This is a public function'
//   console.log(MyModule.privateVariable); // Output: undefined (private variable inaccessible)
//   MyModule.privateFunction(); // Output: TypeError (private function inaccessible)

function test(){
kdjshdhs
}