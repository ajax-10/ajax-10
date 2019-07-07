<template>
    <div>
        <v-header ref='header'></v-header>
        <v-content ref='content'></v-content>
        <v-footer ref='footer'></v-footer>
        <button @click='emitChild1'>ref与on触发</button>
        <button @click='emitChild2'>ref直接触发</button>
        <button @click='emitChild3'>children与on触发</button>
        <button @click='emitChild4'>children直接触发</button>
    </div>
</template>
<script>
    import vHeader from './Header';
    import vContent from './Content';
    import vFooter from './Footer';

    export default {
        components:{vHeader,vContent,vFooter},
        created(){
            console.log(this.$children) 
            //输出结果[VueComponent,VueComponent,VueComponent],此时可以通过下标获取响应组件，如获取vHeader为this.$children[0].
            // console.log(this.$refs);
            //输出结果：{header:VueComponent,content:VueComponent,footer:VueComponent},此时可以通过对象key进行获取响应组件，如vHeader组件获取为this.$refs.header 
        }
        methods:{
            emitChild1(){
                this.$refs.footer.$emit('Ajax','你好吗!');
                //打印：  你好吗
                this.$refs.footer.$emit('Ajax');
                //打印：hello world
            },
            emitChild2(){
                this.$refs.footer.childAction('你好吗!');
                //打印：  你好吗
                this.$refs.footer.childAction();
                //打印：hello world
            },
            emitChild3(){
                this.$children[2].$emit('Ajax','你好吗!');
                //打印：  你好吗
                this.$children[2].$emit('Ajax');
                //打印：hello world
            },
            emitChild4(){
                this.$children[2].childAction('你好吗!');
                //打印：  你好吗
                this.$children[2].childAction();
                //打印：hello world
            },
        }
    }
</script>