/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
*/


// const blacklist = require('metro-config/src/defaults/blacklist');
const exclusionList = require('metro-config/src/defaults/exclusionList');
module.exports = {
  // exclusionList is a function that takes an array of regexes and combines
  // them with the default exclusions to return a single regex.
  resolver: {
    blacklistRE: exclusionList([/#current-cloud-backend\/.*/])
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

