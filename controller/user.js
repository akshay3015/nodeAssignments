var fs = require('fs');
var data = fs.readFileSync('UserData.json')
var word = JSON.parse(data)

module.exports = {
  registration: async (req, res) => {
    const { name } = req.body;
    try {
     
      fs.readFile('UserData.json',function(data){
        data =  JSON.stringify(data)
        console.log(data);
        data = {
          ...data,
          name
        }
      fs.writeFile('UserData.json', JSON.stringify(data), function(err){
        if(err)
        console.log(err);
      })
      })
      
      res.status(200).json({
        status: 1,
        newUser: 'Test user',
        message: 'Test data',
        data: req.body
      });
    }catch (err) {
      console.log(err)
    }
  },
  getAll: async (res) => {
    try{
      res.status(200).json({
        status: 1,
        newUser: 'List of all users',
        message: 'UserData',
        data: word
      });
    } catch (err) {
      console.log(err)
    }
  }
}