const  auth = async (req, res, next) => {
    console.log("Inside middleware");
    next();
}

module.exports = auth;