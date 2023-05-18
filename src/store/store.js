import { createStore } from 'vuex'

export default createStore({
  state: {
    skills:JSON.parse(localStorage.getItem('skills') || '[]')
  },
  mutations: {
    createSkill(state, skill){
      state.skills.push(skill)

      localStorage.setItem('skills', JSON.stringify(state.skills))
    },
    updateQuote(state, skill){
       const index = state.skills.findIndex(t => t.id === skill.id)
       state.skills.splice(index,1,skill)

    localStorage.setItem('skills', JSON.stringify(state.skills))
    },
    showQuote(state, skill){
        const index = state.skills.findIndex(t => t.id === skill.id)
        state.skills.open(index, skill)
    },
    deleteQuote(state,  id){
      const index = state.skills.findIndex(item => item.id === id)
      state.skills.splice(index,1)

      localStorage.setItem('skills', JSON.stringify(state.skills))
    },
    

  },
  actions: {
    createSkill({commit}, skill){
      commit('createSkill', skill)
    },
    updateQuote({commit}, skill){
      commit('updateQuote', skill)
    },
      showQuote({commit}, skill){
        commit('showQuote', skill)
    },
    deleteQuote({commit}, skill){
      commit('deleteQuote', skill)
    },
  },
  getters :{
    skills: s => s.skills,
    skillById: s => id => s.skills.find(t => t.id === id)
  },
})
