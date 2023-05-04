<template>
    <h1 class="text-primary text-center">LIST</h1> 
    <form class="d-flex w-50 p-3" role="search">
      <input @input="searchText()" v-model="querySearch" class="form-control me-2 border border-primary-subtle" type="search" placeholder="Search" aria-label="Search">
      </form>
    <hr>
    <table class="table table-hover align-middle table-info" v-if="skills.length" >
      <thead class="">
        <tr class="table-primary">
          <th>№</th>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Date</th>
          <th>Open</th>
        </tr>
      </thead>
      <tbody>
        <tr
        v-for="(skill, idx) of skills"
        :key="skill.id"
        >
        <td>{{ idx + 1 }}</td>
        <td class="wid"><div class="text">{{ skill.quote }}</div></td>
        <td>{{ skill.autor }}</td>
        <td>{{ skill.genre }}</td>
        <td>{{ new Date (skill.date).toLocaleString() }}</td>
        <td class="grid">
          <div class="d-flex justify-content-between">
         <router-link type:="button" class="btn btn-warning" :to="{name: 'quote', params: {id:skill.id }}">Show</router-link>
          <button type="button" data-bs-toggle="modal" class="btn btn-danger" data-bs-target="#modalDelete">Delete</button>
        </div> 
          <div class="modal" id="modalDelete" aria-labelledby="modalDeleteLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Delete quote</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Are you sure you want delete?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="hundleDelete(skill.id)" type="button" class="btn btn-primary" data-bs-dismiss="modal">Delete</button>
      </div>
    </div>
  </div>
</div>
        </td>
      </tr>
      </tbody>
    </table>
    <p v-else>No quote</p>
 
</template>

<script>
  
export default {
  data() {
    return {
     querySearch : "",
     skills:[]
    };
  },

  mounted() {
    this.skills =  this.$store.getters.skills
  },

  methods:{
    hundleDelete(skill){
      this.$store.dispatch('deleteQuote', skill)
      },
    searchText() {
      setTimeout(() => {
        this.skills = this.$store.getters.skills.filter(item => String(item.autor).toLowerCase().includes(this.querySearch.toLowerCase()))
      },500)
    }
  },

}
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