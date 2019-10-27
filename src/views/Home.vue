<template>
  <div class="home">
    <MyInputForm name="name" label="氏名（漢字）" placeholder="氏名（漢字）を入力してください"/>
    <MyInputForm name="name_kana" label="氏名（かな）" placeholder="氏名（かな）を入力してください"/>
    <MyInputForm name="company_name" label="会社名" placeholder="会社名を入力してください"/>
    <MyInputForm name="email" label="メールアドレス" placeholder="メールアドレスを入力してください"/>
    <AddressForm/>
    <MyInputForm name="phone_number" label="電話番号" placeholder="電話番号を入力してください"/>
    <MySelectForm name="title" :options="options" label="どの製品について"/>
    <MyTextbox name="content" label="問い合わせ内容"/>
    <MyCheckbox name="personal_info_agreement" label="個人情報の保持することに対し同意しますか？"/>
    <div class="btn-container">
      <v-btn @click="handleSubmit">問い合わせ</v-btn>
    </div>
  </div>
</template>

<script>
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
  methods: {
    handleSubmit() {
      this.$router.push('confirm');
    },
  },
};
</script>

<style scoped lang="scss">
.btn-container {
  margin: 20px;
}
</style>
