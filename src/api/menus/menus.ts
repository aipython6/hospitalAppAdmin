import { MenuModel } from '@/models/menus'
import { http } from "@/utils/http"
enum API {
  FETCH_MENU = "/website/menus/menus"
}

/*
@description 获取官网的一二三级的menu菜单
*/ 
export const fetchMenu = () => {
  return new Promise<MenuModel> (async (resolve, reject) => {
    try {
      const res = await http.get<{}, MenuModel>(API.FETCH_MENU)
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}
