<template>
    
  <h1 class="text-primary text-center">LIST</h1>
  <form type="form" class="d-flex w-50 p-3" role="search">
    <input
      @input="searchText()"
      v-model="QuerySearch"
      class="form-control me-2 border border-primary-subtle"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
  </form>
  <hr />
  <table type="table" class="table table-hover align-middle" v-if="skills.length">
    <thead class="table-dark table-striped">
      <tr>
        <th>№</th>
        <th>Title</th>
        <th>Author</th>
        <th>Genre</th>
        <th>Date</th>
        <th>Active</th>
      </tr>
    </thead>
    <tbody class="">
      <tr v-for="(skill, idx) of skills" :key="skill.id">
        <td @click="modalShow(skill.id)">{{ idx + 1 }}</td>
        <td class="wid" @click="modalShow(skill.id)">
          <div class="text">{{ skill.Quote }}</div>
        </td>
        <td @click="modalShow(skill.id)">{{ skill.Autor }}</td>
        <td @click="modalShow(skill.id)">{{ skill.Genre }}</td>
        <td @click="modalShow(skill.id)">{{ new Date(skill.Date).toLocaleString() }}</td>
        <div class="d-flex justify-content-evenly">
          <v-ModalQuote :id="skill.id" 
        />
            <button
              type="button"
              data-bs-toggle="modal"
              class="btn btn-danger"
              :data-bs-target="`#deleteModal${skill.id}`" 
              
            >
              Delete
            </button>
          </div>
            <div
            class="modal"
            :id="`deleteModal${skill.id}`"
            tabindex="-1"
            aria-labelledby="deleteModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Delete quote - {{ skill.id }}</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <p>Are you sure you want delete?</p>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    data-bs-dismiss="modal"
                    type="button"
                    class="btn btn-primary"
                    @click="hundleDelete(skill.id)"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          </tr>
    </tbody>
          
  </table>
  <p v-else>No quote</p>
</template>

<script>
import debounce from "lodash.debounce"
import vModalQuote from "./ModalQuote.vue"

export default {
  components:{
      vModalQuote
  },
  data() {
    return {
      QuerySearch: "",
      debounce: null,
      skills: [],
    };
  },
  
  mounted() {
    this.skills = this.$store.getters.skills;
  },

  methods: {
    hundleDelete(id) {
      console.log(id);
      this.$store.dispatch("deleteQuote", id);
    },
      modalShow(id){
        this.$router.push({name: 'modal', params:{id}})
      },
      editQuote (id) {
          this.$router.push({ name: 'quote', params: { id } })
      }, 
      searchText: debounce(function() {
        this.skills = this.$store.getters.skills.filter((item) =>
          String(item.Quote)
            .toLowerCase()
            .includes(this.QuerySearch.toLowerCase()),
            console.log(this.QuerySearch)
        );
      }, 500)
   
  },
};
</script>

<style lang="scss" scoped>
.wid {
  max-width: 200px;
}
.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
