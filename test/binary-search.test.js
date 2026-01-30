let { binarySearch } = require("../binary-search.js");

describe("binarySearch()", () => {
	it("must return a 'number'", () => {
		expect(binarySearch([2, 3, 4, 5, 6], 4)).toEqual(expect.any(Number));
	});

	it("returns the index of the Arg 'value' if the provided array contains that Arg", () => {
		expect(binarySearch([2, 3, 4, 5, 6], 2)).toBe(0);
		expect(binarySearch([2, 3, 4, 5, 6], 3)).toBe(1);
		expect(binarySearch([2, 3, 4, 5, 6], 4)).toBe(2);
		expect(binarySearch([2, 3, 4, 5, 6], 5)).toBe(3);
		expect(binarySearch([2, 3, 4, 5, 6], 6)).toBe(4);
	});

	it("returns '-1' as a wring index of the Arg 'value' if the provided array does not contains that Arg", () => {
		expect(binarySearch([2, 3, 4, 5, 6], 7)).toBe(-1);
	});

	it("may accept 'float' as Arg 'value' and return its index if found", () => {
		expect(binarySearch([2.1, 2.2, 2.3, 2.4], 2.2)).toBe(1);
	});

	it("may accept 'float' as Arg 'value' and return '-1' its index if not found", () => {
		expect(binarySearch([2.1, 2.2, 2.3, 2.4], 2.5)).toBe(-1);
	});

	it("it returns '-1' if array isn't sorted", () => {
		expect(binarySearch([1, 5, 8, 2], 2)).toBe(-1);
	});
});
