/**
24.	数据关联 获取买书者和卖书者信息    
分析：买书的和买书的通过书这个中间桥梁联系起来通过书的订单编号找到店名，负责的员工等基本信息
组员：苏超 陈涛  杨钰波 杨晨曦
修改日期：2019-6-22
**/

//后台获取数据
let tableData=[
        {
        	sell:'新华书店',
        	sellid:'007',
        	buyid:'20231512',
        	bookname:'红楼梦',
        	bookprice:'20$',
        	buydate:'2019-2-2',
        	buyer:"苏超",
        	buyernum:'17844871774'
        },
        {
        	sell:'文轩书店',
        	sellid:'008',
        	buyid:'20231511',
        	bookname:'关键对话',
        	bookprice:'10$',
        	buydate:'2019-3-2',
        	buyer:"陈涛",
        	buyernum:'18784811128'
        }
        ,
        {
        	sell:'新华书店',
        	sellid:'010',
        	buyid:'11231511',
        	bookname:'非暴力沟通',
        	bookprice:'10$',
        	buydate:'2019-1-2',
        	buyer:"杨钰波",
        	buyernum:'18111111111'
        }
        ,
        {
        	sell:'西华书店',
        	sellid:'001',
            buyid:'251511',
        	bookname:'白鹿原',
        	bookprice:'80$',
        	buydate:'2019-2-2',
        	buyer:"杨晨曦",
        	buyernum:'18785555555'
        }
        ]//订单表

function intiliaze(){//后台信息表初始化
	$.get("url",function(data,status){//获取订单数据
		if(status==success){
			tableData=data.tableData;
		}
	})
}
intiliaze();
new Vue({
	el:"#app",
   methods: {
		say: function(){
			console.info('hello ajax');
		}
   },
   data:{
   	tableData:tableData
   }
 });