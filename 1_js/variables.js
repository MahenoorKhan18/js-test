//"{}" this are scope, var is not used in new js because of issue in block scope and functional scope

const accountId = 12346  //this value will not change
let accountEmail = "khanmahneoor1818@gmial.com"
var accountPasword = "324745"
accountCity = "Mumbai" //we can declare variable value without variable 


// accountId = 2// not allowed
accountEmail = "test@gmail.com"
accountPasword = "1234"
accountCity = "New Mumbai"

console.log(accountId);

console.table([accountId,accountEmail,accountPasword,accountCity]) //it will represent the output in table 