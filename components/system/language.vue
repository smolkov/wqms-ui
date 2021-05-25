<template>
  <div class="text-center">
    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-translate</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-subheader><p>TRANSLATIONS</p></v-subheader>
        <v-list-item-group v-model="selectedItem">
          <v-list-item
            v-for="(item, index) in translations"
            :key="index"
            @click="changeLocale(item.locale)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    selectedItem: 0,
  }),
  methods: {
    ...mapActions('app', [
    'change_locale'
  ]),
  changeLocale(locale) {
      this.change_locale(locale)
      this.$vuetify.lang.current = locale
    },
  },
  computed: {
    ...mapGetters('app', {
      translations: 'translations',
    }),
  },
}
</script>
