export const ErrorImpact = {
    LOW: 'LOW',
    STANDARD: 'STANDARD',
    HIGH: 'HIGH',
    CRITICAL: 'CRITICAL',
} as const

export type ErrorImpact = (typeof ErrorImpact)[keyof typeof ErrorImpact]
