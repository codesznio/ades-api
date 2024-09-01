export interface RequestMeta {
    method: string
    url: string
    ip: string | null
    useragent: {
        browser: string
        version: string
        os: string
        platform: string
        source: string
        isMobile: boolean
        isTablet: boolean
        isDesktop: boolean
        isBot: string
    }
    flags: string[] // Array of flags where any isX flag is true
}
