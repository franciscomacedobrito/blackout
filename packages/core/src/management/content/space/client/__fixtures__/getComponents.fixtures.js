import join from 'proper-url-join';
import moxios from 'moxios';

const baseUrl = 'https://api.blackandwhite-ff.com/content/v1/spaces';

export default {
  success: params => {
    moxios.stubRequest(join(baseUrl, params.spaceCode, 'components'), {
      method: 'get',
      response: params.response,
      status: 200,
    });
  },
  failure: params => {
    moxios.stubRequest(join(baseUrl, params.spaceCode, 'components'), {
      method: 'get',
      response: 'stub error',
      status: 404,
    });
  },
};
