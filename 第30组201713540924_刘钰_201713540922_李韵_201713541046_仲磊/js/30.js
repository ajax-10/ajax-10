//在每个投票选项后面写了个div，用div的宽度来代表当前该选项的投票数。
    function la(){    //函数vote，当点击确认投票的时候，调用vote方法
        var sft = false;
        var j = 0;
        //for循环的条件是，所有投票选项的个数。
        
        for(var i = 0; i < document.getElementsByName("option").length; i++){
            
            //查找到是哪个投票选项被选中
            if(document.getElementsByName("option")[i].checked == true && sft == false){
                var width = document.getElementById(i).style.width; //获取到当前选项的宽度。
                width = parseInt(width);//将宽度转化为int型
                
                width += 2;//改变width的值，这里就是定义每次投票的进度条的增速
                
                document.getElementById(i).style.width = width+"px";
                
                var label = "label"+i;//lable标签里面显示当前的投票数目。
                
                var num = document.getElementById(label).innerText;//获取到当前的票数
                
                document.getElementById(label).innerText = ++num;//修改票数
                
                sft = true;
                j = j+1; 
            }else{
            	while (j == 1 && sft == true){
            		alert("已提交");
            		j++;
            	}
            }
        }
        
    }
