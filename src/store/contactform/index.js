const initialState = {
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
  errors: {},
  errorMsgs: {
    name: {
      require: '氏名（漢字）を入力してください。',
    },
    name_kana: {
      require: '氏名（かな）を入力してください。',
      format: '氏名（かな）はひらがなで入力してください。',
    },
    company_name: {
      require: '会社名を入力してください。',
    },
    email: {
      require: 'メールアドレスを入力してください。',
      format: 'メールアドレスの形式が正しくありません。',
    },
    zipcode: {
      require: '郵便番号を入力してください。',
      format: '郵便番号の形式が正しくありません。',
    },
    address_prefecture: {
      require: '住所（都道府県）を選択してください。',
    },
    address_city: {
      require: '住所（市区町村）を入力してください。',
    },
    address_detail: {
      require: '住所を入力してください。',
    },
    phone_number: {
      require: '電話番号を入力してください。',
      format: '電話番号の形式が正しくありません。',
    },
    title: {
      require: '問い合わせ件名を入力してください。',
    },
    content: {
      require: '問い合わせ内容を入力してください。',
    },
  },
};

const getters = {
  hasError: state => name => state.errors[name] !== undefined,
};

const actions = {
  validate({ state, commit }, col) {
    switch (col) {
      case 'name':
        if (!state.name) {
          commit('setError', {
            col: 'name',
            type: 'require',
          });
        }
        break;
      case 'name_kana':
        break;
      case 'company_name':
        break;
      case 'email':
        break;
      case 'title':
        break;
      case 'content':
        break;
      default:
        break;
    }
  },
};

const mutations = {
  setError(state, { col, type }) {
    state.errors = state.errorMsgs[col][type];
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
