<template>
  <div class="header">
    <div class="header-image">
      <h1>Helfen und Hilfe finden.</h1>
    </div>
    <div class="input-holder">
      <div class="fake-input">
        <label for="zip"><i class="fas fa-search"></i></label>
        <input id="zip" name="zip" v-model="zip" type="text" placeholder="Postleitzahl für lokale Infos." />
        <div class="toggle">
          <input type="checkbox" name="needsHelp" :checked="needsHelp" />
          <div class="helpee" v-on:click="needsHelp = true; $router.push({path: 'initiatives', query: { zip: zip, needsHelp: needsHelp }})"><span>Hilfe suchen</span></div>
          <div class="helper" v-on:click="needsHelp = false; $router.push({path: 'initiatives', query: { zip: zip, needsHelp: needsHelp }})"><span>Hilfe anbieten</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InitiativePreview",
  data: () => { 
      return {
      needsHelp: true,
      zip: '',
    };
  }
};
</script>

<style scoped>
.header-image {
    background-image: url("../assets/banner-city_landing_page.png");
    width: 100%;
    height: 250px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    color: white;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-image h1 {
    text-align: center;
}

.input-holder {
    border-radius: 10px;
    margin: -28px 50px 22px 50px;
    z-index: 2;
    background-color: #f6f6f6;
    display: flex;
    padding: 10px;
}

.fake-input {
    display: inline-block;
    flex-basis: 1;
    border-radius: 10px;
    border: none;
    flex-grow: 1;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.1);
    padding: 8px;
    display: flex;
    align-items: stretch;
    height: 60px;
    width: 100%;
}

.fake-input input {
    border: none;
    outline: none;
    flex-grow: 1;
}

.fake-input i {
    color: #71a95a;
    padding-left: 10px;
    padding-right: 10px;
}

.fake-input label {
    margin: 0; 
    display: flex;
    align-items: center;
}

.toggle {
    background-color: #e9e9e9; 
    border-radius: 10px;
    padding: 4px;
    display: flex;
}

.toggle input {
    display: none;
    font-size: 18px;
}

.helper, .helpee {
    border-radius: 10px;
    background-color: #110133;
    color: white;
    font-weight: bold;
    font-size: 80%;
    padding: 0 15px;
    display: flex;
    align-items: center;
}

.helper:hover, .helpee:hover {
    cursor: pointer;
}

.toggle input:checked ~ .helper {
    background-color: transparent;
    color: #919191;
}
.toggle input:checked ~ .helpee {
    background-color: #71a95a;
    color: white;
}
.toggle input ~ .helpee {
    background-color: transparent;
    color: #919191;
}

@media (max-width: 768px) {
  .input-holder {
    margin: 10px 0 0 0;
    padding: 0;
  }
  .toggle {
    flex-basis: 100%;
  }
  .toggle .helper, .toggle .helpee {
    flex-grow: 1;
    justify-content: center;
  }
  .fake-input {
    flex-wrap: wrap;
    height: 120px;
  }
}

</style>