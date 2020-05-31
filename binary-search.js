// precondition -> (array sorted ASC)

const binarySearch = (array, value) => {
	let found = false; // def

	// I. SCOPE
	let left = 0; // left index
	let right = array.length - 1; // right index

	// II. SCAN
	while (left <= right) {
		// 1. update mid index
		let mid = Math.floor((left + right) / 2);

		// 2. update scope
		if (value >= array[mid]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}

		// 3. left === right --> while loop end
		if (value === array[mid]) found = true;
	}

	return found; // 4. true/false
};

// TEST
// module.exports = { binarySearch }; // uncomment to test
