// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// Part 2

// isPhoneNumber true
test('test phone number 123-456-7891', () => {
    expect(functions.isPhoneNumber("123-456-7891")).toBe(true);
});

// isPhoneNumber true
test('test phone number 456-5677898', () => {
    expect(functions.isPhoneNumber("456-5677898")).toBe(true);
});

// isPhoneNumber false
test('test phone number 8583496271', () => {
    expect(functions.isPhoneNumber("8583496271")).toBe(false);
});

// isPhoneNumber false
test('test phone number jianming-geng', () => {
    expect(functions.isPhoneNumber("jianming-geng")).toBe(false);
});

// isEmail true
test('test isEmail jgeng@ucsd.edu', () => {
    expect(functions.isEmail("jgeng@ucsd.edu")).toBe(true);
});

// isEmail true
test('test isEmail jgeng99@ucb.cn', () => {
    expect(functions.isEmail("jgeng99@ucb.cn")).toBe(true);
});

// isEmail false
test('test isEmail email@china.hhhh', () => {
    expect(functions.isEmail("email@china.hhhh")).toBe(false);
});

// isEmail false
test('test isEmail email123@@ucsd.edu', () => {
    expect(functions.isEmail("email123@@ucsd.edu")).toBe(false);
});

// isStrongPassword true
test('test isStrongPassword sTrongPaS3', () => {
    expect(functions.isStrongPassword("sTrongPaS3")).toBe(true);
});

// isStrongPassword true
test('test isStrongPassword abcdEfh111222', () => {
    expect(functions.isStrongPassword("abcdEfh111222")).toBe(true);
});

// isStrongPassword false
test('test isStrongPassword AB', () => {
    expect(functions.isStrongPassword("ab")).toBe(false);
});

// isStrongPassword false
test('test isStrongPassword ASD@#$', () => {
    expect(functions.isStrongPassword("ASD@#$")).toBe(false);
});

// isDate true
test('test isDate 1/1/2000', () => {
    expect(functions.isDate("1/1/2000")).toBe(true);
});

// isDate true
test('test isDate 02/09/2001', () => {
    expect(functions.isDate("02/09/2001")).toBe(true);
});

// isDate false
test('test isDate 01/01/99', () => {
    expect(functions.isDate("01/01/99")).toBe(false);
});

// isDate false
test('test isDate 02/03/200Q', () => {
    expect(functions.isDate("02/03/200Q")).toBe(false);
});

// isHexColor true
test('test isHexColor 123', () => {
    expect(functions.isHexColor("123")).toBe(true);
});

// isHexColor true
test('test isHexColor ABC12f', () => {
    expect(functions.isHexColor("ABC12f")).toBe(true);
});

// isHexColor false
test('test isHexColor abdee', () => {
    expect(functions.isHexColor("abdee")).toBe(false);
});

// isHexColor false
test('test isHexColor Abg', () => {
    expect(functions.isHexColor("Abg")).toBe(false);
});