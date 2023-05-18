<template>
  <div v-if="skill">
    <div class="container">
  <div class="row justify-content-start">
    <div class="col-4 fs-3">
      {{ skill.Genre }}
    </div>
  </div>
    <div class="row justify-content-center">
      <div class="col-4 fs-1">
      {{skill.Quote}}
    </div>
    </div>
    <div class="row justify-content-end">
      <div class="col-4 fs-4">
      {{ skill.Autor }}
    </div>
    </div>
</div>
  </div>
</template>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;1,700&family=Nunito+Sans:ital,wght@0,400;0,700;1,600&family=Playfair+Display:wght@700&family=Poppins:wght@500;700&display=swap');
<script>

export default {
computed: {
  skill() {
      return this.$store.getters.skillById(+this.$route.params.id);
    },
}


}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Marck+Script&family=Nunito+Sans:ital,wght@0,400;0,700;1,600&family=Pinyon+Script&family=Playfair+Display:wght@700&display=swap');.container {
  font-family: 'Marck Script', cursive;



}
</style>