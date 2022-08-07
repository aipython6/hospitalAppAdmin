import { Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import autoImport from "./autoImport";
import styleImport from "./styleImport";
import { setupUnpluginIcons } from "./icon";
import { setupHtmlPlugin } from "./html";

export default function setupPlugins(isBuild: boolean, env: ImportMetaEnv) {
  const plugins: Plugin[] = [vue(), vueJsx()];

  plugins.push(setupHtmlPlugin(isBuild, env) as unknown as Plugin );
  autoImport(plugins);
  styleImport(plugins);
  setupUnpluginIcons(plugins);
  return plugins
}
