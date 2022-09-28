import { expect, assert } from 'chai';
import { initialize } from '../src/index.js';

describe('Testing basic functionalities of the entire library', () => {

	it('Should successfully initialize with default parameters', () => {
		const QUESTIONNAIRE = initialize()
		expect(Object.keys(QUESTIONNAIRE)).not.to.be.empty;
	});

	it('Should successfully initialize with parameters passed', () => {
		const QUESTIONNAIRE = initialize({ countryCode: 'rs', variation: 'cyrillic' })
		expect(Object.keys(QUESTIONNAIRE)).not.to.be.empty;
	});

	it('Should throw an error (invalid countryCode parameter passed)', () => {
		assert.throw(() => { initialize({ countryCode: 'INVALID' }); }, Error, 'Parameter countryCode is invalid.');
	});

	it('Should throw an error (invalid variation parameter passed, without countryCode)', () => {
		assert.throw(() => { initialize({ variation: 'INVALID' }); }, Error, 'Parameter variation is invalid.');
	});

	it('Should throw an error (invalid variation parameter passed, with countryCode)', () => {
		assert.throw(() => { initialize({ countryCode: 'rs', variation: 'INVALID' }); }, Error, 'Parameter variation is invalid.');
	});

});
