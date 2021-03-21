<template>
  <Admin
      :auth-provider="authProvider"
      :data-provider="dataProvider"
      :i18n-provider="i18nProvider"
      :layout="Layout"
      :custom-routes="routes"
      title="Example Admin"
  >
    <template #default="{permissions}">
      <Resource name="posts" v-bind="posts" />,
      <Resource name="comments" v-bind="comments" />,
      <Resource name="users" v-if="permissions" v-bind="users" />,
      <Resource name="tags" v-bind="tags" />,
    </template>
  </Admin>
</template>

<script type="ts">
import { defineComponent } from 'vue'
import { Admin, Resource } from 'vue-admin';
import Layout from "./components/Layout.vue";
import CustomRouteNoLayout from "./components/CustomRouteNoLayout.vue";
import CustomRouteLayout from "./components/CustomRouteNoLayout.vue";
import dataProvider from './providers/dataProvider';
import i18nProvider from './providers/i18nProvider';

import tags from './resources/tags'
import users from './resources/users'
import posts from './resources/posts'
import comments from './resources/comments'

const routes = [
  { path: '/custom', component: CustomRouteNoLayout },
  { path: '/custom2', component: CustomRouteLayout },
]

const App = defineComponent({
  name: 'App',
  components: {
    Admin,
    Resource,
    Layout
  },
  data() {
    return {
      routes,
      posts,
      comments,
      users,
      tags,
      authProvider,
      dataProvider,
      i18nProvider,
    }
  }
})

export default App
</script>
