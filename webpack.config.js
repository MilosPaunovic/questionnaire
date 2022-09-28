import * as path from 'path';

export default {
	output: {
		path: path.resolve('dist'),
		library: {
			name: 'questionnaire',
			type: 'umd',
		},
		filename: 'questionnaire.js',
	},
};
