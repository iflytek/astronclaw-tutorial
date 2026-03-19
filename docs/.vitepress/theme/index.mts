import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick, h } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import LearningAssistant from './components/LearningAssistant.vue'
import CustomToggles from './components/CustomToggles.vue'
import HeroCarousel from './components/HeroCarousel.vue'
import './index.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(LearningAssistant),
      'nav-bar-content-after': () => h(CustomToggles),
      'nav-screen-content-after': () => h(CustomToggles),
      'home-hero-image': () => h(HeroCarousel)
    })
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      // 默认给 .vp-doc 下的所有图片添加缩放
      mediumZoom('.vp-doc img', { background: 'var(--vp-c-bg)' })
    }

    onMounted(() => {
      initZoom()
    })

    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}
