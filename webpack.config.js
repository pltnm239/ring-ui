const path = require('path');

(function checkWebpack() {
  const webpackVersion = require('webpack').version;
  const isObsoleteWebpack = webpackVersion.startsWith('4');
  if (isObsoleteWebpack) {
    // eslint-disable-next-line no-console
    console.log(`[WARN]: RingUI is used with Webpack@"${webpackVersion}". Ring UI requires Webpack@>=5`);
  }
}());

function loadersObjectToArray(loaders) {
  return Object.keys(loaders).map(name => loaders[name]);
}

function createConfig() {
  const componentsPath = [path.join(__dirname, 'components')];

  const cssLoader = {
    test: /\.css$/,
    include: componentsPath,
    use: [
      {
        loader: require.resolve('style-loader'),
        options: {
          esModule: false
        }
      },
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: {
            localIdentName: '[local]_[hash:3]'
          },
          importLoaders: 1
        }
      },
      {
        loader: require.resolve('postcss-loader')
      }
    ]
  };

  const externalCssLoader = {
    test: /\.css$/,
    include: [
      path.dirname(require.resolve('highlight.js/package.json'))
    ],
    use: [
      require.resolve('style-loader'),
      require.resolve('css-loader')
    ]
  };

  const babelLoader = {
    test: /\.js$/,
    sideEffects: false,
    include: componentsPath,
    loader: require.resolve('babel-loader'),
    options: {
      configFile: path.join(__dirname, 'babel.config.js'),
      cacheDirectory: true
    }
  };

  const vfileLoader = {
    test: /node_modules\/vfile\/core\.js/,
    loader: require.resolve('imports-loader'),
    options: {
      type: 'commonjs',
      imports: ['single process/browser process']
    }
  };

  const htmlLoader = {
    test: /-ng(\\|\/)\S*(-ng|-ng__)\S*\.html$/,
    include: componentsPath,
    loader: require.resolve('html-loader')
  };

  const gifLoader = {
    test: /\.gif$/,
    include: componentsPath,
    loader: require.resolve('url-loader')
  };

  const loaders = {
    cssLoader,
    externalCssLoader,
    babelLoader,
    vfileLoader,
    htmlLoader,
    gifLoader
  };

  return {
    // Minimal config for building components
    config: {
      module: {
        rules: loadersObjectToArray(loaders)
      }
    },
    componentsPath,
    loaders
  };
}

const {config, componentsPath, loaders} = createConfig();

module.exports = {
  createConfig,
  config,
  componentsPath,
  loaders: {
    ...loaders,
    get svgInlineLoader() {
      throw new Error('***Ring UI embedded "svgInlineLoader" removed in 4.0. Please install and use own instance if you need it.***');
    },
    get scssLoader() {
      throw new Error('***Ring UI embedded "scssLoader" removed in 4.0. Please install and use own instance if you need it.***');
    },
    get svgLoader() {
      throw new Error('***Ring UI embedded "svgLoader" removed in 4.0. Please install and use own instance if you need it.***');
    }
  }
};
