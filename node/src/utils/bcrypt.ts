import * as bcrypt from "bcryptjs";

export const hashPassword = async (password: string) => {
  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

export const compare = async (
  inputPassword: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(inputPassword, hashedPassword);
};
