import jwt from 'jsonwebtoken'

export const userAuth = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        res.json({
            success: false,
            message: "Not Authorized, Login with valid Credentials"
        });
    }
    try {
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

        if (decodeToken.id) {
            req.body.userId = decodeToken.id;


        } else {
            res.json({
                success: false,
                message: "Not Authorized, Login with valid Credentials"
            });
        }
        next();
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}