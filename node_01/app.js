// console.log("Hello world!");
const http=require('http');
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("Hello world!");
        res.end();
    }
    else if(req.url==="/form"){
        res.setHeader('Content-Type','text/html');
        res.write("<form action='/submit' method='POST'><input name='data'/> <input name='data2'/><button>submit</button></form>");
        res.end();
    }
    else if(req.url==="/submit"){
        let data="";
        req.on("data",chunk =>{
          data += chunk
        })
        req.on('end',()=>{

            console.log(data);
            res.write("Data Recived!");
            res.end();
        })
        
    }
    else {
        res.write("404 - not found");
        res.end();
    }
 
});
server.listen(3000);
