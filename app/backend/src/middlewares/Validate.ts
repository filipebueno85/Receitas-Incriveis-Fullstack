import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';
import { JwtPayload } from 'jsonwebtoken';
import JWT from '../utils/JWT';

const invalidString = 'Invalid email or password';
const invalidField = 'All fields must be filled';

const schemaUser = Joi.object({
  email: Joi.string().email()
    .messages({
      'string.email': invalidString,
    }),
  password: Joi.string().min(6).messages({
    'string.min': invalidString,
  }),
});

const schemaUserRequired = Joi.object({
  email: Joi.string().empty('').required()
    .messages({
      'any.required': invalidField,
      'string.empty': invalidField,
    }),
  password: Joi.string().required().empty('').messages({
    'any.required': invalidField,
    'string.empty': invalidField,
  }),
});

export default class Validate {
  static async validateLoginBody(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const { error } = schemaUser.validate(req.body);

    if (error) return res.status(401).json({ message: error.message });

    return next();
  }

  static async validateLogin(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const { error } = schemaUserRequired.validate(req.body);

    if (error) return res.status(400).json({ message: error.message });

    return next();
  }

  static async validateMatchesBody(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const { homeTeamId, awayTeamId } = req.body;
    if (homeTeamId === awayTeamId) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    // if (!homeTeamId || !awayTeamId) {
    //   return res.status(404).json({ message: 'There is no team with such id!' });
    // }
    return next();
  }

  static async validateToken(req: Request, res: Response, next: NextFunction):
  Promise<Response | void> {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      const validToken = JWT.verify(token) as JwtPayload;
      req.body.loginRole = validToken.role;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}
