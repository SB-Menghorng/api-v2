// dashboard/dashboard.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('index')
  async index(@Query('from') from: string, @Query('to') to: string) {
    const data = await this.dashboardService.getDashboardData(from, to);
    return data;
  }
}
