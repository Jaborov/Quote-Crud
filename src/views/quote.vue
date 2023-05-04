<template>
  <div class="d-flex justify-content-center text-center">
    <div v-if="skill" class="row g-3">
      <h1></h1> 
      <form class="was-validated" @submit.prevent="submitHandler">
  <div class="mb-3">
    <label for="quote" class="form-label">Quote</label>
    <textarea v-model="quote" maxlength="100" class="form-control" id="quote" placeholder="Text" required></textarea>
    <span class="message-counter"> {{ quote.length }} / 100</span>

    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>
  <div class="mb-3">
    <label for="author" class="form-label">Author</label>
    <input v-model="autor" class="form-control" id="author" placeholder="Text" required>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>
  <div class="mb-3">
    <label for="genre" class="form-label">Genre</label>
    <input v-model="genre" class="form-control" id="genre" placeholder="Text" required>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

    <button type="submit" class="btn btn-outline-success">Update quote</button>
    
      </form>
    </div>
     <p v-else>Quote not found</p>
</div>
</template>

<script>
export default {
  computed:{
    skill(){
      console.log(this.$route.params.id)
      return this.$store.getters.skillById(+this.$route.params.id)
    }
  },
  data: () => ({
    quote: '',
    autor: '',
    genre: '',
    date: '',
    }),
    mounted () {
    this.quote = this.skill.quote,
    this.autor = this.skill.autor
    this.genre = this.skill.genre
    },
   methods:{
     submitHandler (){
        this.$store.dispatch('updateQuote', {
          id: this.skill.id,
          quote: this.quote,
          autor: this.autor,
          genre: this.genre,
          date: new Date()
         })
        this.$router.push('/quotes')
     }
   },
}
</script>
 
<style lang="scss" scoped>

</style>