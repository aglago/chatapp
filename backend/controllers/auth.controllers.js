import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import generateJWTandSetCookie from "../utils/generateJWTandSetCookie.js";

// signing up a user
export const signup = async (req, res) => {
    try {
        // collecting data from the user (frontend)
        const { username, email, password, confirm_password, gender } = req.body;

        // check if username exists
        const user = await User.findOne({ username });

        if (user)
            return res.status(400).json({ error: "Username already exist" });

        // check if passwords match
        if (password !== confirm_password)
            return res.status(400).json({ error: "Passwords don't match" });

        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // setting profile picture
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

        // creating new user details to store in database
        const newUser = new User({
            username,
            password: hashedPassword,
            email,
            gender,
            profilePicture: gender === "male" ? boyProfilePic : girlProfilePic
        });

        // if newUser is created successfully
        if (newUser) {
            // generat jwt token
            generateJWTandSetCookie(newUser._id, res)

            // storing new user details to database
            await newUser.save();

            // sending response to client about status of the request
            res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                password: newUser.password,
                profilePicture: newUser.profilePicture,
            });

        } else {
            res.status(400).json({ error: "Invalid user data" })
        }
    } catch (error) {
        console.log('Error in signup controller:', error.message)
        res.status(500).json({ error: "Internal server error" })
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // check if username exists and password matches
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user.password || "")

        // if username do not exist and password do not match, throw an error
        if (!user || !isPasswordCorrect)
            res
                .status(400)
                .json({
                    error: "Invalid username or password",
                });
        
        // if username and password matches stored data, log in
        generateJWTandSetCookie(user._id, res)

        res.status(201).json({
            id: user._id,
            username: user.username,
            profilePicture: user.profilePicture
        })
    
    } catch (error) {
        console.log("Error in login controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({message: 'Logged out successfully!'})
    } catch (error) {
         console.log("Error in logout controller:", error.message);
         res.status(500).json({ error: "Internal server error" });
    }
};