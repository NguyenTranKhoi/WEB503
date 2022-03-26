import expressJWT from 'express-jwt'

export const checkAuth = (req, res, next) => {
    const status = true;
    if (status) {
        next();
    } else {
        console.log("Anh ko cos quyeen hello");
    }
}

export const reqireSignin = expressJWT({
    algorithms: ["HS265"],
    secret: "123455",
    requestProperty: "auth"
});

export const isAuth = (req, res, id) => {
    console.log('req.profile', req.profile);
    console.log('req.auth', req.auth);

    const status = req.profile._id == req.auth._id;
    if (!status) {
        res.status(400).json({
            message: "Bạn ko có quyền truy cập"
        })
    }
    next();
}