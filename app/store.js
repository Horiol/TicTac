import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      currentPlayer:'X',
      stepNo:0,
      board:{
          size:3,
          squares:[],
          input_squares:[]
      },
      winner:null
  },
  actions:{

  },
  getters:{
    getStepNo: (state) => state.stepNo,
    getCurrentPlayer: (state) => state.currentPlayer,
    getWinner: (state) => state.winner,
    getBoard: (state) => state.board
  },
  mutations:{
    changePlayer(state, player){
      state.currentPlayer = player
    },
    togglePlayer(state){
      state.currentPlayer = state.currentPlayer == 'X' ? '0' : 'X'
    },
    reset(state){
      state.stepNo=0
      state.board = {
          size:3,
          squares:[],
          input_squares:[]
      }
      state.currentPlayer = state.winner ? state.winner : state.currentPlayer
      state.winner=null
    },
    setWinner(state,winner){
      state.winner=winner;
    },
    setStepNo(state, no){
      state.stepNo = no;
    }
  }
})