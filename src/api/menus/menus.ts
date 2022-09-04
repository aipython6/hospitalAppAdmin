import { MenuModel } from '@/models/menus/menus'
import { http } from "@/utils/http/http"

export type MenuType = {
  id: number;
  name: string;
  router: string;
  children: []
}

enum API {
  FETCH_MENU = "/website/menus/menus"
}

/*
@description 获取官网的一二三级的menu菜单
*/ 
export const fetchMenu = () => {
  return new Promise<MenuModel<MenuType[]>> (async (resolve, reject) => {
    try {
      const res = await http.get<{}, MenuModel<MenuType[]>>(API.FETCH_MENU)
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}
