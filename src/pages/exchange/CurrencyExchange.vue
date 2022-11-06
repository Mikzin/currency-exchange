<template>
  <section>
    <base-card>
      <div class="currency__container">
        <div class="currency__item">
          <select
            name="currency-first"
            id="currency-first"
            class="currency__select"
            v-model="$store.state.currencyOne"
          >
            <option
              v-for="code in $store.state.codes"
              :value="code"
              :key="code"
            >
              {{ code }}
            </option>
          </select>
          <input
            type="number"
            name="input-one"
            id="input-one"
            class="currency__input"
            v-model="$store.state.amountOne"
            @keydown.enter="fetchRate()"
          />
        </div>
        <base-button @click="switchValues">
          <ion-icon name="repeat-outline" class="reverse-icon"></ion-icon>
        </base-button>
        <div class="currency__item">
          <select
            name="currency-first"
            id="currency-first"
            class="currency__select"
            v-model="$store.state.currencyTwo"
          >
            <option
              v-for="code in $store.state.codes"
              :value="code"
              :key="code"
            >
              {{ code }}
            </option>
          </select>
          <input
            type="number"
            name="input-two"
            id="input-two"
            class="currency__input"
            placeholder="0"
            disabled
            v-model="$store.state.amountTwo"
          />
        </div>
        <h4 class="currency__update">
          Обновление курса:
          {{ $store.state.data.time_last_update_utc }}
        </h4>
      </div>
    </base-card>
  </section>
</template>

<script>
export default {
  methods: {
    setValue() {
      this.$store.commit('setValue');
    },
    fetchRate() {
      this.$store.dispatch('fetchRate');
    },

    switchValues() {
      this.$store.commit('switchValues');
      this.fetchRate();
    },
    fetchRateToBase() {
      this.$store.dispatch('fetchRateToBase');
    },
  },

  mounted() {
    this.setValue();
    this.fetchRate();
  },
};
</script>

<style scoped>
.currency__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.currency__item {
  display: flex;
  margin: 10px 0;
}

.currency__select {
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
}

.currency__input {
  height: 50px;
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
}

.currency__input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.reverse-icon {
  width: 36px;
  height: 36px;
}

.currency__update {
  text-align: center;
}
</style>
