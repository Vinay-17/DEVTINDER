const adminAuth = (req, res, next) => {
    console.log("checking middleware auth");
    
    const token = "xyz";
    const isAuthorized = token === "xyz";

    if (isAuthorized) {
        next(); // user is authorized → continue
    } else {
        res.status(401).send("Unauthorized access");
    }
};
const userAuth = (req, res, next) => {
    console.log("checking middleware auth");
    
    const token = "xyz";
    const isAuthorized = token === "xyz";

    if (isAuthorized) {
        next(); // user is authorized → continue
    } else {
        res.status(401).send("Unauthorized access");
    }
};

module.exports = {
    adminAuth,
    userAuth
};
