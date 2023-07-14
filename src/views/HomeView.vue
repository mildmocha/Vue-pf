<template>
  <v-container class="my-16">
    <v-row class="pt-16">
      <v-col cols='12' md="6">
        <h2 class="text-h4 intro">Welcome to my <br> Portfolio</h2>
        <p class="text-grey py-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est consectetur animi, explicabo rerum possimus beatae molestiae, velit qui quisquam numquam, aliquid reprehenderit. Quidem veniam amet ab aspernatur voluptatem? Nihil, quasi.</p>

        <v-btn 
          color="light-green" 
          rounded class="mr-10" 
          @click="$router.push('/about')"
          >About Me</v-btn>
        

        <v-btn color="indigo" rounded @click="$router.push('/portfolio')">
          <v-icon start icon="mdi-play-circle"></v-icon>Portfolio
        </v-btn>
      </v-col>
      <v-col md="6">
        <img class="mainImg" width="100%" src="@/assets/main.jpg" alt="">
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

</script>

<style scoped>
.mainImg { width:100% }
h2.intro { 
  font-family: cursive !important;
  font-weight: bold;
}
</style>