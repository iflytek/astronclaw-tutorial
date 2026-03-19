<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const slides = computed(() => {
  const isEn = lang.value.startsWith('en')
  return [
    {
      image: 'https://bjcdn.openstorage.cn/aicontest/2026-03-18/29c37a17-5b33-4804-90b5-85599c29e2d5.png',
      alt: 'AstronClaw Logo',
      linkText: isEn ? 'Try Cloud AstronClaw' : '体验云端 AstronClaw',
      linkUrl: 'https://agent.xfyun.cn/astron-claw',
      imageClass: 'is-astronclaw'
    },
    {
      image: 'https://loomy.xunfei.cn/images/logo_light.png',
      alt: 'Loomy Logo',
      linkText: isEn ? 'Download Loomy Desktop' : '下载 Loomy 桌面端',
      linkUrl: 'https://loomy.xunfei.cn/',
      imageClass: 'is-loomy'
    }
  ]
})

const currentSlide = ref(0)
let carouselTimer = null

function startTimer() {
  carouselTimer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
  }, 5000)
}

function goTo(index) {
  currentSlide.value = index
  clearInterval(carouselTimer)
  startTimer()
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  if (carouselTimer) clearInterval(carouselTimer)
})
</script>

<template>
  <div class="hero-carousel">
    <a
      :href="slides[currentSlide].linkUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="carousel-link"
    >
      {{ slides[currentSlide].linkText }}
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>

    <div class="carousel-stage" :class="slides[currentSlide].imageClass">
      <Transition name="carousel-fade" mode="out-in">
        <div :key="currentSlide" class="carousel-image-shell" :class="slides[currentSlide].imageClass">
          <img
            :src="slides[currentSlide].image"
            :alt="slides[currentSlide].alt"
            class="carousel-img"
            :class="slides[currentSlide].imageClass"
          />
        </div>
      </Transition>
    </div>

    <div class="carousel-dots">
      <button
        v-for="(_, i) in slides"
        :key="i"
        :class="['carousel-dot', { active: currentSlide === i }]"
        :aria-label="`Slide ${i + 1}`"
        @click="goTo(i)"
      />
    </div>
  </div>
</template>

<style scoped>
.hero-carousel {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 0 8px;
}

.carousel-link {
  position: absolute;
  top: -8px;
  right: 0;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  max-width: min(100%, 220px);
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  white-space: normal;
  text-align: right;
  line-height: 1.4;
  transition: color 0.25s;
  z-index: 1;
}

.carousel-link:hover {
  color: var(--vp-c-brand-2);
}

.carousel-stage {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 0;
  padding-top: 20px;
}

.carousel-image-shell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.carousel-image-shell.is-loomy {
  width: min(100%, 420px);
  padding: 18px 24px;
  border-radius: 28px;
  background: linear-gradient(135deg, #171717 0%, #2a2f3a 100%);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.16);
}

.carousel-img {
  max-width: 60%;
  max-height: 60%;
  object-fit: contain;
}

.carousel-img.is-loomy {
  max-width: 100%;
  max-height: 100%;
  width: min(100%, 320px);
}

.carousel-dots {
  display: flex;
  gap: 8px;
  padding-bottom: 4px;
}

.carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: var(--vp-c-divider);
  cursor: pointer;
  padding: 0;
  transition: background-color 0.25s;
}

.carousel-dot.active {
  background: var(--vp-c-brand-1);
}

.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 0.5s ease;
}

.carousel-fade-enter-from,
.carousel-fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .hero-carousel {
    position: relative;
    inset: auto;
    justify-content: flex-start;
    gap: 12px;
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .carousel-link {
    position: static;
    order: 2;
    align-self: center;
    justify-content: center;
    max-width: min(100%, 260px);
    font-size: 14px;
    text-align: center;
    line-height: 1.5;
  }

  .carousel-stage {
    order: 0;
    flex: 0 0 auto;
    padding-top: 0;
    width: 100%;
    min-height: min(60vw, 240px);
  }

  .carousel-image-shell {
    min-height: inherit;
  }

  .carousel-image-shell.is-loomy {
    width: min(100%, 340px);
    min-height: min(46vw, 180px);
    padding: 20px;
    border-radius: 24px;
  }

  .carousel-dots {
    order: 1;
    padding-bottom: 0;
  }

  .carousel-img {
    max-width: 72%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
  }

  .carousel-img.is-loomy {
    max-width: 100%;
    width: min(100%, 260px);
  }
}

@media (max-width: 480px) {
  .carousel-link {
    max-width: min(100%, 240px);
    font-size: 13px;
  }

  .carousel-stage {
    min-height: min(56vw, 220px);
  }

  .carousel-image-shell.is-loomy {
    width: min(100%, 300px);
    min-height: min(44vw, 160px);
    padding: 16px 18px;
    border-radius: 20px;
  }

  .carousel-img {
    max-width: 78%;
  }

  .carousel-img.is-loomy {
    width: min(100%, 220px);
  }
}
</style>
