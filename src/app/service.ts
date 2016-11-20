export class Service {
    name: string;
    percentage: number;
    health: number;
    status: string;
    alerts: {
        critical: number;
        major: number;
        minor: number;
        warning: number;
        info: number
    }
}