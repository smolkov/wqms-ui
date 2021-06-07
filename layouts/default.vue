<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <status-logo />
        <v-list-item>
          <v-fab-transition>
            <v-btn
              v-show="!hidden"
              color="red"
              fab
              dark
              large
              top
              absolute
              left
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>
        </v-list-item>
        <v-divider></v-divider>
        <template v-for="(item, i) in items">
          <template v-if="item.items && item.items.length > 0">
            <v-list-group :key="i" no-action :to="item.to">
              <template v-slot:activator>
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="subitem in item.items"
                :key="subitem.name"
                :to="subitem.to"
                router
                exact
              >
                <v-list-item-action v-if="subitem.icon">
                  <v-icon>{{ subitem.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title v-text="subitem.title" />
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>
          <template v-else>
            <v-list-item :key="i" :to="item.to" router exact>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </template>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="appName" />
      <versions />
      <v-spacer />
      <language />
      <v-badge color="green" overlap :content="events">
        <v-btn icon @click.stop="rightDrawer = !rightDrawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-badge>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import StatusLogo from '~/components/status/logo.vue'
import Language from '~/components/system/language.vue'
import Versions from '~/components/system/version.vue'
export default {
  components: {
    StatusLogo,
    Versions,
    Language,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      notification:8,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Status',
          to: '/status',
        },
        {
          icon: 'mdi-calendar',
          title: 'Schedule',
          to: '/schedule',
        },
        {
          icon: 'mdi-clipboard-text-outline',
          title: 'Logs',
          to: '/log',
        },
        {
          icon: 'mdi-database',
          title: 'Database',
          to: '/database',
        },
        {
          icon: 'mdi-calendar',
          title: 'Settings',
          to: '/settings',
        },
        {
          icon: 'mdi-robot-outline',
          title: 'System',
          to: '/system',
          items: [
            {
              title: 'Info',
              to: '/system',
            },
            {
              icon: 'mdi-account-supervisor',
              title: 'User',
              to: '/system/user',
            },
            {
              title: 'Wifi',
              to: '/system/wifi',
            },
            {
              title: 'Network',
              to: '/system/net',
            },
          ],
        },
        {
          icon: 'mdi-chip',
          title: 'Hardware',
          to: '/hardware',
          items: [
            {
              title: 'GPIO',
              to: '/hardware/gpio',
            },
            {
              title: 'Pump',
              to: '/hardware/pump',
            },
          ],
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'WQMS',
    }
  },
  computed: {
    ...mapState({
      appName: (state) => state.app.name,
      events: (state) => state.event.count,

    }),
  },
}
</script>
