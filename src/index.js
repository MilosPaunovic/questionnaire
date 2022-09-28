/*
 * @paunovic/questionnaire@1.0.4
 * (c) Milos Paunovic
 * Released under the MIT License.
 */

import { LANGUAGES } from './helpers/languages.js';
import { randomNumber } from './helpers/general.js';

/**
	* Initialize the package by selecting language and variation to use.
	*
	* @param {object} details Initial details for initialization, contains 2
	* digit ISO country code and variation to language, e.g. "cyrillic"
	* @return {object} Available functions to be consumed
	*
	*/

export const initialize = ({ countryCode = 'rs', variation = 'default' } = {}) => {
	if (!LANGUAGES[countryCode]) throw new Error('Parameter countryCode is invalid.');
	else if (!LANGUAGES[countryCode][variation]) throw new Error('Parameter variation is invalid.');

	const QUESTIONS = LANGUAGES[countryCode][variation];

	/**
		* Function which returns random question object from the list.
		*
		* @return {object} Random question object from the list
		*
		*/

	const question = () => QUESTIONS[randomNumber(QUESTIONS.length - 1)];

	/**
		* Function which returns an array of random questions from the list.
		*
		* @param {number} [howMany=10] - Number of questions to be generated
		* @return {object[]} Array of question objects from the list
		*
		*/

	const questions = (howMany = 10) => {
		if (!parseInt(howMany, 10)) throw new Error('Parameter howMany must be convertible to number.');

		const NUMBER = parseInt(howMany, 10);

		// Limiting result set to at least one
		if (NUMBER < 1) howMany = 1;

		// Limiting result set to 10000 at a time for performance reasons
		if (NUMBER > 10000) howMany = 10000;

		const result = [];

		for (let i = 0; i < howMany; i += 1) {
			result.push(question());
		}

		return result;
	};

	return { question, questions };
};
