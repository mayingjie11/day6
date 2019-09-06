<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">11111</div>
                <div class="swiper-slide">22222</div>
                <div class="swiper-slide">33333</div>
                <div class="swiper-slide">44444</div>
                <div class="swiper-slide">55555</div>
            </div>
        </div>
        <div>
            <div class="listitem" v-for="(item,index) in list" :key="index">{{item.name}}</div>
        </div>
    </div>
</template>

<script>

import Swiper from 'swiper/dist/js/swiper.js'
    export default {
        created(){
            this.$nextTick(()=>{
                 new Swiper('.swiper-container')
            })
            
        },
        data(){
            return {
                list:[
                    {
                        name:'马英杰'
                    },
                     {
                        name:'马英杰'
                    },
                     {
                        name:'马英杰'
                    },
                     {
                        name:'马英杰'
                    },
                     {
                        name:'马英杰'
                    },
                     {
                        name:'马英杰'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.swiper-container{
    width: 100%;
    height: 200px;
    .swiper-wrapper,.swiper-slide{
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 200px;
        font-size-adjust: 50px;
        background: pink;
    }
}
.listitem{
    width: 100%;
    height: 100px;
    border-top: 1px solid #cccccc;
    text-align: center;
    line-height: 100px;
}
</style>