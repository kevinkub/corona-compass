import Home from './components/Home.vue'
import InitiativeDetails from  './components/InitiativeDetails.vue'
import InitiativesOverview from  './components/InitiativesOverview.vue'
import Imprint from './components/Imprint'
import PrivacyPolicy from './components/PrivacyPolicy'

const routes = [
    {path: '/', component: Home},
    {path: '/initiative', component: InitiativeDetails},
    {path: '/initiatives', component: InitiativesOverview },
    {path: '/imprint', component: Imprint},
    {path: '/privacypolicy', component: PrivacyPolicy}
];

export default routes;