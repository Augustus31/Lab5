// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('Is 5103459752 a phone number', () => {
  expect(isPhoneNumber("(510)345-9752")).toBe(true);
});

test('Is 4723657854 a phone number', () => {
  expect(isPhoneNumber("(472)365-7854")).toBe(true);
});

test('Is 34 a phone number', () => {
  expect(isPhoneNumber("34")).toBe(false);
});

test('Is 5 a phone number', () => {
  expect(isPhoneNumber("5")).toBe(false);
});

test('Is jobava@gmail.com a valid email', () => {
  expect(isEmail("jobava@gmail.com")).toBe(true);
});

test('Is jalalabad@yahoo.com a valid email', () => {
  expect(isEmail("jalalabad@yahoo.com")).toBe(true);
});

test('Is deusquiser a valid email', () => {
  expect(isEmail("deusquiser")).toBe(false);
});

test('Is hadebrilhar a valid email', () => {
  expect(isEmail("hadebrilhar")).toBe(false);
});

test('Is ordular_iN a strong pw', () => {
  expect(isStrongPassword("ordular_iN")).toBe(true);
});

test('Is PekcokZaman a strong pw', () => {
  expect(isStrongPassword("PekcokZaman")).toBe(true);
});

test('Is one a strong pw', () => {
  expect(isStrongPassword("one")).toBe(false);
});

test('Is two a strong pw', () => {
  expect(isStrongPassword("two")).toBe(false);
});

test('Is 10/04/2025 a date', () => {
  expect(isDate("10/04/2025")).toBe(true);
});

test('Is 04/12/1204 a date', () => {
  expect(isDate("04/12/1204")).toBe(true);
});

test('Is 04/1/12 a date', () => {
  expect(isDate("04/1/12")).toBe(false);
});

test('Is 100/100/100 a date', () => {
  expect(isDate("100/100/100")).toBe(false);
});

test('Is #6eeb34 a color', () => {
  expect(isHexColor("#6eeb34")).toBe(true);
});

test('Is #6a6ade a color', () => {
  expect(isHexColor("#6a6ade")).toBe(true);
});

test('Is 21 a color', () => {
  expect(isHexColor("21")).toBe(false);
});

test('Is #sedeusquiser a color', () => {
  expect(isHexColor("#sedeusquiser")).toBe(false);
});