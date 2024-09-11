// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
// };

const alias = {'^@/(.+)': './src/\\1'};
const extensions = ['.android.js', '.ios.js', '.js', '.json', '.native', 'jsx'];
const root = ['./'];
module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:@react-native/babel-preset',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {root, alias, extensions},
      '@babel/plugin-transform-runtime',
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
      },
    ],
  ],
};
