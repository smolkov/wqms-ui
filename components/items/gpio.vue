<template>
  <v-card class="mx-auto" nuxt :to="'/hardware/pins/' + id">
    <v-list-item two-line>
      <v-list-item-content>
        PIN {{ id }}
        <!-- <v-chip class="mr-2" color="green" label outlined>
                    <v-icon left>mdi-brightness-5</v-icon>
                    PIN {{ pin.id }}
                  </v-chip> -->
        <v-list-item-subtitle>GPio pin info</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list class="transparent">
      <v-list-item>
        <v-list-item-title>Status</v-list-item-title>
        <v-list-item-subtitle class="text-right">
          {{ status }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <!-- <v-scroll-y-transition> -->
    <!-- <div v-if="active" class="display-3 flex-grow-1 text-center"> -->
    <!-- Active -->
    <!-- </div> -->
    <!-- </v-scroll-y-transition> -->
  </v-card>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: 'ERROR',
    },
  },
}
</script>
