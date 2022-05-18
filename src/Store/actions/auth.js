import {Api} from '../../Api'

export const login = async (credentials) => {
    return await Api.post('login', credentials).then(({ data: { data, meta } }) => {
    //   setToken(meta.token);
    //   dispatch(setUserData(data));
    //   dispatch(setAuthenticated(true));
    console.log(data);
      return Promise.resolve({ data, meta });
    }).catch(error => {
      return Promise.reject(error);
    });
  };

  export const setlogin = (credentials) => {
    return {
      type: 'SET_LOGIN',
      payload: credentials
    };
  }

  export const setlogout = () => {
    return {
      type: 'SET_LOGOUT'
    };
  }