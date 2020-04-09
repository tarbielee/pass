let password = require("../src/password_checker")
let passwordIsOkay = password.passwordIsOk


describe("passwordIsOkay", function() {

    
    it("password should meet at least three of the conditions", function() {
        expect(passwordIsOkay("tarbielee10")).toBe(true)

    });

 });  
   