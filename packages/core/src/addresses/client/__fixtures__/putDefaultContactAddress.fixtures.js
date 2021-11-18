import join from 'proper-url-join';
import moxios from 'moxios';

export default {
  success: params => {
    moxios.stubRequest(
      join(
        '/api/account/v1/users',
        params.userId,
        'addresses/preferred',
        params.id,
      ),
      {
        method: 'put',
        status: 204,
      },
    );
  },
  failure: params => {
    moxios.stubRequest(
      join(
        '/api/account/v1/users',
        params.userId,
        'addresses/preferred',
        params.id,
      ),
      {
        method: 'put',
        response: {
          errors: [
            {
              code: 0,
              message: 'error',
              developerMessage: 'This is developer message',
              moreInformation: 'Error more information',
              exception: {},
            },
          ],
        },
        status: 400,
      },
    );
  },
};
