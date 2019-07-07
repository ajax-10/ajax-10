<template>
    <footer>This is footer</footer>
</template>
<script>
    export default {
        mounted(){
            this.$on('Ajax',(val)=>{
                this.childAction(val);
            });

        },
        methods:{
            childAction(val='hello HBuilder'){
                console.log(val)   //method直接定义
            }
             //此时在父组件，可以通过获取相应子组件，使用对象key值childAction对其进行调用,当前函数形参非必须
        }
    }
         //通过$on进行触发
//      export default {
//          mounted(){
//          this.$on('bridge',(val)=>{
//              this.childAction(val);
//          });
//          ///此时通过$on进行监听中间桥接函数bridge对目的方法childAction进行触发
//      },
//      methods:{
//          childAction(val='hello world'){
//              console.log(val)
//          }
//
//      }
//  }
</script>