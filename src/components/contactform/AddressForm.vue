<template>
  <div class="address-form">
    <MyInputForm name="zipcode" label="郵便番号（ハイフンなし）" placeholder="郵便番号（ハイフンなし）を入力してください"/>
    <MyInputForm name="address_prefecture" label="住所（都道府県）" placeholder="住所（都道府県）を入力してください"/>
    <MyInputForm name="address_city" label="住所（市区町村）" placeholder="住所（市区町村）を入力してください"/>
    <MyInputForm name="address_detail" label="住所" placeholder="住所を入力してください"/>
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
    ...mapState('contactform', []),
  },
  methods: {
    ...mapActions('contactform', []),
  },
};
</script>

<style scoped lang="scss">
</style>
