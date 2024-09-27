import { StatusCodes } from "http-status-codes";

import { UnauthentificatedError } from "../../errors/index.js";
import * as usersService from "../users/users.service.js";

const register = async (req, res) => {
  const user = await usersService.create(req.body);
  // * TOKEN
  const token = user.createAccessToken();
  res.status(StatusCodes.CREATED).json({ user, token });
};

const login = async (req, res) => {
  const user = await usersService.get({ email: req.body.email });
  // * Si le mail n'existe pas dans la BDD
  if (!user)
    throw new UnauthentificatedError("Identifiants invalides");

  const isPasswordCorrect = await user.comparePasswords(
    req.body.password
  );

  if (!isPasswordCorrect)
    throw new UnauthentificatedError("Identifiants invalides");

  const token = user.createAccessToken();

  res
    .status(StatusCodes.OK)
    .json({ user: { userID: user._id }, token });
};

export { login, register };
