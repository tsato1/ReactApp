import create from 'zustand';
import axios from 'axios';
import {BASE_URL} from '../services/Services';

import LocalizedStrings from 'react-native-localization';

import SsProviders from '../ui/screens/g/utils/SsProviders';
import eSsProviders from '../ui/screens/g/utils/ESsProviders';
import {Images} from '../assets/Images';
import {set} from 'react-native-reanimated';
import {get} from 'react-native/Libraries/Utilities/PixelRatio';

const useGStore = create((set, get) => ({
  isLoading: false,
  allgCategories: {},
  getAllgCategories: async () => {
    set({isLoading: true});
    await axios
      .get(`${BASE_URL}/asdf`, {
        headers: {
          'Content-Type': 'application/json',
          Culture: 'zh-cn',
        },
      })
      .then(res => {
        set({allgCategories: res.data});
      })
      .catch(e => {
        console.log(`Error at usegStore.getAllgCategories: ${e}`);
      })
      .finally(() => {
        set({isLoading: false});
      });
  },
  SsBanners: {},
  eSsBanners: {},
  CBanners: {},
  PBanners: {},
  LBanners: {},
  KBanners: {},
  setBanners: () => {
    get().getBanners('S');
    get().getBanners('ES');
    get().getBanners('C');
    get().getBanners('P');
    get().getBanners('L');
    get().getBanners('K');
  },
  getBanners: async pageType => {
    set({isLoading: true});
    await axios
      .get(`${BASE_URL}/asdf`, {
        headers: {
          'Content-Type': 'application/json',
          Culture: 'zh-cn',
        },
      })
      .then(res => {
        const data = res.data;
        data.forEach((item, index) => (item.index = index));
        if (pageType === 'S') {
          set({SsBanners: data});
        } else if (pageType === 'ES') {
          set({eSsBanners: data});
        } else if (pageType === 'C') {
          set({CBanners: data});
        } else if (pageType === 'P') {
          set({PBanners: data});
        } else if (pageType === 'L') {
          set({LBanners: data});
        } else if (pageType === 'K') {
          set({KBanners: data});
        }
      })
      .catch(e => {
        console.log(`Error at usegStore.getBannerImagesSs: ${e}`);
      })
      .finally(() => {
        set({isLoading: false});
      });
  },
  SsProviders: SsProviders,
  eSsProviders: eSsProviders,
  CProviders: {},
  PProviders: {},
  LProviders: {},
  KProviders: {},
  setProviders: () => {
    get().getProviders('C');
    get().getProviders('P');
    get().getProviders('L');
    get().getProviders('K');
  },
  getProviders: async platform => {
    set({isLoading: true});
    await axios
      .get(`${BASE_URL}/asdf`, {
        headers: {
          'Content-Type': 'application/json',
          Culture: 'zh-cn',
        },
      })
      .then(res => {
        if (platform === 'C') {
          const data = res.data;
          data.forEach(item => {
            item.isProvider = true;
            if (item.providerFlag === 'a') {
              item.imageLight = Images.gCenter.providerCAGLight;
              item.imageDark = Images.gCenter.providerCAGDark;
            } else if (item.providerFlag === 'b') {
              item.imageLight = Images.gCenter.providerCBGLight;
              item.imageDark = Images.gCenter.providerCBGDark;
            } else if (item.providerFlag === 'c') {
              item.imageLight = Images.gCenter.providerCEBETLight;
              item.imageDark = Images.gCenter.providerCEBETDark;
            } else if (item.providerFlag === 'd') {
              item.imageLight = Images.gCenter.providerCEVOLight;
              item.imageDark = Images.gCenter.providerCEVODark;
            } else if (item.providerFlag === 'e') {
              item.imageLight = Images.gCenter.providerCMGLight;
              item.imageDark = Images.gCenter.providerCMGDark;
            } else if (item.providerFlag === 'f') {
              item.imageLight = Images.gCenter.providerCGPILight;
              item.imageDark = Images.gCenter.providerCGPIDark;
            }
            item.isProvider = true;
          });
          set({CProviders: data});
        } else if (platform === 'P') {
          const data = res.data;
          data.forEach(item => {
            item.isProvider = true;
            if (item.providerFlag === 'a') {
              item.imageLight = Images.gCenter.providerPJBPLight;
              item.imageDark = Images.gCenter.providerPJBPDark;
            } else if (item.providerFlag === 'b') {
              item.imageLight = Images.gCenter.providerPKYLight;
              item.imageDark = Images.gCenter.providerPKYDark;
            } else if (item.providerFlag === 'c') {
              item.imageLight = Images.gCenter.providerPJokerLight;
              item.imageDark = Images.gCenter.providerPJokerDark;
            }
          });
          set({PProviders: res.data});
        } else if (platform === 'L') {
          const data = res.data;
          data.forEach(item => {
            item.isProvider = true;
            if (item.providerFlag === 'b') {
              item.imageLight = Images.gCenter.providerLJokerLight;
              item.imageDark = Images.gCenter.providerLJokerDark;
            } else if (item.providerFlag === 'c') {
              item.imageLight = Images.gCenter.providerLPTLight;
              item.imageDark = Images.gCenter.providerLPTDark;
            } else if (item.providerFlag === 'd') {
              item.imageLight = Images.gCenter.providerLJokerLight;
              item.imageLight = Images.gCenter.providerLJokerLight;
            } else if (item.providerFlag === 'e') {
              item.imageLight = Images.gCenter.providerLPPLight;
              item.imageDark = Images.gCenter.providerLPPDark;
            }
          });
          set({LProviders: res.data});
        } else if (platform === 'K') {
          const data = res.data;
          data.forEach(item => {
            item.isProvider = true;
            if (item.providerFlag === 'SGW') {
              item.imageLight = Images.gCenter.providerKSGWLight;
              item.imageDark = Images.gCenter.providerKSGWDark;
            }
          });
          set({KProviders: res.data});
        }
      })
      .catch(e => {
        console.log(
          `Error at usegStore.getProviders: platform-> ${platform}, error-> ${e}`,
        );
      })
      .finally(() => {
        set({isLoading: false});
      });
  },
  Sspros: {},
  SsMainpros: {},
  SsIMpros: {},
  SsDGTpros: {},
  eSspros: {},
  Cpros: {},
  Ppros: {},
  Lpros: {},
  Kpros: {},
  setpros: async () => {
    // Ss
    await get().getpros('S');
    await get().getpros('ASDF_S');
    await get().getpros('ASDF_S');
    set({
      Sspros: [get().SsMainpros, get().SsASDFpros, get().SsASDFpros],
    });
    // eSs
    get().getpros('ES');
    // C
    get().getpros('C');
    // P
    get().getpros('P');
    // L
    get().getpros('L');
    // K
    get().getpros('K');
  },
  getpros: async platform => {
    set({isLoading: true});
    await axios
      .get(`${BASE_URL}/asdf`, {
        headers: {
          'Content-Type': 'application/json',
          Culture: 'zh-cn',
        },
      })
      .then(res => {
        const data = res.data.slice(0, 3);
        data.forEach(item => {
          item.isProvider = false;
        });

        if (platform === 'S') {
          set({SsMainpros: data[0]});
        } else if (platform === 'ASDF_S') {
          set({SsIMpros: data[0]});
        } else if (platform === 'ASDF_S') {
          set({SsDGTpros: data[0]});
        } else if (platform === 'ES') {
          set({eSspros: data});
        } else if (platform === 'C') {
          set({Cpros: data});
        } else if (platform === 'P') {
          set({Ppros: data});
        } else if (platform === 'L') {
          set({Lpros: data});
        } else if (platform === 'K') {
          set({Kpros: data});
        }
      })
      .catch(e => {
        console.log(
          `Error at usegStore.getpros: platform->${platform} error-> ${e}`,
        );
      })
      .finally(() => {
        set({isLoading: false});
      });
  },
  SsSectionList: [],
  eSsSectionList: [],
  CSectionList: [],
  PSectionList: [],
  LSectionList: [],
  KSectionList: [],
  setSectionList: () => {
    get().setSsSectionList();
    get().setESsSectionList();
    get().setCSectionList();
    get().setPSectionList();
    get().setLSectionList();
    get().setKSectionList();
  },
  setSsSectionList: () => {
    const providerData = {
      title: `${strings.platformSs}${strings.platform}`,
      data: get().SsProviders,
    };
    const proData = {
      title: `${strings.platformSs}${strings.pro}`,
      data: get().Sspros,
    };
    // console.log(
    //   'SsSectionList   provider     00000 0000 00000 0000 00 ',
    //   providerData.data,
    // );
    // console.log(
    //   'SsSectionList   pro     00000 0000 00000 0000 00 ',
    //   proData.data,
    // );
    set({SsSectionList: [providerData, proData]});
  },
  setESsSectionList: () => {
    const providerData = {
      title: `${strings.platformESs}${strings.platform}`,
      data: get().eSsProviders,
    };
    const proData = {
      title: `${strings.platformESs}${strings.pro}`,
      data: get().eSspros,
    };
    set({eSsSectionList: [providerData, proData]});
  },
  setCSectionList: () => {
    const providerData = {
      title: `${strings.platformC}${strings.platform}`,
      data: get().CProviders,
    };
    const proData = {
      title: `${strings.platformC}${strings.pro}`,
      data: get().Cpros,
    };
    set({CSectionList: [providerData, proData]});
  },
  setPSectionList: () => {
    const providerData = {
      title: `${strings.platformP}${strings.platform}`,
      data: get().PProviders,
    };
    const proData = {
      title: `${strings.platformP}${strings.pro}`,
      data: get().Ppros,
    };
    // console.log(
    //   'PsectionList   provider     00000 0000 00000 0000 00 ',
    //   providerData.data,
    // );
    // console.log(
    //   'PsectionList   pro     00000 0000 00000 0000 00 ',
    //   proData.data,
    // );
    set({PSectionList: [providerData, proData]});
  },
  setLSectionList: () => {
    const providerData = {
      title: `${strings.platformL}${strings.platform}`,
      data: get().LProviders,
    };
    const proData = {
      title: `${strings.platformL}${strings.pro}`,
      data: get().Lpros,
    };
    set({LSectionList: [providerData, proData]});
  },
  setKSectionList: () => {
    const providerData = {
      title: `${strings.platformK}${strings.platform}`,
      data: get().KProviders,
    };
    const proData = {
      title: `${strings.platformK}${strings.pro}`,
      data: get().KPs,
    };
    set({KSectionList: [providerData, proData]});
  },
}));

export default usegStore;

let strings = new LocalizedStrings({
  'zh-cn': {
    platform: '',
    pro: '',
    platformSs: '',
    platformESs: '',
    platformC: '',
    platformP: '',
    platformL: '',
    platformK: '',
  },
  th: {
    platform: '',
    pro: '',
    platformSs: '',
    platformESs: '',
    platformC: '',
    platformP: '',
    platformL: '',
    platformK: '',
  },
  en: {
    platform: '',
    pro: '',
    platformSs: '',
    platformESs: '',
    platformC: '',
    platformP: '',
    platformL: '',
    platformK: '',
  },
});
