<template>
  <a :class="classList" :target="target" :href="link.url">
    <div :class="innerclassList">
      <i :class="iconClassList"></i>
      {{ link.text }}
    </div>
  </a>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { SocialLink } from '~/interfaces/social'

export default Vue.extend({
  name: 'ViewContactSocialLink',
  props: {
    link: {
      type: Object,
      required: true
    } as PropOptions<SocialLink>,
    target: {
      type: String,
      default: '_blank'
    }
  },
  computed: {
    iconClassList(): string {
      return `${this.link.icon} mr-3 white-d`
    },
    classList(): Array<string> {
      const base: string =
        'social-item h4-responsive ls-4 fw-300 mx-3 mb-4 mb-xl-0'
      const flex: string = 'd-flex justify-content-center align-items-center'
      return [base, flex, this.link.color]
    },
    innerclassList(): Array<string> {
      const base: string = 'inner bebas h4-responsive ls-4 fw-300 py-2 px-4'
      const flex: string = 'd-flex justify-content-center align-items-center'
      return [base, flex, this.link.color]
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_glassmorphism.scss';

.social-item {
  @include glassBlackDark;
  display: block;
}

.social-item:hover {
  opacity: 0.8;
}

.social-item:active {
  opacity: 0.5;
}

.social-item,
.inner {
  border-radius: 16px;
}

.inner {
  display: flex;
  justify-content: space-between;
  border: 1px solid;
}

.social-item.instagram .inner {
  background: rgba(228, 64, 95, 0.025);
  border-color: #e4405f;
  color: #e4405f;
}

.social-item.whatsapp .inner {
  background: rgba(37, 211, 102, 0.025);
  border-color: rgb(37, 211, 102);
  color: rgb(37, 211, 102);
}
</style>
