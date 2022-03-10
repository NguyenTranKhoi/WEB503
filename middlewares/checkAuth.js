export const checkAuth = (req, res, next) => {
    const status = true;
    if (status) {
        console.log("Heloo")
        next();
    } else {
        console.log("Anh ko cos quyeen hello");
    }
}