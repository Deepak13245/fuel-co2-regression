const {
  useBabelRc, override, useEslintRc, addPostcssPlugins
} = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const path = require('path');

function useHotReload() {
  return (config) => {
    if (config.mode === 'development') {
      config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
    }
    config = rewireReactHotLoader(config, config.mode);
    return config;
  };
}

module.exports = override(
  useBabelRc(),
  useEslintRc(path.resolve(__dirname, '.eslintrc')),
  useHotReload(),
  addPostcssPlugins([
    require('postcss-custom-media')(),
    require('postcss-simple-vars')(),
    require('postcss-nested'),
  ])
);
