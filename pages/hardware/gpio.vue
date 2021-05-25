<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col
          v-for="(pin, index) in pins"
          :key="index"
          cols="12"
          md="3"
          xs="12"
          xl="2"
        >
          <v-item v-slot:default="{ active, toggle }">
            <gpio :id="pin.id" :status="pin.status" @click="toggle" />
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import Gpio from '~/components/items/gpio.vue'
export default {
  components: {
    Gpio,
  },
  asyncData({ store }) {
    // const { data } = await axios.get(`https://my-api/posts/${params.id}`)
    return { pins: store.state.gpio.pins }
  },
}
</script>
