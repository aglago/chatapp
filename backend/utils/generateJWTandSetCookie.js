import jwt from "jsonwebtoken"

const generateJWTandSetCookie = (userID, res) => {
    // generating the jwt token
    const token = jwt.sign({userID}, process.env.JWT_SECRET, {
        expiresIn: "15s",
    })

    // setting the jwt token into the cookie
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent XSS attacks, cross site scripting attacks
        sameSite: "strict", // CSRF attacks, cross site request forgery attacks
        secure: process.env.NODE_ENV !== "development" // true means https connections only
    })
}

export default generateJWTandSetCookie