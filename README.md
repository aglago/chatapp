# MERN Chat App

## Description
MERN Chat App is a real-time messaging application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to send and receive messages instantly.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aglago/chatapp.git
   cd chatapp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the server directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. **Run the server:**
   ```bash
   npm run server
   ```

6. **Run the frontend:**
   ```bash
   cd ../frontend
   npm start
   ```

## Usage

1. **Register an account**: Open the app in your browser and sign up with your email and password.
2. **Log in**: Use your credentials to log in.
3. **Start chatting**: Send and receive messages in real-time.

## Features

- Real-time messaging with Socket.io
- User authentication with JWT
- Secure storage of user data with MongoDB
- Responsive and user-friendly interface with React

## Contributing

We welcome contributions! Please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## Contact

Sure! Here’s the section for getting in touch with you:

## Contact

If you have any questions, suggestions, or issues, feel free to reach out to me:

- **Email**: samuellamanyeaglago@gmail.com
- **Twitter**: [@smaglago](https://x.com/smaglago)
- **LinkedIn**: [Samuella Manye Aglago](https://linkedin.com/in/aglago)
- **GitHub**: [aglago](https://github.com/aglago)

## Dependencies

- dotenv
- jsonwebtoken
- mongoose
- express
- socket.io

## License

This project is licensed under the MIT License.