<template>
    <StackLayout
    @tap="addMark"
    :col="cell.yPosition"
    :row="cell.xPosition"
    :class="classOf(cell)">
        <Image 
        v-if="cell.state"
        class="state"
        :src="getImage(cell.state)">
        </Image>
    </StackLayout>
</template>

<script>
import {mapGetters} from 'vuex'
import { mapMutations } from 'vuex'

export default {
    name:'Square',
    props:['cell', 'isInput'],
    methods:{
        classOf:function(cell){
            if(this.isInput){
                return 'input-square';
            }else{
                return (cell.xPosition + cell.yPosition) % 2 == 0 ? 'light-square' : 'dark-square';
            }
        },
        addMark:function(){ 
            if(this.isInput){
                this.cell.state = 'X'
            }
        }
    }
}
</script>

<style>
StackLayout.light-square {
  background-color: #F6DDCC;
}
 
StackLayout.dark-square {
  background-color: #EDBB99;
}

StackLayout.input-square {
    background-color: rgb(149, 191, 245);
    border-width: 2px;
    border-color: black;
}
</style>
