/*
 * @paunovic/questionnaire@2.0.0
 * (c) Milos Paunovic
 * Released under the MIT License.
 */

import { LANGUAGES } from './helpers/languages.js';
import { randomNumber, randomNumbers, parameterLimitter } from './helpers/general.js';

/**
 * Initialize the package by selecting language and variation to use.
 *
 * @param {object} details Details for library initialization.
 * @param {string} [details.countryCode=rs] 2 letter ISO country code.
 * @param {string} [details.variation=default] Variation of the language.
 * @return {object} Available functions to be consumed.
 */
export const initialize = ({ countryCode = 'rs', variation = 'default' } = {}) => {
	if (!LANGUAGES[countryCode]) throw new Error('Parameter countryCode is not valid.');
	else if (!LANGUAGES[countryCode][variation]) throw new Error('Parameter variation is not valid.');

	const QUESTIONS = LANGUAGES[countryCode][variation];
	const AVAILABLE = QUESTIONS.length - 1;

	/**
	 * Returns random question object from the list.
	 *
	 * @param {object} [options] Guidelines for question generation.
	 * @param {number} [options.wrong] Number of wrong answers to be included.
	 * @return {object} Random question object from the list.
	 */
	const question = ({ wrong } = {}) => {
		if (!wrong) return QUESTIONS[randomNumber(AVAILABLE)];

		const _wrong = parameterLimitter(wrong, 'wrong', 1, 30);
		const _indexes = randomNumbers(_wrong, AVAILABLE);

		const _answers = [];

		for (let i = 0; i < _wrong; i += 1) {
			const _answer = QUESTIONS[_indexes?.[i]]?.answer;
			_answers.push(_answer || QUESTIONS[randomNumber(AVAILABLE)].answer);
		}

		return { ...QUESTIONS[randomNumber(AVAILABLE)], wrong: _answers };
	};

	/**
	 * Returns an array of random questions from the list.
	 *
	 * @param {object} [options] Guidelines for question generation.
	 * @param {number} [options.howMany=10] Number of question items to be generated.
	 * @param {number} [options.wrong] Number of wrong answers to be included.
	 * @return {array} Array of random question objects from the list.
	 */
	const questions = ({ howMany = 10, wrong } = {}) => {
		const _howMany = parameterLimitter(howMany, 'howMany', 1, 10000);
		const _wrong = wrong ? parameterLimitter(wrong, 'wrong', 1, 30) : undefined;

		const _result = [];

		for (let i = 0; i < _howMany; i += 1) {
			_result.push(question({ wrong: _wrong }));
		}

		return _result;
	};

	return { question, questions };
};
