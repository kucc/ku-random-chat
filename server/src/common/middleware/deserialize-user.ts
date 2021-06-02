/* eslint-disable @typescript-eslint/no-namespace */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserResponseDTO } from 'src/user/dto/user-response.dto';
import * as jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: UserResponseDTO;
    }
  }
}

@Injectable()
export class DeserializeUserMiddleware implements NestMiddleware {
  public async use(request: Request, response: Response, next: NextFunction) {
    const { AccessToken } = request.cookies;

    if (!AccessToken) {
      return next();
    }

    try {
      const { data }: any = jwt.verify(AccessToken, process.env.JWT_SECRET);
      if (data) {
        request.user = data;
      }
    } catch (e) {
      response.clearCookie('AccessToken');
    }

    return next();
  }
}
