import client, { adaptError } from '../../../../helpers/client';

/**
 * Method responsible for posting a batch of data to /batch/trackings endpoint on MKT API.
 *
 * @memberof module:Omnitracking/client
 *
 * @param {object} data - Payload to be sent on the body of the post request.
 * @param {object} [config] - Custom configurations to send to the client
 * instance (axios).
 *
 * @example
 * import { postBatchTrackings } from '@farfetch/blackout-core/analytics/Omnitracking/client';
 *
 *  postBatchTrackings([
 *      {
 *          event: 'GenericPageVisited',
 *          correlationId: 'cc0dc41e-f058-40ec-a073-1fe3d56265bb',
 *          tenantId: 16000,
 *          clientId: 16000,
 *          customerId: 'g_123',
 *          parameters: {}
 *      }
 * ]);
 *
 * @returns {Promise} Promise object.
 */
const postBatchTrackings = (data, config) =>
  client
    .post('/marketing/v1/batch/trackings', data, config)
    .then(response => response.data)
    .catch(error => {
      throw adaptError(error);
    });

export default postBatchTrackings;
