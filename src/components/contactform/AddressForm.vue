<template>
  <div class="address-form">
    <v-row justify="center">
      <v-col cols="12">
        <MyInputForm name="zipcode" label="郵便番号（ハイフンなし）" placeholder="郵便番号（ハイフンなし）を入力してください"/>
      </v-col>
      <v-col cols="12">
        <MyInputForm name="address_prefecture" label="住所（都道府県）" placeholder="住所（都道府県）を入力してください"/>
      </v-col>
      <v-col cols="12">
        <MyInputForm name="address_city" label="住所（市区町村）" placeholder="住所（市区町村）を入力してください"/>
      </v-col>
      <v-col cols="12">
        <MyInputForm name="address_detail" label="住所" placeholder="住所を入力してください"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import MyInputForm from '@/components/contactform/MyInputForm.vue';

export default {
  name: 'AddressForm',
  components: {
    MyInputForm,
  },
  computed: {
    ...mapState('contactform', ['errors']),
  },
  methods: {
    ...mapActions('contactform', ['validate']),
  },
};
</script>

<style scoped lang="scss">
</style>
