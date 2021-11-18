import {
  name as PCKG_NAME,
  version as PCKG_VERSION,
} from '../../../../../package.json';
import { warnDeprecatedMethod } from '../../../../helpers';
import client, {
  adaptError,
  configApiBlackAndWhite,
} from '../../../../helpers/client';
import join from 'proper-url-join';

/**
 * Delete a Content Version.
 *
 * @function deleteSpaceContentVersion
 * @memberof module:content/space/client
 *
 * @param {string} spaceCode - The content type space identifier.
 * @param {string} contentId - The content identifier.
 * @param {string} versionId - The content version identifier.
 * @param {object} [config] - Custom configurations to send to the client
 * instance (axios).
 *
 * @returns {Promise} Promise that will resolve when the call to the endpoint finishes.
 */
export default (
  spaceCode,
  contentId,
  versionId,
  config = configApiBlackAndWhite,
) => {
  warnDeprecatedMethod(
    `${PCKG_NAME}@${PCKG_VERSION}`,
    'deleteContentVersion',
    'Please refer to the respective support Slack channel for the private repository with this client.',
  );

  return client
    .delete(
      join(
        '/content/v1/spaces',
        spaceCode,
        'contents',
        contentId,
        'versions',
        versionId,
      ),
      config,
    )
    .then(response => response.data)
    .catch(error => {
      throw adaptError(error);
    });
};
