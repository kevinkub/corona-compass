<template>
  <div class="content">
    <div class="header-image"></div>
    <div class="input-group">
      <input id="inputZip" name="inputZip" type="text" placeholder="Wo befindest du dich?" />
      <router-link to="/initiatives" tag="button" id="helpee-button">Hilfe Suchen</router-link>
      <router-link to="/initiatives" tag="button" id="helper-button">Hilfe Anbieten</router-link>
    </div>
    <div class="results-box">
      <div class="filters">
        <div class="text-gray">Filtern</div>
        <div class="reset">Zurücksetzen...</div>
        <h6>Kategorien</h6>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="customCheck1" />
          <label class="custom-control-label" for="customCheck1">Kategorie 1</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="customCheck2" />
          <label class="custom-control-label" for="customCheck2">Kategorie 2</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="customCheck3" />
          <label class="custom-control-label" for="customCheck3">Kategorie 3</label>
        </div>
      </div>
      <div class="results">
        <h3>Hier Bekommst Du Hilfe</h3>
        <InitiativesList></InitiativesList>
      </div>
    </div>
  </div>
</template>

<script>
import InitiativesList from "./InitiativesList";
export default {
  components: { InitiativesList }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  max-width: 700px;
  margin: 0 auto;
}

h3 {
  color: #110133;
  text-align: left;
}

.content h2 {
  text-align: left;
  color: #110133;
}

.input-group {
  border-radius: 10px;
  margin: -28px auto 22px auto;
  z-index: 2;
  max-width: 500px;
  background-color: #f6f6f6;
  display: flex;
  padding: 6px;
}

.input-group input,
.input-group button {
  margin: 6px;
}

.input-group input {
  display: inline-block;
  flex-basis: 1;
  border-radius: 5px;
  border: none;
  flex-grow: 1;
  box-sizing: border-box;
  box-shadow: 1px 1px 10px gray;
  padding-left: 14px;
}

.input-group button {
  padding: 8px;
  border: none;
  color: white;
  border-radius: 5px;
  flex-basis: 1;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
}

.header-image {
  background-image: url("../assets/banner-city_landing_page.png");
  width: 100%;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  color: white;
  z-index: 1;
}

#helpee-button {
  background-color: #71a95a;
}

#helper-button {
  background-color: #110133;
}

.results-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}

.results {
  display: flex;
  flex-direction: column;
  flex-basis: 3;
  flex-grow: 1;
}

.filters {
  margin-right: 12px;
  padding: 12px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-basis: 1;
  text-align: left;
  box-sizing: border-box;
}

.filters .text-gray {
  color: gray;
  font-weight: bold;
  margin-bottom: 5px;
  display: inline;
}

.filters .reset {
  color: #71a95a;
  text-decoration: underline;
  display: inline;
  cursor: pointer;
}

.filters h6{
  font-weight: bold;
  text-align: left;
  color: rgba(0, 0, 0, .7);
  margin-bottom: 0;
}
</style>
