const verifyPassword = require("../verifyPassword");


//************* test for length passwords *************//
test("verify the password length of 12345678 to be true (8 minimum)", function(){
    const password = '12345678';
    const result = verifyPassword(password);
    expect(result.length).toBe(true);
});


test("verify the password length of 1234567 to be false (8 minimum)", function(){
    const password = '1234567';
    const result = verifyPassword(password);
    expect(result.length).toBe(false);
});

test("verify the password length of ' ' to be false (8 minimum)", function(){
    const password = ' ';
    const result = verifyPassword(password);
    expect(result.length).toBe(false);
});
//******************************************************//

//************* test for lower case passwords *************//
test("verify the password of legendofzelda if it contains a lowercase letter (1 minimum) to be true", function(){
    const password = 'legendofzelda';
    const result = verifyPassword(password);
    expect(result.lowercase).toBe(true);
});

test("verify the password of LEGENDOFZELDA if it contains a lowercase letter (1 minimum) to be false", function(){
    const password = 'LEGENDOFZELDA';
    const result = verifyPassword(password);
    expect(result.lowercase).toBe(false);
});

test("verify the password of LEGENDOFZELDA if it contains a lowercase letter (1 minimum) to be true", function(){
    const password = 'LEGENDOFZELDAs';
    const result = verifyPassword(password);
    expect(result.lowercase).toBe(true);
});
//******************************************************//



//************* test for uppercase passwords *************//
test("verify the password of Legendofzelda if it contains an uppercase letter (1 minimum) to be true", function(){
    const password = 'Legendofzelda';
    const result = verifyPassword(password);
    expect(result.uppercase).toBe(true);
});

test("verify the password of legendofzelda if it contains an uppercase letter (1 minimum) to be false", function(){
    const password = 'legendofzelda';
    const result = verifyPassword(password);
    expect(result.uppercase).toBe(false);
});

test("verify the password of legendofzelda if it contains an uppercase letter (1 minimum) to be true", function(){
    const password = 'LEGENDOFZELDA';
    const result = verifyPassword(password);
    expect(result.uppercase).toBe(true);
});
//******************************************************//


//************* test for numerical digits in passwords *************//
test("verify the password of Legendofzelda1 if it contains a numerical digit  (1 minimum) to be true", function(){
    const password = 'Legendofzelda1';
    const result = verifyPassword(password);
    expect(result.digit).toBe(true);
});

test("verify the password of legendofzelda if it contains a numerical digit (1 minimum) to be false", function(){
    const password = 'legendofzelda';
    const result = verifyPassword(password);
    expect(result.digit).toBe(false);
});
//******************************************************//


//************* test for symbols: !@#$%^&* in passwords *************//
test("verify the password of Legendofzelda! if it contains a symbol (1 minimum) to be true", function(){
    const password = 'Legendofzelda!';
    const result = verifyPassword(password);
    expect(result.symbol).toBe(true);
});

test("verify the password of legendofzelda if it contains a symbol (1 minimum) to be false", function(){
    const password = 'legendofzelda';
    const result = verifyPassword(password);
    expect(result.symbol).toBe(false);
});
//******************************************************//


//************* test for nonInvalid passwords *************//
test("verify the password of Legendof zelda! if it contains a no invalid symbols in password to be false", function(){
    const password = 'Legendof zelda!';
    const result = verifyPassword(password);
    expect(result.noInvalid).toBe(false);
});

test("verify the password of legendofzelda if it contains no invalid symbols in password to be true", function(){
    const password = 'legendofzelda';
    const result = verifyPassword(password);
    expect(result.noInvalid).toBe(true);
});
//******************************************************//


//************* test for valid password *************//
test("verify the password of Legendof zelda! if it contains a no invalid symbols in password to be false", function(){
    const password = 'Legendofzelda03!';
    const result = verifyPassword(password);
    expect(result.pass).toBe(true);
});
//******************************************************//

