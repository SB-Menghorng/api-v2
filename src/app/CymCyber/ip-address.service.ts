import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class IpAddressService {
    getIP(req: Request): string {
        let ip = '';

        // Check for IP from 'x-forwarded-for' header
        const forwardedFor = req.headers['x-forwarded-for'];
        if (forwardedFor) {
            ip = Array.isArray(forwardedFor) 
                ? forwardedFor[0] 
                : forwardedFor.split(',')[0].trim();
        }

        // Check for IP from 'x-real-ip' header
        if (!ip && req.headers['x-real-ip']) {
            ip = req.headers['x-real-ip'] as string;
        }

        // Fallback to req.ip or socket.remoteAddress
        if (!ip) {
            ip = req.ip || req.socket.remoteAddress || '';
        }

        // Handle IPv6 addresses and convert them to IPv4 if possible
        if (ip === '::1' || ip === '::ffff:127.0.0.1') {
            ip = '127.0.0.1';
        } else if (ip.startsWith('::ffff:')) {
            ip = ip.replace('::ffff:', '');
        }

        return ip;
    }
}
