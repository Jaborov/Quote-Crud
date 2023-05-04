<template>
  <div class="d-flex justify-content-center text-center">
    <div class="row g-3">
      <h1>Create asdasdasdasdasdas</h1>
      <form class="was-validated" @submit.prevent="submitHandler">
  <div class="mb-3">
    <label for="description" class="form-label">Quote</label>
    <textarea v-model="description" maxlength="100" class="form-control" id="description" placeholder="Text" required></textarea>
    <span class="message-counter"> {{ description.length }} / 100</span>

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

    <button type="submit" class="btn btn-outline-success">Create quote</button>
    
      </form>
    </div>
  </div>
</template>

<!-- <div class="modal" id="modalDelete" aria-labelledby="modalDeleteLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div> -->

<script>
export default {
  name: "Create",
  data: () => ({
    description: '',
    autor: '',
    genre: '',
    date: '',
    }),
    mounted () {
    
    },
   methods:{
     submitHandler (){
        const skill = {
          autor: this.autor,
          quote: this.description,
          genre: this.genre,
          id: Date.now(),
          date: new Date()
        }
        this.$store.dispatch('createSkill', skill)
        this.$router.push('/quotes')
     }
   },
};
</script>
