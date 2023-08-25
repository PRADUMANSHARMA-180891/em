
const express = require('express');
const jwt =require('jsonweb-toket')
const server =express();
const port = 5000

const loginApi =async(req,res)=>{
       const {email,password} =req.body;
          try {
               if(!email && !password){
                res.status(401);
                throw new Error ("email and password is reqiured")
               }
               const newUser =await User.find({email})
                const compare =jwt.compare({password, newUser.password})

                if(compare){
                    res.status(201);
                    res.send({message:"login succefully"})
                }


                const tokenExp ={
                      header : newUser.email,
                      jwt.tokenExp : "1d"
                }


          } catch (error) {
            console.log(error)
          }
       
}
server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
