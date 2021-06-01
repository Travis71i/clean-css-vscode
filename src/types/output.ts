namespace CleanCSS {

    export interface Output {
        styles: string;
        stats: {
            efficiency: number,
            minifiedSize: number,
            originalSize: number,
            startedAt: number,
            timeSpent: number
        },
        errors: string[],
        warnings: string[]
    }

}