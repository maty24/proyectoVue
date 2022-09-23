<template>
  <Navbar />
  <div class="d-flex">
    <div class="col-4"><EntryList /></div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
//componente padre de la app
import { defineAsyncComponent } from "vue";
export default {
  components: {
    //es mas facil llamar un componente asi, y es con lazyload
    Navbar: defineAsyncComponent(() => import("../components//NavBar.vue")),
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
  },
};
</script>

<style></style>
