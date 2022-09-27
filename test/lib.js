import { assert } from 'chai';
import { initialize } from '../lib/index.js';

const QUESTIONNAIRE = initialize()

describe('Testing basic functionalities of the entire library', () => {

	it('question()  - Should return a QUESTIONNAIRE question', () => {
		const result = QUESTIONNAIRE.question();
		assert.isObject(result) && assert.isNotEmpty(result);
	});

	it('questions() - Should return array of 10 random questions (no parameter passed)', () => {
		const result = QUESTIONNAIRE.questions();
		assert.isArray(result) && assert.lengthOf(result, 10);
	});

	it('questions() - Should return array of 92 random questions (with parameter passed)', () => {
		const result = QUESTIONNAIRE.questions(92);
		assert.isArray(result) && assert.lengthOf(result, 92);
	});

	it('questions() - Should throw an error (invalid parameter passed)', () => {
		assert.throw(() => { QUESTIONNAIRE.questions("invalid"); }, Error, 'Parameter howMany must be convertible to number.');
	});

});
