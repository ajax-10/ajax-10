/**
功能描述：‘将卖家和买家联系起来’
组员：邓洪，陈森林
修改日期：2019-7-6
**/

//后台获取的数据
//import date from '/diyizu/index.js' 外部模拟数据文件导入数据
//tableData=date 
 let tableData=[
        {
        	bid:'20231512',
        	bname:'myhome',
        	bprice:'20$',
        	bdate:'2019-2-2',
        	bbuyname:"lucy"
        },
        {
        	bid:'20231511',
        	bname:'home',
        	bprice:'10$',
        	bdate:'2019-10-2',
        	bbuyname:"tom"
        }
        ]//订单表
let msglist=[{
	name:"lucy",
	msg:"hello!"
},{name:"我",msg:"byb"}
]//信息表

function intiliaze(){//后台获取聊天信息表初始化对话框内容
	axios.get('url')
	  .then(function (response) {
	   if(response.status==200){
				tableData=response.tableData;//获取订单表
			 }
	  })
	  .catch(function (error) {
	    console.log(error);
	  });

 	for(let x in msglist ){//循环遍历msg数据
		$("#msgbox").append(`<li>${msglist[x].name}:${msglist[x].msg}</li>`);
	}

}
intiliaze();
new Vue({
	el:"#app",
   methods: {
	sendmsg:function (){
		$("#msgbox").append(`<li>我:${this.input}</li>`);
	},
	contack:function(index){
		let bid=this.tableData[index].bid;//获取当前行bid
		this.centerDialogVisible = true;//遮罩可见
		this.title=this.tableData[index].bbuyname;//获取当前行数据买家名
//		console.log(this.title);
		$(".el-dialog__title").text(this.title);
		axios.get('url')
		  .then(function (response) {
		   if(response.status==200){
					msglist=data.msglist;//获取信息表
				 }
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
   },
   data:{
   	tableData:tableData,
   	centerDialogVisible: false,
   	input:''
   }
  });
