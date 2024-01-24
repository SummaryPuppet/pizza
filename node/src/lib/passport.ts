import passport from "passport";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";

import prisma from "./db";
import { TOKEN_SECRET } from "../config";

export const configPassport = () => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: TOKEN_SECRET,
  };

  passport.use(
    new JWTStrategy(opts, async (jwtPayload, done) => {
      try {
        const user = await prisma.admin.findUnique({
          where: { id: jwtPayload.id },
        });

        if (!user) return done(null, false);

        return done(null, user);
      } catch (error) {
        done(error, false);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj: any, done) => {
    done(null, obj);
  });
};
