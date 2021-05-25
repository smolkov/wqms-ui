<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col
          v-for="(pump, index) in pumps"
          :key="index"
          cols="12"
          md="3"
          xs="12"
          xl="2"
        >
          <v-item v-slot:default="{ active, toggle }">
            <pump :id="pump.id" :status="pump.state" @click="toggle" />
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import Pump from '~/components/items/pump.vue'
export default {
  components: {
    Pump,
  },
  asyncData({ store }) {
    // const { data } = await axios.get(`https://my-api/posts/${params.id}`)
    return { pumps: store.state.pump.list }
  },
}
</script>
