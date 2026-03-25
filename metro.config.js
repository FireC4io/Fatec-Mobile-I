// metro.config.js
// Configuração básica para assets em React Native

const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    resolver: {
      assetExts: [...assetExts, 'jpg', 'png'],
      sourceExts
    }
  };
})();
