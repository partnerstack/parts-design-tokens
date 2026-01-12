import type { ProgressSpinnerDesignTokens } from '@primeuix/themes/types/progressspinner';

 export default {
    colorScheme: {
        dark: {
            root: {
                colorOne: "{red.400}",
                colorTwo: "{blue.400}",
                colorFour: "{yellow.400}",
                colorThree: "{green.400}"
            }
        },
        light: {
            root: {
                colorOne: "{primary.color}",
                colorTwo: "{primary.color}",
                colorFour: "{primary.color}",
                colorThree: "{primary.color}"
            }
        }
    }
} satisfies ProgressSpinnerDesignTokens;