import axios from 'axios';

export default {

   data() {
       return {
         list:[]
       }
   },
   methods:{
     getData(){
        //请求数据
        //"=>"箭头函数
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        axios.get(api).then((response)=>{
          //请求的数据放到list里面
          this.list=response.data.result;
        }).catch((err)=>{
          console.log(err);
        })
      }
   },
   mounted(){/* 生命周期函数 */
     this.getData();
   }
}
