module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    'babel-plugin-styled-components',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: true,
        allowUndefined: false,
      },
    ],
  ],
};
