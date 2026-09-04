import { onMounted } from 'vue'

// 滚动淡入：为当前页面中所有 .fade-in 元素添加可见性观察
export function useFadeIn() {
  onMounted(() => {
    const els = document.querySelectorAll('.fade-in')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
  })
}
