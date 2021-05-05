import Vue from "vue";
import Router from "vue-router";

const Home = () => import("@/components/Home");
const Menu = () => import("@/components/Menu");

const Contacts = () => import("@/components/contacts/Contacts");
const Contact = () => import("@/components/contacts/Contact");

const Appels = () => import("@/components/Appels/Appels");
const AppelsActive = () => import("@/components/Appels/AppelsActive");
const AppelsNumber = () => import("@/components/Appels/AppelsNumber");

const TwitterSpashScreen = () =>
  import("@/components/twitter/TwitterSpashScreen");
const TwitterScreen = () => import("@/components/twitter/TwitterScreen");

const Parametre = () => import("@/components/parametre/Parametre");
const Bank = () => import("@/components/Bank/Bank");

const Photo = () => import("@/components/Photo/Photo");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/menu",
      name: "menu",
      component: Menu
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    },
    {
      path: "/contact/:id/:number?",
      name: "contacts.view",
      component: Contact
    },
    {
      path: "/bank",
      name: "bank",
      component: Bank
    },
    {
      path: "/photo",
      name: "photo",
      component: Photo
    },
    {
      path: "/paramtre",
      name: "parametre",
      component: Parametre
    },
    {
      path: "/appels",
      name: "appels",
      component: Appels
    },
    {
      path: "/appelsactive",
      name: "appels.active",
      component: AppelsActive
    },
    {
      path: "/appelsNumber",
      name: "appels.number",
      component: AppelsNumber
    },
    {
      path: "/twitter/splash",
      name: "twitter.splash",
      component: TwitterSpashScreen
    },
    {
      path: "/twitter/view",
      name: "twitter.screen",
      component: TwitterScreen
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  return onResolve || onReject
    ? originalPush.call(this, location, onResolve, onReject)
    : originalPush.call(this, location).catch(err => {
        if (Router.isNavigationFailure(err)) {
          console.log("Navigation Failure");
          return;
        }
        return Promise.reject(err);
      });
};
