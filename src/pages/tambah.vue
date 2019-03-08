<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex>
        <v-card>
          <v-toolbar>
            <v-toolbar-title>Tambah Kas</v-toolbar-title>
          </v-toolbar>
          <v-card-text style="height: 300px;" class="grey lighten-5">
            <v-form v-model="valid">
              <v-radio-group v-model="jenis">
                <v-radio
                  key="keluar"
                  label="Keluar"
                  value="keluar"
                ></v-radio>
                <v-radio
                  key="masuk"
                  label="Masuk"
                  value="masuk"
                ></v-radio>
              </v-radio-group>

              <v-text-field
                v-model="nominal"
                :counter="10"
                label="Nominal"
                required
              ></v-text-field>

              <v-text-field
                v-model="keterangan"
                label="Keterangan"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-card-text style="height: 100px; position: relative">
            <v-btn
              absolute
              dark
              fab
              top
              right
              color="green"
              @click="simpan"
            >
              <v-icon>save</v-icon>
            </v-btn>
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

  data: () => ({
    valid: true,
    nominal: 0,
    keterangan: '',
    jenis: 'keluar'
  }),

  methods: {
    simpan() {
      
    }
  }

}
</script>
