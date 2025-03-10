import jwt from "jsonwebtoken";

const mech_AuthMiddleware = (req, res, next) => {
  // Step 1: Check if the authorization header exists
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Authorization header missing or invalid",
    });
  }

  // Step 2: Extract the token from the header
  const token = authHeader.split(" ")[1];

  // Step 3: Verify the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use environment variable for JWT secret

    // Step 4: Check if the token has expired
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (decoded.exp && currentTimestamp > decoded.exp) {
      return res.status(401).json({
        message: "Token has expired - please login again",
      });
    }

    // Step 5: Attach the decoded user data to the request object
    req.user = decoded;
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    // Handle specific JWT errors
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token has expired - please login again",
      });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        message: "Invalid token - please login again",
      });
    } else {
      return res.status(401).json({
        message: "Authentication failed",
      });
    }
  }
};

export default mech_AuthMiddleware;