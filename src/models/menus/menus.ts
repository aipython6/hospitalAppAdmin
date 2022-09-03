export interface MenuModel {
  id: number,
  name: string,
  router: string,
  children: IFirstMenu[]
}

interface IFirstMenu {
  id: number,
  pid: number,
  name: string,
  router: string,
  children: ISecondMenu[]
}

interface ISecondMenu {
  id: number,
  pid: number,
  name: string,
  router: string,
}