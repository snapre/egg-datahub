'use strict';

const DataHubSDK = require('datahub-nodejs-sdk');

exports.getClient = (options = {}) => {
  const {
    port,
    hubName,
  } = options;

  const datahubClient = new DataHubSDK({
    port,
  });

  datahubClient.getMockDataByScene = async (_options = {}) => {

    const scene = _options.scene || 'default';

    // update current scene
    await datahubClient.updateSceneByProjectIdAndDataId(hubName, _options.name, {
      currentScene: scene,
    });

    return await datahubClient.getSceneDataByProjectIdAndDataId(hubName, _options.name, scene);
  };

  return datahubClient;
};
