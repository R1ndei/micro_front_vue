<template>
  <Nav_vue />
  <div class="container-fluid">
    <div class="row">
      <Menu_vue />

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import Menu_vue from "@/components/Menu";
import Nav_vue from "@/components/Nav";
export default {
  name: "admin_vue",
  components: {
    Nav_vue,
    Menu_vue,
  }
}
</script>
