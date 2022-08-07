import { RouteLocationNormalized, Router } from "vue-router";
import NProgress from "@/utils/progress";

class Guard {
  constructor(private router: Router) {}

  public run() {
    this.router.beforeEach(this.beforeEach.bind(this));
    this.router.afterEach(this.afterEach.bind(this));
  }

  private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    NProgress.start();
  }

  private async afterEach() {
    NProgress.done();
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
