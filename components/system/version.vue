<template>
  <div class="text-center">
    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on"> {{ get_version }} </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in get_versions" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data: () => ({}),
  computed: {
    ...mapGetters('app', {
      get_version: 'version',
      get_versions: 'versions',
    }),
  },
}
</script>
