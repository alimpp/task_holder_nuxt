import { UserStoreModule } from "~/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  // console.log(UserStoreModule.isAuthenticated.value);
  //   if (!UserStoreModule.isAuthenticated.value) {
  //     return navigateTo("/login");
  //   }
});
