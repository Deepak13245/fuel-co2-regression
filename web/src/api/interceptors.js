import Loader from 'services/loader';

let counter = 0;

export const loaderInterceptor = (axios) => {
  axios.interceptors.request.use(config => {
    if (counter === 0) {
      Loader.show();
    }
    counter++;
    return config;
  }, error => Promise.reject(error));

  axios.interceptors.response.use(res => {
    counter--;
    if (counter === 0) {
      Loader.hide();
    }
    return Promise.resolve(res);
  }, err => {
    counter--;
    if (counter === 0) {
      Loader.hide();
    }
    return Promise.reject(err);
  });
};
