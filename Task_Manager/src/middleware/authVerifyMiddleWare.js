const jwt = require('jsonwebtoken');

let authVerify=(req,res,next)=>{
    let Token= req.headers['token'];
    jwt.verify(Token,"abcdef",function(err,decoded){
        if(err){
            console.log(Token);
            res.status(401).json({
                status:"unauthorized"
            });
        }
        else{
            let email =decoded['data'];
            req.headers.email=email;
            console.log(email);
            next();

        }

    })

}
module.exports=authVerify;