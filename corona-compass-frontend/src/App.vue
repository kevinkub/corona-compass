<template>
  <div id="app">
    <router-link to="/"><img class="header-logo" src="./assets/logo.svg" alt="logo"></router-link>
    <router-view />
    <ul class="footer-logos">
      <li><img class="footer-logo" src="./assets/logo.svg" alt="logo"></li>
      <li><a href="https://wirvsvirushackathon.org"><img src="./assets/logo_hackathon.png" alt=""></a></li>
    </ul>
    <hr>
    <div class="linklist">
      <router-link to="/">Start</router-link>
      <router-link to="/initiatives">Initiativen</router-link>
      <router-link to="/imprint">Impressum</router-link>
      <router-link to="/privacypolicy">Datenschutz</router-link>
      <a href="https://airtable.com/shrqPlmiNVJ3kDLaq">Initiative einreichen</a>
    </div>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,700i&display=swap');

  @media (min-width: 576px) {
    #app {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    #app {
      width: 640px;
    }
  }
  @media (min-width: 992px) {
    #app {
      width: 768px;
    }
  }
  @media (min-width: 1200px) {
    #app {
      width: 1024px;
    }
  }

  body, html {
    font-size: 18px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 12px;
    box-sizing: border-box;
    margin: auto;
  }

  .header-logo{
    max-width: 250px;
    margin: 32px;
  }

  .footer-logos{
    width: 100%;
    margin-top:50px;
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: baseline;
  }
  .footer-logos li {
      margin: 0 15px;
      padding: 0;
  }
  .footer-logos li img {
    max-width: 200px;
    width: 100%;
  }

  .linklist {
    text-align: left;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

    .footer-logos li {
        margin: 0 15px;
        padding: 0;
    }

    .footer-logos li img {
        max-width: 200px;
    }

    .linklist {
        text-align: left;
        display: flex;
        justify-content: space-evenly;
    }

    .linklist a {
        text-decoration: none;
        color: gray;
        padding-bottom: 32px;
    }

  .btn {
    border-radius: 10px;
  }

  .custom-checkbox {
    .custom-control-label{
      &::before {
        background-color: #919191;
        border: 0;
      }
    }

    &:checked~.custom-control-label::before {
      background-color: #71A95A;
    }
  }

</style>
