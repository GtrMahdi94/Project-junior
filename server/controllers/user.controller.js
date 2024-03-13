const User = require('../database-mongo/user.model');

module.exports={



  login : async function (req, res) {
    try {
      const user = await User.findOne({login:req.body.login,password:req.body.password});
      res.status(200).send(user);
    } 
    catch (error) {
      res.status(400).send(error);
    }
  },
  
  
  
  createAcount: async function (req, res) {
    try {
      const user = await User.create(req.body);
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  },
}