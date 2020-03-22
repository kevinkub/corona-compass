<template>
  <div class="content">
    <SearchHeader />

    <div class="card-container">
      <div class="card" style="width: 18rem;">
        <div class="card-img-top" id="help-together" />
        <div class="card-body">
          <h4 class="card-title">Gemeinsam helfen</h4>
          <p
            class="card-text"
          >In Deutschland gibt es viele wichtige und lokale Initiativen, um Menschen in Not und Quarantäne zu helfen. Wir, CoronaCompass, wollen jeder Initiative dieselbe Chance geben, gefunden zu werden.</p>
          <a href="https://airtable.com/shrqPlmiNVJ3kDLaq" class="btn btn-primary">Initiative einreichen</a>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
        <div class="card-img-top" id="hackathon" />
        <div class="card-body">
          <h4 class="card-title">#wirvsvirus</h4>
          <p
            class="card-text"
          >Von der Idee bis zur Umsetzung in nur 48 Stunden. Ein Team, eine Gemeinschaft - ein Ziel. CoronaCompass ist Teil des #wirvsvirus Hackathon der Bundesregierung.</p>
          <a href="https://wirvsvirushackathon.org" class="btn btn-secondary">Mehr erfahren</a>
        </div>
      </div>
    </div>

    <h4>Wer wir sind</h4>
    <p>
      Hi, wir sind CoronaCompass. In diesen schwierigen Zeiten, in der das Virus unserer Gesellschaft vieles abverlangt,
      möchten wir dir helfen, Alternativen für sonst alltägliche Dinge zu finden.
    </p>
    <p>Bei uns findest du alle Informationen zu Hilfsangeboten aus ganz Deutschland oder deiner Region und das 100% kostenfrei.</p>
    <p>
      Egal ob Einkaufen in der Nachbarschaft, Unterstützung der Landwirte oder kontaktloser sozialer Austausch,
      wir sind uns sicher, dass jeder beim Stöbern fündig wird.
    </p>
    <h4>Stöbere durch unsere Angebote</h4>
    <div class="categories">
      <div class="category" v-for="category in categories" :key="category.title" v-on:click="$router.push({path: 'initiatives', query: { category: category.title }})">
        <div class="category-content">
          <div class="category-icon">
            <i :class="'fas fa-2x fa-' + category.icon"></i>
          </div>
          <div class="category-name">{{ category.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchHeader from "./SearchHeader";

export default {
  name: "Home",
  components: { SearchHeader },
  data() {
    return {
      categories: [
        { title: "Arbeit", icon: "briefcase" },
        { title: "Bestellen und Liefern", icon: "shopping-basket" },
        { title: "Bildung", icon: "book" },
        { title: "Fitness und Wohlbefinden", icon: "heartbeat" },
        { title: "Gewerbe und Selbstständige", icon: "store-alt" },
        { title: "Medizinische Hilfe", icon: "user-md" },
        { title: "Nachbarschaft", icon: "handshake" },
        { title: "Unterhaltung und Soziales", icon: "tv" },
        { title: "Informationen", icon: "info-circle" }
      ]
    };
  }
};
</script>

<style scoped>
.content {
  margin: 0 auto;
  text-align: left;
}

.content h4 {
  text-align: left;
  font-weight: bold;
  color: #110133;
  margin: 50px 0 30px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: -5px;
  margin-top: 20px;
}

h4.card-title {
  margin: 6px 0;
}

.card-container .card {
  flex-grow: 1;
  box-sizing: border-box;
  margin: 5px;
  border: none;
}

.card div.card-img-top {
  background-color: #aeaeae;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 250px;
}

#hackathon {
  background-image: url('../assets/hackathon.png');
}

#help-together {
  background-size: cover;
  background-image: url('../assets/together.jpg');
}

#logo {
  width: 100%;
}

.categories {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -15px;
  max-width: 100vw;
}

.category {
  flex-basis: 33.333%;
  box-sizing: border-box;
  padding: 15px;
  height: 120px;
  display: flex;
}

.category-content {
  background-color: white;
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  transition: box-shadow 0.3s;
}

.category-content a {
  text-decoration: none;
  height: 100%;
  width: 100%;
}

.category-content:hover {
  box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.category-icon {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
}

.category .category-icon i.fas {
  color: #71a95a;
  text-align: center;
}

.category-name {
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #434343;
  flex-grow: 0;
}

.btn-primary, .btn-secondary {
  font-weight: bold;
  font-size: 80%;
}

.btn-primary {
  border: 0;
  background-color: #71a95a;
}
.btn-secondary {
  border: 0;
  background-color: #919191;
}

@media (max-width: 1200px) {
  .category {
    flex-basis: 33.3333%;
  }
}

@media (max-width: 768px) {
  .category {
    flex-basis: 50%;
  }
}
</style>
