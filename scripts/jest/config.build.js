import sourceConfig from './config.source.js';

const moduleNameMapper = {
  'ho-react-components': '<rootDir>/dist/ho-react-components.js'
};

// noinspection JSUnusedGlobalSymbols
export default Object.assign({}, sourceConfig, {
  moduleNameMapper: moduleNameMapper
});

console.log('Running tests with ho-react-components module at /components')
