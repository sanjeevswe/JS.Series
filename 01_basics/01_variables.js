const accountId = 8624
let accountEmail = "sanjeev123@gmail.com"
var accountPassword = "54321"
accountCity = "Jaipur"
let accountState;

/*
Prefer not to use var
because of issue in block  scope and functional scope
*/

//accountId = 9  //not allowed
accountEmail = "abc@gmail.com"
accountPassword = "121212"
accountCity = "Muzaffarpur"

//console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])