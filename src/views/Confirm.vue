<template>
  <div class="confirm">
    <div>
      <div>氏名（漢字）</div>
      <div>{{ currentVals.name }}</div>
    </div>
    <div>
      <div>氏名（かな）</div>
      <div>{{ currentVals.name_kana }}</div>
    </div>
    <div>
      <div>会社名</div>
      <div>{{ currentVals.company_name }}</div>
    </div>
    <div>
      <div>メールアドレス</div>
      <div>{{ currentVals.email }}</div>
    </div>
    <div>
      <div>郵便番号</div>
      <div>{{ currentVals.zipcode }}</div>
    </div>
    <div>
      <div>住所（都道府県）</div>
      <div>{{ currentVals.name }}</div>
    </div>
    <div>
      <div>住所（市区町村）</div>
      <div>{{ currentVals.name }}</div>
    </div>
    <div>
      <div>住所</div>
      <div>{{ currentVals.name }}</div>
    </div>
    <div>
      <div>電話番号</div>
      <div>{{ currentVals.phone_number }}</div>
    </div>
    <div>
      <div>問い合わせ件名</div>
      <div>{{ currentVals.title }}</div>
    </div>
    <div>
      <div>問い合わせ内容</div>
      <div>{{ currentVals.content }}</div>
    </div>
    <div class="btn-container">
      <v-btn @click="onClickBack">戻る</v-btn>
      <v-btn @click="onClickComplete">完了</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'confirm',
  components: {},
  computed: {
    ...mapState('contactform', ['currentVals']),
  },
  methods: {
    onClickBack() {
      this.$router.push('/');
    },
    onClickComplete() {
      console.log('POSTの内容');
      console.table(this.currentVals);
      this.$router.push('/thanks');
    },
  },
};
</script>

<style scoped lang="scss">
.btn-container  {
  margin: 20px;
  button {
      margin: 0 20px;
  }
}
</style>
