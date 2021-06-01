// Just to declare interfaces for Option object in Clean CSS
namespace CleanCSS {

    export interface Option {
        compatibility?: Compatibility | CompatibilityShortcuts,
        format?: Format | FormatShortcuts,
        inline?: InlineShortcuts | false,
        level?: Level | 0 | 1 | 2,
        rebase?: boolean,
        rebaseTo?: string
    }

    //List of interfaces
    interface Compatibility {
        colors: {
            hexAlpha: boolean,
            opacity: boolean
        },
        customUnits: {
            rpx: boolean
        },
        properties: {
            backgroundClipMerging: boolean,
            backgroundOriginMerging: boolean,
            backgroundSizeMerging: boolean,
            colors: boolean,
            ieBangHack: boolean,
            ieFilters: boolean,
            iePrefixHack: boolean,
            ieSuffixHack: boolean,
            merging: boolean,
            shorterLengthUnits: boolean,
            spaceAfterClosingBrace: boolean,
            urlQuotes: boolean,
            zeroUnits: boolean
        },
        selectors: {
            adjacentSpace: boolean,
            ie7Hack: boolean,
            mergeablePseudoClasses: string[],
            mergeablePseudoElements: string[],
            mergeLimit: number,
            multiplePseudoMerging: boolean
        },
        units: {
            ch: boolean,
            in: boolean,
            pc: boolean,
            pt: boolean,
            rem: boolean,
            vh: boolean,
            vm: boolean,
            vmax: boolean,
            vmin: boolean,
            vw: boolean
        }
    }
    interface Format {
        breaks: {
            // Lines breaks can repeat many times if you set a number in those options
            afterAtRule: boolean | number,
            afterBlockBegins: boolean | number,
            afterBlockEnds: boolean | number,
            afterComment: boolean | number,
            afterProperty: boolean | number,
            afterRuleBegins: boolean | number,
            afterRuleEnds: boolean | number,
            beforeBlockEnds: boolean | number,
            betweenSelectors: boolean | number
        },
        breakWith: string,
        indentBy: number,
        indentWith: string,
        spaces: {
            aroundSelectorRelation: boolean,
            beforeBlockBegins: boolean,
            beforeValue: boolean
        },
        wrapAt: boolean,
        semicolonAfterLastProperty: boolean
    }
    interface Level {
        0?: {},
        1?: {
            all?: boolean,
            cleanupCharsets?: boolean,
            normalizeUrls?: boolean,
            optimizeBackground?: boolean,
            optimizeBorderRadius?: boolean,
            optimizeFilter?: boolean,
            optimizeFontWeight?: boolean,
            optimizeOutline?: boolean,
            removeEmpty?: boolean,
            removeNegativePaddings?: boolean,
            removeQuotes?: boolean,
            removeWhitespace?: boolean,
            replaceMultipleZeros?: boolean,
            replaceTimeUnits?: boolean,
            replaceZeroUnits?: boolean,
            roundingPrecision?: number | string | false,
            selectorsSortingMethod?: 'natural' | 'standard' | 'none' | false,
            specialComments?: number | 'all',
            tidyAtRules?: boolean,
            tidyBlockScopes?: boolean,
            tidySelectors?: boolean
        }
        2?: {
            all?: boolean,
            mergeAdjacentRules?: boolean,
            mergeIntoShorthands?: boolean,
            mergeMedia?: boolean,
            mergeNonAdjacentRules?: boolean,
            mergeSemantically?: boolean,
            overrideProperties?: boolean,
            removeEmpty?: boolean,
            reduceNonAdjacentRules?: boolean,
            removeDuplicateFontRules?: boolean,
            removeDuplicateMediaBlocks?: boolean,
            removeDuplicateRules?: boolean,
            removeUnusedAtRules?: boolean,
            restructureRules?: boolean,
            skipProperties?: string[] | string
        }
    }

    // Use these as a list of shortcuts
    type CompatibilityShortcuts = '*' | 'ie11' | 'ie10' | 'ie9' | 'ie8' | 'ie7';
    type FormatShortcuts = 'keep-breaks' | 'beautify';
    type InlineShortcuts = ['local' | 'remote' | 'none' | 'all', string | undefined]
}