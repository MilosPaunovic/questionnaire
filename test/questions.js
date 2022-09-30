import { describe, it } from 'mocha';
import { assert, expect } from 'chai';
import { initialize } from '../src/index.js';

const QUESTIONNAIRE = initialize();

describe('Testing questions() method', () => {
	it('Return an array of 10 random questions', () => {
		const result = QUESTIONNAIRE.questions();
		assert.isArray(result) && assert.lengthOf(result, 10);
	});

	it('Ignore parameter type different than object', () => {
		const result = QUESTIONNAIRE.questions('INVALID');
		assert.isArray(result) && assert.lengthOf(result, 10);
	});

	it('Ignore empty object parameter', () => {
		const result = QUESTIONNAIRE.questions({});
		assert.isArray(result) && assert.lengthOf(result, 10);
	});

	it('Ignore object parameter with invalid key/value pair', () => {
		const result = QUESTIONNAIRE.questions({ INVALID: 'INVALID' });
		assert.isArray(result) && assert.lengthOf(result, 10);
	});

	it('Valid number of items', () => {
		const result = QUESTIONNAIRE.questions({ howMany: 92 });
		assert.isArray(result) && assert.lengthOf(result, 92);
	});

	it('Cast parameter to number if string passed', () => {
		const result = QUESTIONNAIRE.questions({ howMany: '57' });
		assert.isArray(result) && assert.lengthOf(result, 57);
	});

	it('Smaller number of items, should default to 1', () => {
		const result = QUESTIONNAIRE.questions({ howMany: -1 });
		assert.isArray(result) && assert.lengthOf(result, 1);
	});

	it('Larger number of items, should default to 10000', () => {
		const result = QUESTIONNAIRE.questions({ howMany: 10001 });
		assert.isArray(result) && assert.lengthOf(result, 10000);
	});

	it('Invalid number of items', () => {
		assert.throw(() => { QUESTIONNAIRE.questions({ howMany: 'INVALID' }); }, Error, 'Parameter howMany must be castable to integer.');
	});

	it('Invalid number of wrong answers', () => {
		assert.throw(() => { QUESTIONNAIRE.questions({ wrong: 'INVALID' }); }, Error, 'Parameter wrong must be castable to integer.');
	});

	it('Valid number of wrong answers', () => {
		const result = QUESTIONNAIRE.questions({ wrong: 5 });
		assert.isArray(result) && assert.lengthOf(result, 10) && expect(result).to.have.key('wrong') && expect(result.wrong).to.have.lengthOf(5);
	});

	it('Smaller number of wrong answers, should default to 1', () => {
		const result = QUESTIONNAIRE.questions({ wrong: -1 });
		assert.isArray(result) && assert.lengthOf(result, 10) && expect(result).to.have.key('wrong') && expect(result.wrong).to.have.lengthOf(1);
	});

	it('Larger number of wrong answers, should default to 30', () => {
		const result = QUESTIONNAIRE.questions({ wrong: 31 });
		assert.isArray(result) && assert.lengthOf(result, 10) && expect(result).to.have.key('wrong') && expect(result.wrong).to.have.lengthOf(30);
	});
});
