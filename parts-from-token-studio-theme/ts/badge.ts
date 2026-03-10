import type { BadgeDesignTokens } from '@primeuix/themes/types/badge';

 export default {
    lg: {
        height: "24px",
        fontSize: "12px",
        minWidth: "24px"
    },
    sm: {
        height: "16px",
        fontSize: "10px",
        minWidth: "16px"
    },
    xl: {
        height: "28px",
        fontSize: "14px",
        minWidth: "28px"
    },
    dot: {
        size: "8px"
    },
    root: {
        height: "20px",
        padding: "0 8px",
        fontSize: "10px",
        minWidth: "20px",
        fontWeight: "700",
        borderRadius: "{border.radius.md}"
    },
    colorScheme: {
        dark: {
            info: {
                color: "{sky.950}",
                background: "{sky.400}"
            },
            warn: {
                color: "{orange.950}",
                background: "{orange.400}"
            },
            danger: {
                color: "{red.950}",
                background: "{red.400}"
            },
            primary: {
                color: "{primary.contrast.color}",
                background: "{primary.color}"
            },
            success: {
                color: "{green.950}",
                background: "{green.400}"
            },
            contrast: {
                color: "{surface.950}",
                background: "{surface.0}"
            },
            secondary: {
                color: "{surface.300}",
                background: "{surface.800}"
            }
        },
        light: {
            info: {
                color: "{surface.0}",
                background: "{sky.500}"
            },
            warn: {
                color: "{surface.0}",
                background: "{orange.500}"
            },
            danger: {
                color: "{surface.0}",
                background: "{red.500}"
            },
            primary: {
                color: "{primary.contrast.color}",
                background: "{primary.color}"
            },
            success: {
                color: "{surface.0}",
                background: "{green.500}"
            },
            contrast: {
                color: "{surface.0}",
                background: "{surface.950}"
            },
            secondary: {
                color: "{surface.600}",
                background: "{surface.100}"
            }
        }
    }
} satisfies BadgeDesignTokens;