var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req,res){
  res.writeHead(200, {'Content-Type':'text/plain'});
  var urlObject = url.parse(req.url,true).query;

  //  Selecting operation
  switch(urlObject.operation){
    case 'writeFile': 
                  fs.writeFile('test.txt',urlObject.description, function(err){
                  if(err){
                  console.log(err);
                  res.write('No such file or directory');}
                  else
                  console.log('write operation completed\nPlease try again');
                })
                  break;
    case 'appendFile': 
                  fs.appendFile('test.txt',urlObject.description, function(err){
                  if(err)
                  console.log(err);
                  else
                  console.log('append operation completed');
                })
                  break;
    case 'readFile': // Error handling remaining when file is not present and operation = readFile
                  fs.readFile('test.txt',function(err, data){
                  if(err)
                  console.log(err);
                  else
                  console.log(' Read operation completed');
                  res.write(data)
                  res.end();
                })
                  break;
    case 'unlink':
                  fs.unlink('test.txt',function(){
                  console.log("Delete give file");
                })      
                  break;

    default: res.write('\n Please select operation one of following\n1]writeFile\n2]appendFile\n3]readFile\n4]unlink')
  }
  res.write('test\n')
  if(urlObject.operation != 'readFile')
  res.end();
}).listen(8080);
console.log('server running at http://127.0.0.1:8080/');