import { App } from 'vue'
// Import Swiper Vue.js components
import SwiperClass, { Pagination, Navigation } from 'Swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination'
import 'swiper/css/navigation'
SwiperClass.use([Pagination, Navigation])

export function setupSwiper(app: App) {
  app.use(VueAwesomeSwiper)
}