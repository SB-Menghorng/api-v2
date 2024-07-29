// ================================================================>> Core Library
import { Routes } from "@nestjs/core";
import { AuthModule } from "./app/resources/account/auth/auth.module";

export const appRouts: Routes = [
    {
        path: 'api',
        children: [
            {
                path: 'auth',
                module: AuthModule
            }
        ]
    }
]