<template>
  <v-app-bar
    class="px-md-16"
    color="white"
    :elevation="5"
  >
    
    <v-app-bar-title>
      <router-link to="/" 
        class="title text-h5 font-weight-bold text-decoration-none">
        Vuetify <span class="d-none d-sm-inline-block">App</span>
      </router-link>
    </v-app-bar-title>
    
    <v-list class="d-flex align-center">
      <v-list-item 
        v-for="(menu,index) in menus" 
        :key="index" link>
        <router-link :to="menu.url" class="menu text-decoration-none">
          {{ menu.title }}
        </router-link>
      </v-list-item>
    </v-list>

    <div class="d-none d-md-flex align-center ps-5">
      <v-btn icon="mdi-magnify"></v-btn>
      <!-- Contact버튼(모달팝업) -->
      <v-dialog transition="dialog-top-transition" width="auto">
        <template v-slot:activator="{ props }">
          <v-btn variant="outlined" color="teal" rounded v-bind="props"
            >CONTACT</v-btn
          >
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar color="teal" title="Opening from the top"></v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn variant="text" @click="isActive.value = false"
                >Close</v-btn
              >
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </div>
  </v-app-bar>
</template>

<script setup>
  const menus = [
    { title:'Home', url:'/'},
    { title:'About Me', url:'/about'},
    { title:'Portfolio', url:'/portfolio'},
    { title:'Project', url:'/project'},
    { title:'Gallary', url:'/gallery'}
  ]
</script>

<style scoped>
  .title {
    color:#009688;
  }
  .menu {
    color:#212121
  }
  .menu:hover {
    color:#009688;
  }

  @media (max-width:600px){
    .title { font-size: 18px !important;}
    .menu { font-size: 14px}
    .v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
    padding-inline-start: 10px;
    padding-inline-end: 10px;
      }
  }
  @media (max-width:400px){
    .menu { font-size: 12px}    
    .v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
    padding-inline-start: 4px;
    padding-inline-end: 4px;
      }

  }
</style>