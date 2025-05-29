const jwt = require("jsonwebtoken");

const protectAdmin = (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer ")) {
    try {
      token = token.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (decoded.role !== "admin") {
        return res.status(403).json({ message: "Access denied: Not an admin" });
      }

      req.admin = decoded; // attach decoded token data
      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
};

module.exports = { protectAdmin };
