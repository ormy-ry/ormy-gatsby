{ context: '/home/pl/Code/gsite',
  entry: { app: '/home/pl/Code/gsite/.cache/production-app' },
  output:
   { filename: '[name]-[contenthash].js',
     chunkFilename: '[name]-[contenthash].js',
     path: '/home/pl/Code/gsite/public',
     publicPath: '/' },
  module:
   { rules:
      [ { test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto' },
        { test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use:
           [ { options: {},
               loader:
                '/home/pl/Code/gsite/node_modules/gatsby/dist/utils/babel-loader.js' } ] },
        { test: /\.ya?ml/,
          use:
           [ { options: {},
               loader: '/home/pl/Code/gsite/node_modules/json-loader/index.js' },
             { options: {},
               loader: '/home/pl/Code/gsite/node_modules/yaml-loader/index.js' } ] },
        { use:
           [ { loader: '/home/pl/Code/gsite/node_modules/url-loader/dist/cjs.js',
               options: { limit: 10000, name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.(eot|otf|ttf|woff(2)?)(\?.*)?$/ },
        { use:
           [ { loader: '/home/pl/Code/gsite/node_modules/url-loader/dist/cjs.js',
               options: { limit: 10000, name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.(ico|svg|jpg|jpeg|png|gif|webp)(\?.*)?$/ },
        { use:
           [ { loader: '/home/pl/Code/gsite/node_modules/url-loader/dist/cjs.js',
               options: { limit: 10000, name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.(mp4|webm|wav|mp3|m4a|aac|oga|flac)$/ },
        { use:
           [ { loader: '/home/pl/Code/gsite/node_modules/file-loader/dist/cjs.js',
               options: { name: 'static/[name]-[hash].[ext]' } } ],
          test: /\.pdf$/ },
        { oneOf:
           [ { test: /\.module\.css$/,
               use:
                [ { options: { hmr: false },
                    loader:
                     '/home/pl/Code/gsite/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader: '/home/pl/Code/gsite/node_modules/css-loader/index.js',
                    options:
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       modules: true,
                       importLoaders: 1 } },
                  { loader:
                     '/home/pl/Code/gsite/node_modules/gatsby-plugin-purgecss/loader.js',
                    options:
                     { content: [ '/home/pl/Code/gsite/src/**/!(*.d).{ts,js,jsx,tsx}' ],
                       rejected: true,
                       printRejected: false,
                       printAll: false,
                       debug: true,
                       develop: false,
                       tailwind: true,
                       ignore: [],
                       purgeOnly: [ 'src/styles/index.css' ],
                       extractors:
                        [ { extractor: [Function: extractor],
                            extensions: [ 'js', 'ts', 'jsx', 'tsx' ] } ],
                       whitelist: [ 'html', 'body' ] } },
                  { loader:
                     '/home/pl/Code/gsite/node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js',
                    options: { sourceMap: false } } ] },
             { test: /\.css$/,
               use:
                [ { options: {},
                    loader:
                     '/home/pl/Code/gsite/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader: '/home/pl/Code/gsite/node_modules/css-loader/index.js',
                    options:
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       importLoaders: 1 } },
                  { loader:
                     '/home/pl/Code/gsite/node_modules/gatsby-plugin-purgecss/loader.js',
                    options:
                     { content: [ '/home/pl/Code/gsite/src/**/!(*.d).{ts,js,jsx,tsx}' ],
                       rejected: true,
                       printRejected: false,
                       printAll: false,
                       debug: true,
                       develop: false,
                       tailwind: true,
                       ignore: [],
                       purgeOnly: [ 'src/styles/index.css' ],
                       extractors:
                        [ { extractor: [Function: extractor],
                            extensions: [ 'js', 'ts', 'jsx', 'tsx' ] } ],
                       whitelist: [ 'html', 'body' ] } },
                  { loader:
                     '/home/pl/Code/gsite/node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js',
                    options: { sourceMap: false } } ] },
             { use:
                [ { options: { hmr: false },
                    loader:
                     '/home/pl/Code/gsite/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader: '/home/pl/Code/gsite/node_modules/css-loader/index.js',
                    options:
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       modules: true,
                       importLoaders: 1 } },
                  { loader:
                     '/home/pl/Code/gsite/node_modules/gatsby-plugin-purgecss/loader.js',
                    options:
                     { content: [ '/home/pl/Code/gsite/src/**/!(*.d).{ts,js,jsx,tsx}' ],
                       rejected: true,
                       printRejected: false,
                       printAll: false,
                       debug: true,
                       develop: false,
                       tailwind: true,
                       ignore: [],
                       purgeOnly: [ 'src/styles/index.css' ],
                       extractors:
                        [ { extractor: [Function: extractor],
                            extensions: [ 'js', 'ts', 'jsx', 'tsx' ] } ],
                       whitelist: [ 'html', 'body' ] } },
                  { loader:
                     '/home/pl/Code/gsite/node_modules/postcss-loader/lib/index.js',
                    options:
                     { ident: 'postcss-1',
                       sourceMap: false,
                       plugins: [Function: plugins] } } ],
               test: /\.module\.css$/ },
             { use:
                [ { options: { hmr: true },
                    loader:
                     '/home/pl/Code/gsite/node_modules/mini-css-extract-plugin/dist/loader.js' },
                  { loader: '/home/pl/Code/gsite/node_modules/css-loader/index.js',
                    options:
                     { sourceMap: false,
                       camelCase: 'dashesOnly',
                       localIdentName: '[name]--[local]--[hash:base64:5]',
                       importLoaders: 1 } },
                  { loader:
                     '/home/pl/Code/gsite/node_modules/gatsby-plugin-purgecss/loader.js',
                    options:
                     { content: [ '/home/pl/Code/gsite/src/**/!(*.d).{ts,js,jsx,tsx}' ],
                       rejected: true,
                       printRejected: false,
                       printAll: false,
                       debug: true,
                       develop: false,
                       tailwind: true,
                       ignore: [],
                       purgeOnly: [ 'src/styles/index.css' ],
                       extractors:
                        [ { extractor: [Function: extractor],
                            extensions: [ 'js', 'ts', 'jsx', 'tsx' ] } ],
                       whitelist: [ 'html', 'body' ] } },
                  { loader:
                     '/home/pl/Code/gsite/node_modules/postcss-loader/lib/index.js',
                    options:
                     { ident: 'postcss-2',
                       sourceMap: false,
                       plugins: [Function: plugins] } } ],
               test: /\.css$/ } ] } ] },
  plugins:
   [ IgnorePlugin {
       options: { resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ },
       checkIgnore: [Function: bound checkIgnore] },
     DefinePlugin {
       definitions:
        { 'process.env': '{}',
          'process.env.NODE_ENV': '"production"',
          'process.env.PUBLIC_DIR': '"/home/pl/Code/gsite/public"',
          'process.env.BUILD_STAGE': '"build-javascript"',
          'process.env.CYPRESS_SUPPORT': undefined,
          'process.env.GATSBY_BUILD_STAGE': '"build-javascript"',
          __PATH_PREFIX__: '""' } },
     MiniCssExtractPlugin {
       options:
        { filename: '[name].[contenthash].css',
          chunkFilename: '[name].[contenthash].css' } },
     GatsbyWebpackStatsExtractor { plugin: { name: 'GatsbyWebpackStatsExtractor' }, options: {} } ],
  target: 'web',
  devtool: 'source-map',
  performance: { hints: false },
  mode: 'production',
  resolveLoader:
   { modules:
      [ '/home/pl/Code/gsite/node_modules',
        '/home/pl/Code/gsite/node_modules/gatsby/dist/loaders',
        'node_modules' ] },
  resolve:
   { extensions: [ '.mjs', '.js', '.jsx', '.wasm', '.json' ],
     alias:
      { 'gatsby$': '/home/pl/Code/gsite/.cache/gatsby-browser-entry.js',
        '@babel/runtime': '/home/pl/Code/gsite/node_modules/@babel/runtime',
        'core-js': '/home/pl/Code/gsite/node_modules/core-js',
        'react-hot-loader': '/home/pl/Code/gsite/node_modules/react-hot-loader',
        'react-lifecycles-compat': '/home/pl/Code/gsite/.cache/react-lifecycles-compat.js',
        'create-react-context': '/home/pl/Code/gsite/.cache/create-react-context.js' } },
  node: { __filename: true },
  optimization:
   { runtimeChunk: { name: 'webpack-runtime' },
     splitChunks: { name: false },
     minimizer:
      [ TerserPlugin {
          options:
           { test: /\.m?js(\?.*)?$/i,
             chunkFilter: [Function: chunkFilter],
             warningsFilter: [Function: warningsFilter],
             extractComments: false,
             sourceMap: true,
             cache: true,
             cacheKeys: [Function: cacheKeys],
             parallel: true,
             include: undefined,
             exclude: /\.min\.js/,
             minify: undefined,
             terserOptions:
              { output: { ecma: 5 },
                ie8: false,
                mangle: { safari10: true },
                parse: { ecma: 8 },
                compress: { ecma: 5 } } } },
        OptimizeCssAssetsWebpackPlugin {
          pluginDescriptor: { name: 'OptimizeCssAssetsWebpackPlugin' },
          options:
           { assetProcessors:
              [ { phase: 'compilation.optimize-chunk-assets',
                  regExp: /\.css$/g,
                  processor: [Function: processor] } ],
             canPrint: undefined,
             assetNameRegExp: /\.css$/g,
             cssProcessor: { [Function: creator] process: [Function] },
             cssProcessorOptions: {},
             cssProcessorPluginOptions: {} },
          phaseAssetProcessors:
           { 'compilation.optimize-chunk-assets':
              [ { phase: 'compilation.optimize-chunk-assets',
                  regExp: /\.css$/g,
                  processor: [Function: processor] } ],
             'compilation.optimize-assets': [],
             emit: [] },
          deleteAssetsMap: {} } ] } }