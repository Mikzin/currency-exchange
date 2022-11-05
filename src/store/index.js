import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      codes: [
        'AED',
        'ARS',
        'AUD',
        'BGN',
        'BRL',
        'BSD',
        'CAD',
        'CHF',
        'CLP',
        'CNY',
        'COP',
        'CZK',
        'DKK',
        'DOP',
        'EGP',
        'EUR',
        'FJD',
        'GBP',
        'GTQ',
        'HKD',
        'HRK',
        'HUF',
        'IDR',
        'ILS',
        'INR',
        'ISK',
        'JPY',
        'KRN',
        'KZT',
        'MXN',
        'MYR',
        'NOK',
        'NZD',
        'PAB',
        'PEN',
        'PHP',
        'PKR',
        'PLN',
        'PYG',
        'RON',
        'RUB',
        'SAR',
        'SEK',
        'SGD',
        'THB',
        'TRY',
        'TWD',
        'UAH',
        'USD',
        'UYU',
        'VND',
        'ZAR',
      ],
      data: [],
      currencyOne: 'RUB',
      currencyTwo: 'USD',
      rate: 0,
      amountOne: 1,
      amountTwo: 0,
    };
  },
  actions: {
    async fetchRate(context) {
      const api = 'e46f83a4158bf1a6da0b0dbe';
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${api}/latest/${context.state.currencyOne}`
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || 'Failed to fetch data!'
        );
        throw error;
      }

      console.log(responseData);

      context.commit('countValue', responseData);
    },
  },
  mutations: {
    setValue(state) {
      let userLang = navigator.language || navigator.userLanguage;
      if (userLang.includes('ru')) {
        state.currencyOne = 'RUB';
        state.currencyTwo = 'USD';
      } else {
        state.currencyOne = 'USD';
        state.currencyTwo = 'RUB';
      }
    },
    switchValues(state) {
      const tempVal = state.currencyOne;
      state.currencyOne = state.currencyTwo;
      state.currencyTwo = tempVal;
    },
    countValue(state, payload) {
      state.data = payload;
      state.rate = Number(payload.conversion_rates[state.currencyTwo]);
      state.amountTwo = state.amountOne * state.rate.toFixed(2);
    },
  },
  getters: {},
});

export default store;
