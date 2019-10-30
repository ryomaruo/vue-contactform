<template>
  <div class="confirm">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-card
            class="mx-auto"
            outlined
            :loading="loading"
          >
            <v-container fluid>
              <v-container fluid>
                <v-row justify="center">
                  <v-col cols="12" md="8">
                    <div class="confirm-title">氏名（漢字）</div>
                    <div class="confirm-val">{{ currentVals.name }}</div>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="8">
                    <div class="confirm-title">氏名（かな）</div>
                    <div class="confirm-val">{{ currentVals.name_kana }}</div>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="8">
                    <div class="confirm-title">会社名</div>
                    <div class="confirm-val">{{ currentVals.company_name }}</div>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="8">
                    <div class="confirm-title">メールアドレス</div>
                    <div class="confirm-val">{{ currentVals.email }}</div>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="8">
                    <div class="confirm-title">郵便番号</div>
                    <div class="confirm-val">{{ currentVals.zipcode }}</div>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="8">
                    <div class="confirm-title">住所（都道府県）</div>
                    <div class="confirm-val">{{ currentVals.name }}</div>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="8">
                    <div class="confirm-title">住所（市区町村）</div>
                    <div class="confirm-val">{{ currentVals.name }}</div>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="8">
                    <div class="confirm-title">住所</div>
                    <div class="confirm-val">{{ currentVals.name }}</div>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="8">
                    <div class="confirm-title">電話番号</div>
                    <div class="confirm-val">{{ currentVals.phone_number }}</div>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="8">
                    <div class="confirm-title">問い合わせ件名</div>
                    <div class="confirm-val">{{ currentVals.title }}</div>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" md="8">
                    <div class="confirm-title">問い合わせ内容</div>
                    <div class="confirm-val">{{ currentVals.content }}</div>
                  </v-col>
                </v-row>
                <div class="btn-container">
                  <v-btn @click="onClickBack">戻る</v-btn>
                  <v-btn @click="onClickComplete">完了</v-btn>
                </div>
              </v-container>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'confirm',
  components: {},
  computed: {
    ...mapState('contactform', ['loading', 'currentVals', 'storeResult', 'storeError']),
    ...mapGetters('contactform', ['existError']),
  },
  methods: {
    ...mapActions('contactform', ['validate', 'store']),
    onClickBack() {
      this.$router.push('/');
    },
    async onClickComplete() {
      await this.store();
      if (this.storeResult === 'success') {
        this.$router.push('/thanks');
      } else {
        alert(this.storeError);
      }
    },
  },
  mounted() {
    Object.keys(this.currentVals).forEach((col) => {
      this.validate(col);
    });
    if (this.existError) {
      this.$router.push('/');
    }
  },
};
</script>

<style scoped lang="scss">
.btn-container  {
  margin: 20px 0;
  button {
      margin: 0 20px;
  }
}
</style>
