// =========================================================================>> Core Library
import { Controller, Get, Render } from '@nestjs/common';

// ======================================= >> Code Starts Here << ========================== //
@Controller()
export class AppController {
    @Get()
    @Render('main')
    root() {
        return { message: 'TDMS Program' };
    }
}
