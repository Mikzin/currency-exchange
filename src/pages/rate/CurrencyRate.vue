<template>
  <base-card>
    <ul>
      <li
        v-for="(value, name) in $store.state.data.conversion_rates"
        :key="value"
      >
        1 {{ $store.state.currencyOne }}={{ value }}
        {{ name }}
      </li>
    </ul>
  </base-card>
</template>

<script>
export default {
  methods: {
    fetchRate() {
      this.$store.dispatch('fetchRate');
    },
  },
  mounted() {
    this.fetchRate();
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
