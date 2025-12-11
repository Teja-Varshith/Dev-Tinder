const authCheck = (req,res,next) => {
     const token ='xyz';
    if(token != 'xyz'){
        res.status(404).send("Not Authorized man");
    }else{
        next();
    }
};

module.exports = {
    authCheck,
}