import { assert } from 'chai';
import { initialize } from '../lib/index.js';

const QUESTIONNAIRE = initialize()

describe('Testing question() method', () => {

	it('Should return a random question', () => {
		const result = QUESTIONNAIRE.question();
		assert.isObject(result) && assert.isNotEmpty(result);
	});

	it('Should ignore passed parameter and return a random question', () => {
		const result = QUESTIONNAIRE.question(1);
		assert.isObject(result) && assert.isNotEmpty(result);
	});

});
