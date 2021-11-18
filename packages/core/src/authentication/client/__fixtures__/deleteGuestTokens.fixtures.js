import join from 'proper-url-join';
import moxios from 'moxios';

const baseUrl =
  'https://api.blackandwhite-ff.com/authentication/v1/guestTokens';

export default {
  success: params => {
    moxios.stubRequest(join(baseUrl, params.id), {
      method: 'delete',
      status: 204,
    });
  },
  failure: params => {
    moxios.stubRequest(join(baseUrl, params.id), {
      method: 'delete',
      response: 'stub error',
      status: 404,
    });
  },
};
