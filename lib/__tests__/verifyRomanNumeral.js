const verifyRomanNumeral = require("../verifyRomanNumeral");


//********* Test for Invalid Range for Inputs ************//
test("verify number 4000 to be false ", function(){
    var num = 9000;
    expect(verifyRomanNumeral(num)).toBe(false);
});

test("verify number -1 to be false ", function(){
    var num = -9000;
    expect(verifyRomanNumeral(num)).toBe(false);
});

test("verify non-number X to return false ", function(){
    var num = 'x';
    expect(verifyRomanNumeral(num)).toBe(false);
});

test("verify non-number ' ' to return false ", function(){
    var num = ' ';
    expect(verifyRomanNumeral(num)).toBe(false);
});

test("verify non-number $ to return false ", function(){
    var num = ' ';
    expect(verifyRomanNumeral(num)).toBe(false);
});
//*********************************************//


//***************** Test for M to be printed ********************//
test("verify number 1000 to be M ", function(){
    var num = 1000;
    expect(verifyRomanNumeral(num)).toBe('M');
});

test("verify number 2000 to be MM ", function(){
    var num = 2000;
    expect(verifyRomanNumeral(num)).toBe('MM');
});
//***************************************************************//


//***************** Test for C to be printed ********************//
test("verify number 100 to be C ", function(){
    var num = 100;
    expect(verifyRomanNumeral(num)).toBe('C');
});

test("verify number 200 to be C ", function(){
    var num = 200;
    expect(verifyRomanNumeral(num)).toBe('CC');
});
//***************************************************************//


//***************** Test for L to be printed ********************//
test("verify number 50 to be L ", function(){
    var num = 50;
    expect(verifyRomanNumeral(num)).toBe('L');
});

test("verify number 150 to be CL ", function(){
    var num = 150;
    expect(verifyRomanNumeral(num)).toBe('CL');
});
//***************************************************************//


//***************** Test for X to be printed ********************//
test("verify number 10 to be X ", function(){
    var num = 10;
    expect(verifyRomanNumeral(num)).toBe('X');
});

test("verify number 40 to be XXXX ", function(){
    var num = 40;
    expect(verifyRomanNumeral(num)).toBe('XXXX');
});
//***************************************************************//


//***************** Test for V to be printed ********************//
test("verify number 5 to be v ", function(){
    var num = 5;
    expect(verifyRomanNumeral(num)).toBe('V');
});

test("verify number 15 to be XXXX ", function(){
    var num = 15;
    expect(verifyRomanNumeral(num)).toBe('XV');
});
//***************************************************************//


//***************** Test for I to be printed ********************//
test("verify number 1 to be I ", function(){
    var num = 1;
    expect(verifyRomanNumeral(num)).toBe('I');
});

test("verify number 4 to be IIII ", function(){
    var num = 4;
    expect(verifyRomanNumeral(num)).toBe('IIII');
});
//***************************************************************//

//***************** Normal Tests ********************//
test("verify number 9 to be VIIII ", function(){
    var num = 9;
    expect(verifyRomanNumeral(num)).toBe('VIIII');
});

test("verify number 35 to be XXXV ", function(){
    var num = 35;
    expect(verifyRomanNumeral(num)).toBe('XXXV');
});

test("verify number 1334 to be MCCCXXXIIII ", function(){
    var num = 1334;
    expect(verifyRomanNumeral(num)).toBe('MCCCXXXIIII');
});
//***************************************************************//