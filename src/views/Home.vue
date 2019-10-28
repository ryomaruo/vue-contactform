<template>
  <div class="home">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="8" md="6">
          <MyInputForm name="name" label="姓 名" placeholder="姓 名を入力してください"/>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" md="6">
          <MyInputForm name="name_kana" label="姓 名（かな）" placeholder="姓 名（かな）を入力してください"/>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" md="6">
          <MyInputForm name="company_name" label="会社名" placeholder="会社名を入力してください"/>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" md="6">
          <MyInputForm name="email" label="メールアドレス" placeholder="メールアドレスを入力してください"/>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" md="6">
          <AddressForm/>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" md="6">
          <MyInputForm
            name="phone_number" label="電話番号（ハイフンなし）" placeholder="電話番号（ハイフンなし）を入力してください"/>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" md="6">
          <MySelectForm name="service" :options="options" label="どの製品について"/>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" md="6">
          <MyInputForm name="title" label="問い合わせ件名" placeholder="問い合わせ件名を入力してください"/>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" md="6">
          <MyTextbox name="content" label="問い合わせ内容"/>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10" md="10">
          <MyCheckbox name="personal_info_agreement" label="個人情報の保持することに対し同意しますか？"/>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" md="6">
          <div class="btn-container">
            <v-btn @click="handleSubmit">問い合わせ</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

import MyInputForm from '@/components/contactform/MyInputForm.vue';
import AddressForm from '@/components/contactform/AddressForm.vue';
import MySelectForm from '@/components/contactform/MySelectForm.vue';
import MyTextbox from '@/components/contactform/MyTextbox.vue';
import MyCheckbox from '@/components/contactform/MyCheckbox.vue';

export default {
  name: 'home',
  components: {
    MyInputForm,
    AddressForm,
    MySelectForm,
    MyTextbox,
    MyCheckbox,
  },
  data() {
    return {
      options: [
        {
          label: 'Aサービスについて',
          val: 'service_a',
        },
        {
          label: 'Bサービスについて',
          val: 'service_b',
        },
        {
          label: 'Cサービスについて',
          val: 'service_c',
        },
        {
          label: 'その他',
          val: 'others',
        },
      ],
    };
  },
  computed: {
    ...mapState('contactform', ['currentVals', 'errors']),
    ...mapGetters('contactform', ['existError']),
  },
  methods: {
    ...mapActions('contactform', ['validate']),
    handleSubmit() {
      Object.keys(this.currentVals).forEach((col) => {
        this.validate(col);
      });
      if (this.existError || !this.currentVals.personal_info_agreement) {
        return false;
      }
      this.$router.push('confirm');
      return true;
    },
  },
};
</script>

<style scoped lang="scss">
.btn-container {
  margin: 20px;
}
</style>
