module.exports = {
    isLoggedIn: (req,res,next) => {
        if(req.isAuthenticated()){
            return next(); //since authenticated now move on to next function
        }
        return res.json({
            status: 404,
            message: "You need to be logged in first"
        })  
    }
}
