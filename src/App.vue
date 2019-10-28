<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<style lang="scss">
@import "assets/sass/global.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.v-card {
  padding: 20px;
}

.block-label {
  width: 100%;
  display: block;
  position: relative;
  margin: 15px auto;
  label {
    margin: 0 10px;
  }
}
label {
  font-size: 1em;
}

.label-txt {
  position: absolute;
  top: -1em;
  padding: 2px;
  transition: ease .3s;
}
.label-txt,
.confirm-title {
  font-family: sans-serif;
  font-size: .8em;
  letter-spacing: 1px;
  color: #b1b1b1;
}

.has-error {
  .error-area {
    font-size: .8em;
  }
  .error-area,
  .label-txt {
    color: #d16376;
  }
  .line-box {
    background: #d16376;
  }
}
</style>
