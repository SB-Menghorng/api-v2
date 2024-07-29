// ================================================================>> Core Library
import { Injectable, NestMiddleware, Next, UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

// ================================================================>> Third Party Library
import * as jwt from 'jsonwebtoken'; // Third-party library for JWT handling

// ================================================================>> Custom Library
import { jwtConstants } from "../shared/constants.twt";
import User from "../../models/User/User.model";

interface UserPayload {
    user: User;
    role: string;
    iat: number;
    exp: number;
}

@Injectable()
export class JwtMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        // Get token from headers
        const authorizationHeader = req.headers?.authorization;

        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
            throw new UnauthorizedException('Authorization token is missing or not in the correct format.')
        }
        const token: string = authorizationHeader.split('bearer ')[1];
        try {
            const payload = jwt.verify(token, jwtConstants.secret) as UserPayload;

            // check if the payload contains the required user information
            if (!payload.user || !payload.user.id || !payload.user.username || !payload.user.email || !payload.role) {
                throw new UnauthorizedException('Authorization token is missing required user information.');
            }
        } catch (error) {
            if (error.name == 'TokenExpiredError') {
                throw new UnauthorizedException('Authorization token is expired.');
            }
            throw new UnauthorizedException('Authorization token is invalid.')
        }
        // If everything is fine, proceed to the next middleware
        next();
    }
}
