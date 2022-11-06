<template>
  <base-card>
    <ul>
      <li v-for="(value, name) in $store.state.dataRate" :key="value">
        1 {{ name }}={{ value }}
        {{ $store.state.currencyOne }}
      </li>
    </ul>
  </base-card>
</template>

<script>
export default {
  methods: {
    fetchRateToBase() {
      this.$store.dispatch('fetchRateToBase');
    },
  },
  created() {
    this.fetchRateToBase();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

li {
  text-align: center;
  border: 1px solid #3d008d;
  border-radius: 16px;
  padding: 10px;
}
</style>
