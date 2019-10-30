<template>
  <div class="address-form">
    <v-row justify="center">
      <v-col cols="12">
        <MyInputForm
          type="text"
          name="zipcode"
          label="郵便番号（ハイフンなし）"
          placeholder="郵便番号（ハイフンなし）を入力してください"
          @oninput="onInputZipcode"
        />
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
import axios from 'axios';
import axiosJsonpAdapter from 'axios-jsonp';

import {
  mapState, mapGetters, mapActions, mapMutations,
} from 'vuex';

import MyInputForm from '@/components/contactform/MyInputForm.vue';

const ZIPCODE_API_URL = 'http://zipcloud.ibsnet.co.jp/api/search';


export default {
  name: 'AddressForm',
  components: {
    MyInputForm,
  },
  computed: {
    ...mapState('contactform', ['currentVals', 'errors']),
    ...mapGetters('contactform', ['hasError']),
  },
  methods: {
    ...mapActions('contactform', ['validate']),
    ...mapMutations('contactform', ['setCurrentVals', 'setLoading']),

    onInputZipcode(e) {
      const { target } = e;
      const formattedVal = target.value.replace(/[^0-9]/gi, '').slice(0, 7);
      this.setCurrentVals({ zipcode: formattedVal });
      target.value = formattedVal;
      this.autoInputAddress();
    },

    async autoInputAddress() {
      if (this.currentVals.zipcode === '' || this.hasError('zipcode')) {
        return true;
      }
      this.setLoading(true);
      const { zipcode } = this.currentVals;
      const res = await axios.get(ZIPCODE_API_URL, {
        adapter: axiosJsonpAdapter,
        params: {
          zipcode,
        },
      });
      const address = res.data.results;
      if (address === null) {
        return true;
      }
      this.setCurrentVals({
        address_prefecture: address[0].address1,
        address_city: address[0].address2,
        address_detail: address[0].address3,
      });
      this.setLoading(false);
      return true;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
