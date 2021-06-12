<template>
<div>
<Nav />

<div class="container-fluid">
  <div class="row">
  <Menu />
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <router-view/>
    </main>
  </div>
</div>
</div>
</template>

<script>
import Menu from "@/components/Menu.vue"
import Nav from "@/components/Nav.vue"
import axios from "axios"
import {useRouter} from "vue-router"
import {onMounted} from "vue"
export default {
    name: "Wrapper",
    components: {
        Menu,
        Nav,

    },
    setup() {
      const router = useRouter();
        onMounted(async () => {
          const {data} = await axios.get("user")
          if (data["role"] == 1) {
            await router.push("/admin")
          }
      });
    }
}
</script>

<style scoped> 

</style>
