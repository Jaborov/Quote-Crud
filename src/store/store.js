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
    deleteQuote(state, skill){
      const index = state.skills.findIndex(item => item.id === skill.id)
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
    deleteQuote({commit}, skill){
      commit('deleteQuote', skill)
    },
  },
  getters :{
    skills: s => s.skills,
    skillById: s => id => s.skills.find(t => t.id === id)
  },
})
