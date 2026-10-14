const accountId=24107053
let accountEmail="holeanisha9@gmail.com"
var accountPassword="12345678"
accountCity="Baramati"

// accountId=1 // not allowed

accountEmail="abc.com"
accountPassword="424242"
accountCity="Pune"

console.log(accountId);

/* Prefer not to use "VAR"
because of issue in block scope and function scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity]);

