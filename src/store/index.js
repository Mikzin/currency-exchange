import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      codes: [
        'CZK',
        'EUR',
        'CAD',
        'GBP',
        'HUF',
        'JPY',
        'KZT',
        'NZD',
        'RUB',
        'UAH',
        'USD',
      ],
      data: [],
      dataRate: {},
      currencyOne: 'RUB',
      currencyTwo: 'USD',
      rate: 0,
      amountOne: 1,
      amountTwo: 0,
    };
  },
  actions: {
    async fetchRate(context) {
      const api = 'fa449cedb67a3c6aa44339f9';
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

      context.commit('countValue', responseData);
    },

    async fetchRateToBase(context) {
      const api = 'fa449cedb67a3c6aa44339f9';

      for (const code of context.state.codes) {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${api}/pair/${code}/${context.state.currencyOne}`
        );
        const responseData = await response.json();

        if (!response.ok) {
          const error = new Error(
            responseData.message || 'Failed to fetch data!'
          );
          throw error;
        }

        context.state.dataRate[code] = responseData.conversion_rate;
        delete context.state.dataRate[context.state.currencyOne];
      }
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
