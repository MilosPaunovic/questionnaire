import { describe, it } from 'mocha';
import { assert, expect } from 'chai';
import { initialize } from '../src/index.js';

const QUESTIONNAIRE = initialize();

describe('Testing question() method', () => {
	it('Return a random question', () => {
		const result = QUESTIONNAIRE.question();
		assert.isObject(result) && assert.isNotEmpty(result);
	});

	it('Ignore parameter type different than object', () => {
		const result = QUESTIONNAIRE.question('INVALID');
		assert.isObject(result) && assert.isNotEmpty(result);
	});

	it('Ignore empty object parameter', () => {
		const result = QUESTIONNAIRE.question({});
		assert.isObject(result) && assert.isNotEmpty(result);
	});

	it('Ignore object parameter with invalid key/value pair', () => {
		const result = QUESTIONNAIRE.question({ INVALID: 'INVALID' });
		assert.isObject(result) && assert.isNotEmpty(result);
	});

	it('Invalid number of wrong answers', () => {
		assert.throw(() => { QUESTIONNAIRE.question({ wrong: 'INVALID' }); }, Error, 'Parameter wrong must be castable to integer.');
	});

	it('Valid number of wrong answers', () => {
		const result = QUESTIONNAIRE.question({ wrong: 5 });
		assert.isObject(result) && assert.isNotEmpty(result) && expect(result).to.have.key('wrong') && expect(result.wrong).to.have.lengthOf(5);
	});

	it('Smaller number of wrong answers, should default to 1', () => {
		const result = QUESTIONNAIRE.question({ wrong: -1 });
		assert.isObject(result) && assert.isNotEmpty(result) && expect(result).to.have.key('wrong') && expect(result.wrong).to.have.lengthOf(1);
	});

	it('Larger number of wrong answers, should default to 30', () => {
		const result = QUESTIONNAIRE.question({ wrong: 31 });
		assert.isObject(result) && assert.isNotEmpty(result) && expect(result).to.have.key('wrong') && expect(result.wrong).to.have.lengthOf(30);
	});
});
