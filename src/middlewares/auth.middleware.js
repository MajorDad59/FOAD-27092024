import jwt from "jsonwebtoken";
import { UnauthentificatedError } from "../errors/index.js";

const authenticateUser = (req, res, next) => {
  if (!token) throw new UnauthentificatedError("Pas de token fourni");
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const userId = decodedToken.userId;

    req.auth = { userId: userId };
    next();
  } catch (error) {}
};
