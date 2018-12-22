<template>
    <Page actionBarHidden="true">
        <!-- <ActionBar title="Tic Tac Toe" hidden/> -->
        <Board></Board>
    </Page>
</template>

<script>
import Board from './Board/Board.vue'
  export default {
    components:{
        Board
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
