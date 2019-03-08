<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex>
        <v-card>
          <v-toolbar>
            <v-toolbar-title>Tambah Kas</v-toolbar-title>
          </v-toolbar>
          <v-card-text style="height: 300px;" class="grey lighten-5">
            form
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'basic',

  metaInfo () {
    return { title: 'Tambah Data Kas' }
  },

}
</script>
