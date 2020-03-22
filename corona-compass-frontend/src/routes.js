import Home from './components/Home.vue'
import InitiativeDetails from  './components/InitiativeDetails.vue'
import InitiativesOverview from  './components/InitiativesOverview.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/initiative', component: InitiativeDetails},
    {path: '/initiatives', component: InitiativesOverview}
];

export default routes;