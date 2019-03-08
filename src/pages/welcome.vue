<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex>
        <v-card>
          <v-toolbar>
            <v-toolbar-title>List Kas</v-toolbar-title>
          </v-toolbar>
          <v-card-text style="height: 300px;" class="grey lighten-5">
            <v-list two-line>
              <template v-for="(item, index) in items">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                >
                  {{ item.header }}
                </v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
                ></v-divider>

                <v-list-tile
                  v-else
                  :key="item.nominal"
                  avatar
                >
                  <v-list-tile-avatar>
                    <i class="fa fa-fw" :class="[item.icon, iconTextColor(item.icon)]"></i>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.nominal"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.keterangan"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card-text>
          <v-card-text style="height: 100px; position: relative">
            <v-btn
              absolute
              dark
              fab
              top
              right
              color="pink"
              @click="tambah"
            >
              <v-icon>add</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'basic',

  metaInfo () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: APP_NAME,
    items: [
      { header: 'Today' },
      {
        icon: 'fa-arrow-up',
        nominal: 100000,
        keterangan: "<span class='text--primary'>Masuk</span> &mdash; Angpao"
      },
      { divider: true, inset: true },
      {
        icon: 'fa-arrow-down',
        nominal: 15000,
        keterangan: "<span class='text--primary'>Keluar</span> &mdash; beli makan siang."
      },
      { divider: true, inset: true },
      {
        icon: 'fa-arrow-down',
        nominal: 30000,
        keterangan: "<span class='text--primary'>Keluar</span> &mdash; bayar utang"
      }
    ]
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  }),

  methods: {
    iconTextColor(icon) {
      if(icon === 'fa-arrow-up') {
        return "green--text"
      }

      return "red--text"
    },

    tambah() {
      this.$router.push({ name: 'tambah' })
    }
  }
}
</script>

<style scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.title {
  font-size: 85px;
}
</style>
