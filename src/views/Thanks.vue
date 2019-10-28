<template>
  <div class="thanks flex-middle-center">
    <div class="container">
      お問い合わせが完了しました。<br>ありがとうございました！
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'thanks',
  components: {},
  computed: {
    ...mapState('contactform', ['currentVals']),
    ...mapGetters('contactform', ['existError']),
  },
  methods: {
    ...mapActions('contactform', ['validate']),
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
.thanks {
  height: 100%;
}
.container {
  text-align: center;
}
</style>
