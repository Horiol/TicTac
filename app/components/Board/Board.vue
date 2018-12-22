<template>
    <StackLayout 
    class="content">
        <StackLayout 
        class="top-panel"
        orientation="horizontal">
            <Button 
            class="restart" 
            text="Restart">
            </Button>
            <StackLayout class="score-board">
                <StackLayout class="circle-score" orientation="horizontal">
                    <Label 
                    class="circle-score" 
                    :text="circleScore">
                    </Label>
                    <Image 
                    class="circle-thumb"
                    src="~/img/circle-thumb.png">
                    </Image>
                </StackLayout>
                <StackLayout class="cross-score" orientation="horizontal">
                    <Label
                    class="cross-score"
                    :text="crossScore">
                    </Label>
                    <Image 
                    class="cross-thumb"
                    src="~/img/cross-thumb.png">
                    </Image>
                </StackLayout>
            </StackLayout>
        </StackLayout>
        <StackLayout 
            class="game-panel" 
            orientation="horizontal">
            <Label 
            class="next-to-play" 
            text="Next to play "></Label>
        </StackLayout>
        <GridLayout
        :columns="side"
        :rows="side">
            <Square v-for="(square, index) in squares" :isInput="false" :key="index" :cell="square"></Square>
            <Square v-for="(square, index) in input_squares" :isInput="true" :key="index" :cell="square"></Square>
        </GridLayout>
    </StackLayout>
</template>

<script>
import Square from './Square.vue'
export default {
    name:'Board',
    components:{
        Square
    },
    data () {
        return {
            size:3,
            squares:[],
            input_squares:[],
            circleScore:0,
            crossScore:0
        }
    },
    mounted:function () {
        this.squares = [];
        this.input_squares = [];
        for (let x = 0; x < this.size+2; x++) {
            for (let y = 0; y < this.size+2; y++) {
                var square = {
                    yPosition: y,
                    xPosition: x,
                    state:null
                }
                if(x === 0 || x === this.size+1 || y === 0 || y === this.size+1){
                    if(x !== y && !((x===0 && y===this.size+1) || (y===0 && x===this.size+1))){ // Avoid corners
                        this.input_squares.push(square);
                    }
                }else{
                    this.squares.push(square);
                }
            }
        }
    },
    methods:{
        getImage:function(state){
            return "~/img/circle-thumb.png"
        }
    },
    computed:{
        side:function(){
            var specs = [];
            for (let i = 0; i < this.size+2; i++) {
                specs.push('*');
            }
            return specs.join(',');
        }
    }
}
</script>


<style>
StackLayout.content {
  horizontal-align: center;
}

StackLayout.top-panel {
  margin-top: 10;
  margin-right: 10;
  margin-left: 10;
  height: 50;
}

StackLayout.circle-score,
StackLayout.cross-score {
  horizontal-align: right;
}

Label.circle-score,
Label.cross-score {
  font-size: 17;
}

Label.next-to-play {
  margin-right: 10;
  vertical-align: middle;
  font-size: 22;
}

Image.cross-thumb,
Image.circle-thumb {
  height: 17;
  margin-left: 10;
}

StackLayout.score-board {
  width: 100%;
}

StackLayout.game-panel {
  horizontal-align: center;
  vertical-align: middle;
  height: 50;
  margin-bottom: 10;
}

Image.circle-thumb,
Image.cross-thumb,
Button.restart,
Label.next-to-play,
Label.circle-score,
Label.cross-score {
  color: #D35400;
}

StackLayout.light-square,
StackLayout.dark-square {
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
</style>

