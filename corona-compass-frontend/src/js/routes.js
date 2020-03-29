import HomePage from './components/HomePage.vue'
import FilterPage from  './components/FilterPage.vue'
import ImprintPage from './components/ImprintPage.vue'
import PrivacyPolicyPage from './components/PrivacyPolicyPage.vue'
import InitiativeDetailsPage from './components/InitiativeDetailsPage.vue'
import NewInitiativePage from './components/NewInitiativePage.vue'

const db = require('./db.js');

const routes = [
    {path: '/', component: HomePage},
    {path: '/initiative-eintragen', component: NewInitiativePage},
    {path: '/hilfe-suchen', component: FilterPage, props: () => ({ db: db.forHelpee(), forHelpee: true })},
    {path: '/hilfe-suchen/:slug', name: 'helpeeDetail', component: InitiativeDetailsPage, props: (route) => ({ initiative: db.getOneBySlug(route.params.slug), forHelpee: true })},
    {path: '/hilfe-anbieten', component: FilterPage, props: () => ({ db: db.forHelper(), forHelper: true }) },
    {path: '/hilfe-anbieten/:slug', name: 'helperDetail', component: InitiativeDetailsPage, props: (route) => ({ initiative: db.getOneBySlug(route.params.slug), forHelper: true })},
    {path: '/impressum', component: ImprintPage },
    {path: '/privacypolicy', component: PrivacyPolicyPage }
];

export default routes;