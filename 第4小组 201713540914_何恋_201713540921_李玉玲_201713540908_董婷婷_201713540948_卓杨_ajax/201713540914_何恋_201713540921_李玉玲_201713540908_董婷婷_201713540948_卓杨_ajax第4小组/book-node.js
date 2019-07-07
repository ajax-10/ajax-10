//安装node.js 中运行此文件 
var http = require('http')
var fs = require('fs')
var url = require('url')  //加载url模块
var path = require('path')//路径处理模块

var server = http.createServer(function(request, response){
    //**获取输入的url解析后的对象
	//request.url表示的是输入的url除了域名后面的部分
	var pathObj = url.parse(request.url, true);
	//**static文件夹的绝对路径
	//__dirname表示当前文件所在的目录的***绝对路径****  static0等是文件名 !!!*****根据需求修改****!!!
	var staticPath = path.resolve(__dirname, 'static0')
	var staticPath1 = path.resolve(__dirname, 'static1')
	var staticPath2 = path.resolve(__dirname, 'static2')
	var staticPath3 = path.resolve(__dirname, 'static3')
	//**获取资源文件绝对路径  
	//path.join()用于连接路径
	var filePath = path.join(staticPath, pathObj.pathname)
	var filePath1 = path.join(staticPath1, pathObj.pathname)
	var filePath2 = path.join(staticPath2, pathObj.pathname)
	var filePath3 = path.join(staticPath3, pathObj.pathname)
	//异步读取file  binary二进制
	switch(pathObj.path)
	{
	    case "/":
		     fs.readFile(filePath, 'binary', function(err, fileContent){
		         if(err){                                                 //文件读取失败
		             console.log('401首页')
		             response.writeHead(401, 'not found home page')
		             response.end('<h1> Not Found Home Page</h1>')
		         }else{                                                   //文件读取成功
		             console.log('ok')
		             response.write(fileContent, 'binary')
		             response.end()
		         }
		     })
	         break;
	    case "/page1": //"/page1"可以修改为所需要的  网页中搜索http://127.0.0.1:8080/page1 
	       fs.readFile(filePath1, 'binary', function(err, fileContent){
	           if(err){
	               console.log('402page1')
	               response.writeHead(402, 'not found first page')
	               response.end('<h1> Not Found First Page</h1>')
	           }else{
	               console.log('ok')
	               response.write(fileContent, 'binary')
	               response.end()
	           }
	       })
	        break;
	    case "/page2":
	        fs.readFile(filePath2, 'binary', function(err, fileContent){
	            if(err){
	                console.log('403page2')
	                response.writeHead(403, 'not found second page')
	                response.end('<h1> Not Found Second Page</h1>')
	            }else{
	                console.log('ok')
	                response.write(fileContent, 'binary')
	                response.end()
	            }
	        })
	        break;
	    case "/page3":
	        fs.readFile(filePath3, 'binary', function(err, fileContent){
	            if(err){
	                console.log('404page3')
	                response.writeHead(404, 'not found third page')
	                response.end('<h1> Not Found Third Page</h1>')
	            }else{
	                console.log('ok')
	                response.write(fileContent, 'binary')
	                response.end()
	            }
	        })
	        break;
			
	    default :
	        response.writeHead(404,{'content-type':'text/html;charset=utf-8'});
	        response.write('<h1>这个页面不存在</h1>');
	        response.end();
	        break;
	}
	     
	})
	server.listen(8080)
	console.log('visit http://127.0.0.1:8080')
	