import create from 'zustand';
import axios from 'axios';
import {BASE_URL} from '../services/Services';

import {Images} from '../assets/Images';

const usepStore = create((set, get) => ({
  isLoading: false,
  pCategories: [],
  getPCategories: async () => {
    set({isLoading: true});
    await axios
      .get(`${BASE_URL}/asdf`, {
        headers: {
          'Content-Type': 'application/json',
          Culture: 'zh-cn',
        },
      })
      .then(res => {
        set({pCategories: res.data});
      })
      .catch(e => {
        console.log(`Error at usepStore.getpCategories: error-> ${e}`);
      })
      .finally(() => {
        set({isLoading: false});
      });
  },
  sps: [],
  sIMSBps: [],
  sDGTps: [],
  eps: [],
  cps: [],
  pps: [],
  lps: [],
  kps: [],
  otherps: [],
  getps: async platform => {
    set({isLoading: true});
    await axios
      .get(`${BASE_URL}/asdf`, {
        headers: {
          'Content-Type': 'application/json',
          Culture: 'zh-cn',
        },
      })
      .then(res => {
        if (platform === 'S') {
          console.log('S S S S === ', res.data);
          res.data.modalHtml = null;
          set({sPs: res.data});
        } else if (platform === 'ASDF_S') {
          set({sIMPs: res.data});
        } else if (platform === 'ASDF_S') {
          set({sDGTPs: res.data});
        } else if (platform === 'ES') {
          set({ePs: res.data});
        } else if (platform === 'c') {
          set({cPs: res.data});
        } else if (platform === 'p') {
          set({pPs: res.data});
        } else if (platform === 'l') {
          set({lPs: res.data});
        } else if (platform === 'k') {
          set({kPs: res.data});
        } else if (platform === 'OTHER') {
          set({otherPs: res.data});
        }
      })
      .catch(e => {
        console.log(
          `Error at usePsStore.getPs: platform->${platform} error-> ${e}`,
        );
      })
      .finally(() => {
        set({isLoading: false});
      });
  },
}));

export default usePStore;
