import HomePage from './components/HomePage.vue'
import FilterPage from './components/FilterPage.vue'
import ImprintPage from './components/ImprintPage.vue'
import PrivacyPolicyPage from './components/PrivacyPolicyPage.vue'
import InitiativeDetailsPage from './components/InitiativeDetailsPage.vue'
import NewInitiativePage from './components/NewInitiativePage.vue'
import VueRouter from 'vue-router'

const db = require('./db.js');

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/initiative-eintragen',
        component: NewInitiativePage,
        meta: {
            title: 'Vielversprechende Initiativen eintragen'
        }
    },
    {
        path: '/hilfe-suchen',
        component: FilterPage,
        props: () => ({ db: db.forHelpee(), forHelpee: true }),
        meta: {
            title: 'Hilfe finden'
        }
    },
    {
        path: '/hilfe-suchen/:slug',
        name: 'helpeeDetail',
        component: InitiativeDetailsPage,
        props: (route) => ({ initiative: db.getOneBySlug(route.params.slug), forHelpee: true }),
        meta: {
            title: 'Hilfe finden'
        }
    },
    {
        path: '/hilfe-anbieten',
        component: FilterPage,
        props: () => ({ db: db.forHelper(), forHelper: true }),
        meta: {
            title: 'Hilfe anbieten'
        }
    },
    {
        path: '/hilfe-anbieten/:slug',
        name: 'helperDetail',
        component: InitiativeDetailsPage,
        props: (route) => ({ initiative: db.getOneBySlug(route.params.slug), forHelper: true }),
        meta: {
            title: 'Hilfe anbieten'
        }
    },
    {
        path: '/impressum',
        component: ImprintPage,
        meta: {
            title: 'Impressum'
        }
    },
    {
        path: '/privacypolicy',
        component: PrivacyPolicyPage,
        meta: {
            title: 'Datenschutz'
        }
    }
];

export default new VueRouter({
    routes: routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (to && to.hash) {
            return { selector: to.hash }
        }
        
        if (savedPosition) {
            return { x: (savedPosition.x || 0), y: (savedPosition.y || 0) }
        }
        
        return { x: 0, y: 0 }
    }
});
