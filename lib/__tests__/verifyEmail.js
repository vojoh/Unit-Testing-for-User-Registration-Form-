const verifyEmail = require("../verifyEmail");

test("verify email 12345@gmail.com to get true", function(){
    var email = '12345@gmail.com';
    expect(verifyEmail(email)).toBe(true);
});

test("verify email @gmail.com to be false", function(){
    var email = '@gmail.com';
    expect(verifyEmail(email)).toBe(false);
});

test("verify email 12345@.com to be false", function(){
    var email = '12345@.com';
    expect(verifyEmail(email)).toBe(false);
});

test("verify email @ to be false", function(){
    var email = '@';
    expect(verifyEmail(email)).toBe(false);
});

test("verify email 12345@.com to be false", function(){
    var email = '12345@.com';
    expect(verifyEmail(email)).toBe(false);
});

test("verify email 12345gmail.com to be false", function(){
    var email = '12345gmail.com';
    expect(verifyEmail(email)).toBe(false);
});

test("verify email @12345gmail.com to be false", function(){
    var email = '@12345gmail.com';
    expect(verifyEmail(email)).toBe(false);
});