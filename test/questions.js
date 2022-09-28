import { assert } from 'chai';
import { initialize } from '../lib/index.js';

const QUESTIONNAIRE = initialize()

describe('Testing questions() method', () => {

	it('Should return array of 10 random questions (no parameter passed)', () => {
		const result = QUESTIONNAIRE.questions();
		assert.isArray(result) && assert.lengthOf(result, 10);
	});

	it('Should return array of 92 random questions (parameter passed)', () => {
		const result = QUESTIONNAIRE.questions(92);
		assert.isArray(result) && assert.lengthOf(result, 92);
	});

	it('Should properly cast parameter to numebr if string passed', () => {
		const result = QUESTIONNAIRE.questions('57');
		assert.isArray(result) && assert.lengthOf(result, 57);
	});

	it('Should default to 1 if smaller parameter passed', () => {
		const result = QUESTIONNAIRE.questions(-1);
		assert.isArray(result) && assert.lengthOf(result, 1);
	});

	it('Should default to 10000 if larger parameter passed', () => {
		const result = QUESTIONNAIRE.questions(10001);
		assert.isArray(result) && assert.lengthOf(result, 10000);
	});

	it('Should throw an error (invalid parameter passed)', () => {
		assert.throw(() => { QUESTIONNAIRE.questions('INVALID'); }, Error, 'Parameter howMany must be convertible to number.');
	});

});
