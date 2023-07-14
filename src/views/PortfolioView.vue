<template>
  <v-container class="my-16">
    <v-row class="pt-1 justify-center pt-16">
      <v-col cols="12" class="text-center">
        <p class="text-h4">Portfolio View</p>
        <p>Lorem ipsum dolor sit amet consectetur, </p>
      </v-col>
      <v-col cols="12">
        <div class="text-center">
          <v-chip 
            @click="activePortfolio = 'webapp'" class="mx-4" 
            :color="activePortfolio === 'webapp'? 'pink': ''"
            >Web App</v-chip>
          <v-chip 
            @click="activePortfolio = 'frontend'" class="mx-4"
            :color="activePortfolio === 'frontend'? 'pink': ''"
            >FrontEnd</v-chip>
          <v-chip 
            @click="activePortfolio = 'backend'" class="mx-4"
            :color="activePortfolio === 'backend'? 'pink': ''"
            >BackEnd</v-chip>
        </div>
      </v-col>

      <slot v-if="activePortfolio === 'webapp'">
        <v-col lg="3" v-for="web in webapp">
          <v-card class="mx-auto" >
            <v-img
              :src="web.img"
              height="200px"
              cover
            ></v-img>

            <v-card-title v-text="web.title"></v-card-title>

            <v-card-subtitle class="mb-5">
              webApp 작품들입니다
            </v-card-subtitle>
          </v-card>
        </v-col>
      </slot>

      <slot v-if="activePortfolio === 'frontend'">
        <v-col lg="3" v-for="front in frontend">
          <v-card class="mx-auto" max-width="344" >
            <v-img
              :src="front.img"
              height="200px"
              cover
            ></v-img>

            <v-card-title v-text="front.title"></v-card-title>

            <v-card-subtitle class="mb-5">
              Frontend 작품들입니다
            </v-card-subtitle>
          </v-card>
        </v-col>
      </slot>

      <slot v-if="activePortfolio === 'backend'">
        <v-col lg="3" v-for="back in backend">
          <v-card class="mx-auto" max-width="344" >
            <v-img
              :src="back.img"
              height="200px"
              cover
            ></v-img>

            <v-card-title v-text="back.title"></v-card-title>

            <v-card-subtitle class="mb-5">
              Backend 작품들입니다
            </v-card-subtitle>
          </v-card>
        </v-col>
      </slot>

    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

let activePortfolio = ref('webapp');

const webapp = [
  {title:'WebApp 1', img:'https://www.scnsoft.com/blog-pictures/web-apps/web-application-architecture-01.png'},
  {title:'WebApp 2', img:'https://www.scnsoft.com/blog-pictures/web-apps/web-application-architecture-01.png'},
  {title:'WebApp 3', img:'https://www.scnsoft.com/blog-pictures/web-apps/web-application-architecture-01.png'},
]

const frontend = [
  {title:'Frontend 1', img:'https://usabilitygeek.com/wp-content/uploads/2019/02/psychology-web-design-00-lead.jpg'},
  {title:'Frontend 2', img:'https://usabilitygeek.com/wp-content/uploads/2019/02/psychology-web-design-00-lead.jpg'},
  {title:'Frontend 3', img:'https://usabilitygeek.com/wp-content/uploads/2019/02/psychology-web-design-00-lead.jpg'},
  {title:'Frontend 4', img:'https://usabilitygeek.com/wp-content/uploads/2019/02/psychology-web-design-00-lead.jpg'},
  {title:'Frontend 5', img:'https://usabilitygeek.com/wp-content/uploads/2019/02/psychology-web-design-00-lead.jpg'}
]

const backend = [
  {title:'BackEnd 1', img:'https://media.licdn.com/dms/image/C5612AQEG0a3EQRMtHg/article-cover_image-shrink_720_1280/0/1552407669588?e=2147483647&v=beta&t=7Sbciqc4Dk8uLvqt8N_wRpjAdhM1ldJDMIpZOIhhFrA'},
  {title:'BackEnd 2', img:'https://media.licdn.com/dms/image/C5612AQEG0a3EQRMtHg/article-cover_image-shrink_720_1280/0/1552407669588?e=2147483647&v=beta&t=7Sbciqc4Dk8uLvqt8N_wRpjAdhM1ldJDMIpZOIhhFrA'},
  {title:'BackEnd 3', img:'https://media.licdn.com/dms/image/C5612AQEG0a3EQRMtHg/article-cover_image-shrink_720_1280/0/1552407669588?e=2147483647&v=beta&t=7Sbciqc4Dk8uLvqt8N_wRpjAdhM1ldJDMIpZOIhhFrA'},
  {title:'BackEnd 4', img:'https://media.licdn.com/dms/image/C5612AQEG0a3EQRMtHg/article-cover_image-shrink_720_1280/0/1552407669588?e=2147483647&v=beta&t=7Sbciqc4Dk8uLvqt8N_wRpjAdhM1ldJDMIpZOIhhFrA'},
]

</script>

<style scoped>

</style>