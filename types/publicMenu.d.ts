interface publicMenu {
  id: number;
  name?: string;
  router?: string;
  children?: Array<publicMenu>
}

export default publicMenu