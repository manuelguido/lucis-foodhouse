<template>
  <div>
    <ViewContactTitle :text="title" />
    <div class="row justify-content-center social-links">
      <span v-for="(link, i) in socialLinks" :key="i">
        <ViewContactSocialLink :link="link" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { SocialLink } from '~/interfaces/social'

export default Vue.extend({
  name: 'ViewContactSocial',
  data() {
    return {
      title: 'Contactate con nosotros' as string,
      socialLinks: <PropOptions<SocialLink[]>>[
        {
          icon: 'fab fa-instagram',
          text: '@lucishamburguesas',
          url: 'https://www.instagram.com/lucishamburguesas/',
          color: 'instagram'
        },
        {
          icon: 'fab fa-whatsapp',
          text: '2284624049',
          url: 'https://api.whatsapp.com/send/?phone=5492284666083&text&type=phone_number&app_absent=0',
          color: 'whatsapp'
        }
      ]
    }
  }
})
</script>
