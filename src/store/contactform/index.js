
import db from '../../plugins/firebase';

const initialState = {
  loading: false,
  requireCols: ['name', 'name_kana', 'email', 'service', 'title', 'content'],
  validateFormatCols: ['name_kana', 'email', 'zipcode', 'phone_number'],
  currentVals: {
    name: '',
    name_kana: '',
    company_name: '',
    email: '',
    zipcode: '',
    address_prefecture: '',
    address_city: '',
    address_detail: '',
    phone_number: '',
    service: '',
    title: '',
    content: '',
    personal_info_agreement: false,
  },
  errors: {
    name: {},
    name_kana: {},
    company_name: {},
    email: {},
    zipcode: {},
    address_prefecture: {},
    address_city: {},
    address_detail: {},
    phone_number: {},
    service: {},
    title: {},
    content: {},
  },
  errorMsgs: {
    name: {
      require: '姓 名を入力してください。',
    },
    name_kana: {
      require: '姓 名（かな）を入力してください。',
      format: '姓 名（かな）はひらがなで入力してください。',
    },
    email: {
      require: 'メールアドレスを入力してください。',
      format: 'メールアドレスの形式が正しくありません。',
    },
    zipcode: {
      format: '郵便番号の形式が正しくありません。',
    },
    phone_number: {
      format: '電話番号の形式が正しくありません。',
    },
    service: {
      require: 'どの製品についてか選択してください。',
    },
    title: {
      require: '問い合わせ件名を入力してください。',
    },
    content: {
      require: '問い合わせ内容を入力してください。',
    },
  },
  storeResult: '',
  storeError: '',
};

const getters = {
  hasError: state => name => Object.keys(state.errors[name]).length > 0,

  existError: (state) => {
    let existError = false;
    Object.keys(state.errors).forEach((col) => {
      if (Object.keys(state.errors[col]).length > 0) {
        existError = true;
      }
    });
    return existError;
  },
};

const actions = {
  validate({ state, dispatch }, col) {
    if (state.requireCols.includes(col)) {
      dispatch('validateRequire', col);
    }
    if (state.validateFormatCols.includes(col)) {
      dispatch('validateFormat', col);
    }
  },

  validateRequire({ state, commit }, col) {
    if (!state.currentVals[col]) {
      commit('setError', {
        col,
        type: 'require',
      });
    } else {
      commit('removeError', {
        col,
        type: 'require',
      });
    }
  },

  validateFormat({ state, commit }, col) {
    if (['zipcode', 'phone_number'].includes(col) && !state.currentVals[col]) {
      commit('removeError', {
        col,
        type: 'format',
      });
      return true;
    }
    let regex;
    switch (col) {
      case 'name_kana':
        regex = /[\u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E}]/mu;
        break;
      case 'email':
        regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
        break;
      case 'zipcode':
        regex = /^[0-9]{7}$/;
        break;
      case 'phone_number':
        regex = /^(050|070|080|090)\d{8}$|^0\d{9}$/;
        break;
      default:
        break;
    }
    if (!state.currentVals[col].match(regex)) {
      commit('setError', {
        col,
        type: 'format',
      });
    } else {
      commit('removeError', {
        col,
        type: 'format',
      });
    }
    return true;
  },

  async store({ state, commit }) {
    commit('setLoading', true);
    const { email } = state.currentVals;
    await db.collection('contacts').doc(email).set(state.currentVals)
      .then(() => {
        commit('setStoreResult', 'success');
        console.log('Document successfully written!');
        commit('setLoading', false);
      })
      .catch((error) => {
        console.error(error);
        commit('setLoading', false);
        commit('setStoreResult', 'error');
        commit('setStoreError', error);
      });
  },
};

const mutations = {
  setError(state, { col, type }) {
    const { errors } = state;
    errors[col][type] = state.errorMsgs[col][type];
    state.errors = Object.assign({}, state.errors, errors);
  },
  removeError(state, { col, type }) {
    if (state.errors[col][type]) {
      delete state.errors[col][type];
    }
  },
  setLoading(state, bool) {
    state.loading = bool;
  },
  setStoreResult(state, res) {
    state.storeResult = res;
  },
  setStoreError(state, error) {
    state.storeError = error;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
