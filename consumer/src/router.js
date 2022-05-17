import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// import EditorView from '../../workflow/src/views/EditorView/EditorView.vue';
// import PreviewView from '../../workflow/src/views/PreviewView/PreviewView.vue';
// import workflowsEditRouteConfig from './workflowsEditRoute.config';
// import PWorkflows from '@/components/pages/PWorkflows/PWorkflows.vue';
import About from "./components/About";
import Home from "./components/Home";
// import HelloWorld from "./components/HelloWorld";
import mfe3Routes from "mfe3/routes";

console.log(mfe3Routes);

const routes = [
  /* {
    path: '/workflows',
    name: 'PWorkflows',
    component: PWorkflows,
    children: [
      {
        name: 'PreviewView',
        path: 'preview/:id',
        component: PreviewView,
      },
    ],
  },
  {
    path: '/workflows/edit/:id',
    name: 'PWorkflowsEdit',
    component: EditorView,
    beforeEnter: workflowsEditRouteConfig.beforeEnter,
  }, */
  {
    path: "/about",
    name: "about",
    component: About,
    children: [
      /* {
        path: "sub-route",
        component: HelloWorld,
      }, */
      ...mfe3Routes,
      /* {
        path: 'profile2',
        component: UserProfile,
      }, */
    ],
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
