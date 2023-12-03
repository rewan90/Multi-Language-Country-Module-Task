import { createRouter, createWebHistory } from 'vue-router'
import AddCountry from '../views/AddCountry.vue'
import EditCountry from '../views/EditCountry.vue'
import CountryDetails from '../views/CountryDetails.vue'
import CountryListPage from '../views/CountryListPage.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [

  {
    path: '/',
    name: 'CountryListPage',
    component: CountryListPage
  },
  {
    path: '/view/AddCountry',
    name: 'AddCountry',
    component: AddCountry
  },
   {
    path: '/view/EditCountry/:CountryId',
    name: 'EditCountry',
    component: EditCountry
  },
  {
    path: '/view/:CountryId',
    name: 'CountryDetails',
    component: CountryDetails
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]
    
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
