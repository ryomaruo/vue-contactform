<template>
  <div class="home">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card
            class="mx-auto"
            outlined
          >
            <v-container fluid>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <MyInputForm type="text"
                    name="name"
                    label="姓 名"
                    placeholder="姓 名を入力してください"
                    :isRequired="true"/>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <MyInputForm
                    type="text"
                    name="name_kana"
                    label="姓 名（かな）"
                    placeholder="姓 名（かな）を入力してください"
                    :isRequired="true"/>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <MyInputForm
                    type="text"
                    name="company_name"
                    label="会社名"
                    placeholder="会社名を入力してください"/>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <MyInputForm
                    type="text"
                    name="email"
                    label="メールアドレス"
                    placeholder="メールアドレスを入力してください"
                    :isRequired="true"/>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <AddressForm/>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <MyInputForm
                    type="text"
                    name="phone_number"
                    label="電話番号（ハイフンなし）"
                    placeholder="電話番号（ハイフンなし）を入力してください"
                    @oninput="onInputPhoneNum"/>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <MySelectForm
                    name="service"
                    :options="options"
                    label="どの製品について"/>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <MyInputForm
                    type="text"
                    name="title"
                    label="問い合わせ件名"
                    placeholder="問い合わせ件名を入力してください"
                    :isRequired="true"/>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <MyTextbox
                    name="content"
                    label="問い合わせ内容"
                    :isRequired="true"/>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <MyCheckbox
                    name="personal_info_agreement"
                    label="個人情報の保持することに対し同意しますか？"/>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <div class="btn-container">
                    <v-btn @click="handleSubmit">確認画面へ</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import {
  mapState, mapGetters, mapActions, mapMutations,
} from 'vuex';

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
    ...mapMutations('contactform', ['setCurrentVals']),

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

    onInputPhoneNum(e) {
      const { target } = e;
      let formattedVal = target.value.replace(/[^0-9]/gi, '');
      const isCellPhone = /^(050|070|080|090)\d+$/.test(formattedVal);
      if (isCellPhone) {
        formattedVal = formattedVal.slice(0, 11);
      } else {
        formattedVal = formattedVal.slice(0, 10);
      }
      this.setCurrentVals({ phone_number: formattedVal });
      target.value = formattedVal;
    },
  },
};
</script>

<style scoped lang="scss">
.btn-container {
  margin: 20px;
}
</style>
