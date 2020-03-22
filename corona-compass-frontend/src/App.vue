<template>
  <div id="app">
    <img class="header-logo" src="./assets/logo.svg" alt="logo">
    <router-view />
    <img class="footer-logo" src="./assets/logo.svg" alt="logo">
    <div class="linklist">
      <hr>
      <router-link to="/">Start</router-link>
      <router-link to="/initiatives">Initiativen</router-link>
      <a href="https://airtable.com/shrqPlmiNVJ3kDLaq">Initiative einreichen</a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f6f6f6;
    padding: 12px;
    box-sizing: border-box;
  }

  #h1, h2, h3, h4, h5, h6 {
    color: #110133;
  }

  .header-logo{
    max-width: 300px;
    margin: 32px;
  }

  .footer-logo{
    max-width: 200px;
  }

  .nav-link{
    padding: 15px;
  }

  .linklist {
    padding: 16px 64px;
    text-align: left;
  }

  .linklist a{
    text-decoration: none;
    color: gray;
    padding: 32px;
  }

</style>
