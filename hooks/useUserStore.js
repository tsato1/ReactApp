import create from 'zustand';
import axios from 'axios';
import {BASE_URL} from '../services/Services';

const useUserStore = create(set => ({
  isLoading: false,
  isLoggedIn: false,
  accessToken: {},
  memberInfo: {},
  login: async (username, password) => {
    set({isLoading: true});
    await axios
      .post(
        `${BASE_URL}/asdf`,
        {
          username: username,
          password: password,
          siteId: 9,
          appId: 'com.asdf',
          clientId: 'asdf',
          clientSecret: 'asdf',
          deviceSignatureBlackBox: 'asdf',
          grantType: 'password',
          scope: 'Mobile.Service offline_access',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Culture: 'zh-cn',
          },
        },
      )
      .then(res => {
        console.log('useUserStore res.status=' + res.status);
        if (res.status === 200) {
          set({isLoggedIn: true});
        } else {
          set({isLoggedIn: false});
        }
        set({isLoading: false});

        set({accessToken: res.data.accessToken});
        set({memberInfo: res.data.memberInfo});
      })
      .catch(e => {
        console.log(`Login error: ${e}`);
      });
  },
  logout: () => {
    set({isLoading: true});
    set({accessToken: null});
    set({memberInfo: null});
    set({isLoading: false});
  },
}));

export default useUserStore;
