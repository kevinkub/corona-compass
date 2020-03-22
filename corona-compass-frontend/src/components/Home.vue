<template>
  <div class="content">
    <div class="header-image">
      <h1>Finde und biete Hilfe wo diese gebraucht wird</h1>
    </div>
    <div class="input-group">
      <input id="inputZip" name="inputZip" type="text" placeholder="Wo befindest du dich?" />
      <router-link to="/initiatives" tag="button" id="helpee-button">Hilfe Suchen</router-link>
      <router-link to="/initiatives" tag="button" id="helper-button">Hilfe Anbieten</router-link>
    </div>
    <h2>Categories browsing</h2>
    <div class="categories">
      <div class="category" v-for="category in categories" :key="category.name">
        <!--TODO: Add category.imageUrl to data and display here-->
        <img class="category-image" src="../assets/logo.png" alt />
        <div class="category-name">{{ category.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    fetchCategories() {
      fetch("https://coronacompass.azurewebsites.net/api/GetInitiatives")
        .then(stream => stream.json())
        .then(data => (this.categories = data.filters.categories))
        .catch(error => console.error(error));
    }
  },
  data() {
    return {
      categories: []
    };
  },
  mounted() {
    this.fetchCategories();
  }
};
</script>

<style scoped>
.content {
  max-width: 700px;
  margin: 0 auto;
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

#helpee-button {
  background-color: #71a95a;
}

#helper-button {
  background-color: #110133;
}

#logo {
  width: 100%;
}

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
}

.categories {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.category {
  background-color: white;
  margin: 32px;
}

.category-image {
  width: 96px;
  height: 96px;
  margin: 4px;
}

.category-name {
  width: 100%;
  text-align: center;
}

.header-image h1 {
  padding: 64px;
}
</style>
