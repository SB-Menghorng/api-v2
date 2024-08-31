// app.routing.ts
import { Routes } from "@nestjs/core";
import { AuthModule } from "./app/resources/account/auth/auth.module";
import { AdminModule } from "./app/resources/cp/admin/admin.module";

export const appRouts: Routes = [
    {
        path: 'api',
        children: [
            {
                path: 'auth',
                module: AuthModule
            },
            {
                path: 'admin',
                module: AdminModule
            }
        ]
    }
];
