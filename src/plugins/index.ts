import { App } from 'vue'
import { setupElementIcons, setupElementPlus } from "./element";
import { setupPinia } from "./pinia";
import { setupTailwindcss } from "./tailwindcss";
import { setupTable } from "./vxe-table";
import { setupSwiper } from './swiper'

export function setupPlugins(app: App) {
  setupPinia(app);
  setupTable(app);
  setupElementIcons(app);
  setupElementPlus(app);
  setupTailwindcss();
  setupSwiper(app)
}
