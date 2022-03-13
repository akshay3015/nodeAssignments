const sha1 = require('sha1');
const { models } = require('../sequelize');
const Student = models.student;


module.exports = {
   userRegistration: async (req, res) => {
      try {
         let { phone} = req.body;
         userData = await Student.findOne({where: {phone: phone}});
         if (!userData) {
            if(req.body.password) {
               req.body.password = sha1(req.body.password);
            }
            userData = await Student.create(req.body);

             res.status(200).json({
               status: 1,
               message: 'User registered successfully',
               data: userData
            });
         }else{
            res.status(200).json({
               status: 1,
               message: 'Entered mobile number already exist',
               data: []
            });
         }
      } catch (err) {
         
         res.status(400).json({
            status: 0,
            message: 'Oops an error occured',
            error: err
         });
      }    
   },

   loginWithEmail : async (req, res) => {
      try {
         const { email } = req.body;
         const password = sha1(req.body.password);
        
         const userData = await Student.findOne({where: {email: email, password: password}});
        
         if (!userData) {
            res.status(400).json({
               status: 0,
               message: 'Email or password is not correct',
               data: null
            });
         }
         res.status(200).json({
            status: 1,
            message: 'User Logged in successfully',
            data: {
              userData,
            },
         });
     
       } catch (error) {
            res.status(400).json({
               status: 0,
               message: 'an error occured',
               error: error
            });
       }
   },

 

   getAll: async (res, next) => {
      try {
         const users = await Student.findAll();
         res.status(200).json({
            status: 1,
            message: 'Records fetched',
            data: users
         });
      } catch (err) {
         next(err);
      }
   },

   getById: async (req, res, next) => {
      try {
         const id = req.query.id;
         if (id) {
            const user = await Student.findOne({where: {id: id}});
            if (user) {
               res.json({status: 1, message: 'Record fetched', data: user});
            } else {
               res.json({status: 0, message: 'Record Not Found', data: null});
            }
         } else {
            res.json({status: 0, message: 'Field id can not be empty', data: null});
         }
      } catch (err) {
         next(err);
         
      }
   },

   update: async (req, res, next) => {
      try {
         const id = req.body.id;
         if (id) {
            data = await Student.update(req.body, {
               where: {
                  id: id
               }
            });
            if (data && data !=0) {
               res.json({status: 1, message: 'Record Updated successfully', data: null});
            } else {
               res.json({status: 0, message: 'Cannot update record with id=${id}', data: null});
            }
         } else {
            res.status(400).send('Bad request: param Id (${id}) does not match body Id (${req.body.id}).');
         }
      } catch (err) {
         res.json({status: 0, message: 'Can not update record', error: err});
      }
   },
   
   remove: async (req, res) => {
      try {
         const id = req.query.id;
         data = await Student.destroy({
            where: {
               id: id
            }
         });
         if (data && data !=0) {
            res.json({status: 1, message: 'Record deleted', data: null});
         } else {
            res.json({status: 0, message: 'Cannot delete record with id=${id}. Maybe Record was not found or req.body is empty!', data: null});
         }
      } catch (err) {
         res.json({status: 0, message: 'Can not  delete records', error: err});
      }
   },

  }