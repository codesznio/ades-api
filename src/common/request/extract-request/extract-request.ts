import { Request } from 'express'
import { Api } from '@/types'

export function extractRequestInfo(req: Request): Api.RequestMeta {
    // Extract method and URL
    const method = req.method || ''
    const url = req.url || ''

    // Extract client IP from headers or socket
    const forwardedFor = req.headers['x-forwarded-for'] as string
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : req.socket?.remoteAddress || null

    // Extract user-agent information and flags
    const useragent = {
        browser: req.useragent?.browser || 'unknown',
        version: req.useragent?.version || 'unknown',
        os: req.useragent?.os || 'unknown',
        platform: req.useragent?.platform || 'unknown',
        source: req.useragent?.source || '',
        isMobile: req.useragent?.isMobile || false,
        isTablet: req.useragent?.isTablet || false,
        isDesktop: req.useragent?.isDesktop || false,
        isBot: req.useragent?.isBot ? req.useragent.isBot.toString() : null,
    }

    // Collect flags where isX is true
    const flags = Object.keys(req.useragent || {}).filter((key) => {
        return key.startsWith('is') && req.useragent?.[key] === true
    })

    // Return the structured data
    return {
        method,
        url,
        ip,
        useragent,
        flags,
    }
}
