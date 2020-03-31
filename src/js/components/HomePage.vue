<template>
  <div>
    <section class="header-search">
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <h1>Helfen und Hilfe finden.</h1>
                    <p class="description">
                        Bei uns findest du alle Informationen zu Hilfsangeboten aus ganz Deutschland oder deiner Region und
                        das 100% kostenfrei.
                    </p>
                    <p class="description">
                        Egal ob Einkaufen in der Nachbarschaft, Unterstützung der Landwirte oder kontaktloser sozialer
                        Austausch, wir sind uns sicher, dass jeder beim Stöbern fündig wird.
                    </p>
                    <hr>
                    <div class="header-buttons">
                        <div class="button-wrapper">
                            <router-link to="/hilfe-suchen" class="btn btn-lg btn-primary">
                                <i class="fa fa-search"></i> Hilfe suchen
                            </router-link>
                            <p class="help">
                                Wir freuen uns, dir unter die Arme greifen zu können.
                            </p>
                        </div>

                        <div class="button-wrapper">
                            <router-link to="/hilfe-anbieten" class="btn btn-lg btn-secondary">
                                <i class="fa fa-hand-holding-heart"></i> Hilfe anbieten
                            </router-link>
                            <p class="help">
                                Für Helden, die ihre Hilfe anbieten wollen.
                            </p>
                        </div>

                        <div class="button-wrapper">
                            <router-link to="/initiative-eintragen" class="btn btn-lg btn-dark">
                                <i class="fa fa-heart"></i> Initiative einreichen
                            </router-link>
                            <p class="help">
                                Trage vielversprechende Initiativen ein, damit sie noch mehr Reichweite bekommen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="articles">
        <div class="container">
            <div class="row">

                <div class="col-12 col-md-6 mb-3">
                    <div class="card">
                        <img class="card-img-top" src="/assets/images/together.jpg" alt="Group of friends">
                        <div class="card-body">
                            <div class="card-title">
                                Gemeinsam Helfen
                            </div>
                            <p class="card-text">
                                In Deutschland gibt es viele wichtige und lokale Initiativen, die Menschen in Not und
                                Quarantäne helfen. Unsere Mission bei CoronaCompass ist es jene Initiativen dabei zu
                                Unterstützen möglichst viele Menschen zu erreichen.
                            </p>
                            <router-link to="/initiative-eintragen" class="btn btn-dark">
                                <i class="fa fa-heart"></i> Hilfeangebot eintragen
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 mb-3">
                    <div class="card">
                        <img class="card-img-top" src="/assets/images/wirvsvirus_teaser.jpg"
                            alt="Group of friends">
                        <div class="card-body">
                            <div class="card-title">
                                #wirvsvirus
                            </div>
                            <p class="card-text">
                                Von der Idee bis zur Umsetzung in nur 48 Stunden. Ein Team, eine Gemeinschaft - ein Ziel.
                                Corona Compass ist Teil des #wirvsvirus Hackathon der Bundesregierung.
                            </p>
                            <a href="https://wirvsvirushackathon.org/" target="_blank" class="btn btn-dark">
                                <i class="fa fa-info-circle"></i> Erfahre mehr
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
</style>
