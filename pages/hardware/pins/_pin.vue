<template>
  <div>
    <v-alert type="error"> Not exported. </v-alert>
    <h2>GPIO PIN {{ pin }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Child',
  validate({ params }) {
    return !isNaN(+params.pin)
  },
  computed: {
    pin() {
      return this.$route.params.pin
    },
  },
}
</script>

<style scoped></style>
