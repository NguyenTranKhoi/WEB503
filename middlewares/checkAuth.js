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
    //thuật toán
    algorithms: ["HS256"],
    //mã bảo mật
    secret: "123456",
    requestProperty: "auth"
});

export const isAuth = (req, res, next) => {
    const status = req.profile._id == req.auth._id;
    if (!status) {
        res.status(400).json({
            message: "Bạn ko có quyền truy cập"
        })
    }
    next();
}

export const isAdmin = (req, res, next) => {
    if (req.profile.role === 0) {
        res.status(400).json({
            message: "bạn ko phải là admin"
        })
    }
    next();
}