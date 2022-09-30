/**
 * Returns random number in range between 1 and supplied maximum.
 *
 * @param {number} maximum Upper limit of generated random number.
 * @return {number} Random number between 1 and suplied maximum.
 */
export const randomNumber = (maximum) => {
	if (!maximum) throw new Error('Parameter maximum is missing.');
	if (!parseInt(maximum, 10)) throw new Error('Parameter maximum must be castable to integer.');

	return Math.floor(Math.random() * parseInt(maximum, 10)) + 1;
};

/**
 * Returns an array of random numbers in range between 1 and supplied maximum.
 *
 * @param {number} items Number of array items to be returned.
 * @param {number} maximum Upper limit of generated random number.
 * @return {number} Array of random numbers between 1 and suplied maximum.
 */
export const randomNumbers = (items, maximum) => {
	if (!items) throw new Error('Parameter items is missing.');
	if (!parseInt(items, 10)) throw new Error('Parameter items must be castable to integer.');

	if (!maximum) throw new Error('Parameter maximum is missing.');
	if (!parseInt(maximum, 10)) throw new Error('Parameter maximum must be castable to integer.');

	const result = new Set();

	while (result.size < items) {
		result.add(randomNumber(maximum));
	}

	return Array.from(result);
};

/**
 * Checks if the parameter can be casted to integer and, if so, limits the
 * value to supplied minimum and maximum.
 *
 * @param {any} value Parameter value itself.
 * @param {string} name Name of the parameter for error message.
 * @param {number} minimum Lower limit of value.
 * @param {number} maximum Upper limit of value.
 * @return {number} Properly casted and limited value.
 */
export const parameterLimitter = (value, name, minimum, maximum) => {
	if (!parseInt(value, 10)) throw new Error(`Parameter ${name} must be castable to integer.`);

	if (parseInt(value, 10) < minimum) value = minimum;
	if (parseInt(value, 10) > maximum) value = maximum;

	return value;
};
