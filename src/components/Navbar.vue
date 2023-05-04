<template>
  <nav class="navbar navbar-expand-lg bg-dark w-auto p-3 fs-2 " data-bs-theme="dark">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand fs-2">Create</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <router-link to="/quotes"  active-class="active" class="nav-link">List</router-link>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>