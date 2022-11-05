export default {
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
  mutations: {},
  actions: {
    fetchRate() {
      const api = 'e46f83a4158bf1a6da0b0dbe';
      fetch(
        `https://v6.exchangerate-api.com/v6/${api}/latest/${this.currencyOne}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.data = data;
          this.rate = Number(data.conversion_rates[this.currencyTwo]);

          this.amountTwo = this.amountOne * this.rate.toFixed(2);
        });
    },
  },
  getters: {
    // codes(state) {
    //   return state.codes;
    // },
    // data(state) {
    //   return state.data;
    // },
    // currencyOne(state) {
    //   return state.currencyOne;
    // },
    // currencyTwo(state) {
    //   return state.currencyTwo;
    // },
    // rate(state) {
    //   return state.rate;
    // },
    // amountOne(state) {
    //   return state.amountOne;
    // },
    // amountTwo(state) {
    //   return state.amountTwo;
    // },
  },
};
