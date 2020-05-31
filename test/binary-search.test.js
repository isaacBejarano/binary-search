let { binarySearch } = require("../binary-search.js");

describe("binarySearch()", () => {
	it("must return a 'boolean'", () => {
		expect(binarySearch([2, 4, 1, 3], 4)).toEqual(expect.any(Boolean));
	});

	it("returns 'true' if value is found", () => {
		expect(binarySearch([2, 4, 1, 3], 4)).toBe(true);
	});

	it("returns 'false' if value isn't found", () => {
		expect(binarySearch([2, 4, 1, 3], 5)).toBe(false);
	});

	it("may accept 'float' and return 'true'", () => {
		expect(binarySearch([2.1, 2.2, 2.3, 2.4], 2.2)).toBe(true);
	});

	it("may accept 'float' and return 'false'", () => {
		expect(binarySearch([2.1, 2.2, 2.3, 2.4], 2.5)).toBe(false);
	});

	it("it returns 'false' if array isn't sorted", () => {
		expect(binarySearch([1, 5, 8, 2], 2)).toBe(false);
	});
});
