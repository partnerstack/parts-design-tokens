import type { AccordionDesignTokens } from '@primeuix/themes/types/accordion';

 export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    panel: {
        borderColor: "{content.border.color}",
        borderWidth: "1px"
    },
    header: {
        last: {
            bottomBorderRadius: "{content.border.radius}",
            activeBottomBorderRadius: "0"
        },
        color: "{text.color}",
        first: {
            borderWidth: "0",
            topBorderRadius: "{content.border.radius}"
        },
        padding: "1.125rem",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}"
        },
        background: "{content.background}",
        fontWeight: "600",
        hoverColor: "{primary.hover.color}",
        toggleIcon: {
            color: "{text.muted.color}",
            hoverColor: "{primary.hover.color}",
            activeColor: "{text.color}",
            activeHoverColor: "{primary.hover.color}"
        },
        activeColor: "{text.color}",
        borderColor: "{content.border.color}",
        borderWidth: "0",
        borderRadius: "0",
        hoverBackground: "transparent",
        activeBackground: "transparent",
        activeHoverBackground: "transparent"
    },
    content: {
        color: "{text.color}",
        padding: "0 1.125rem 1.125rem 1.125rem",
        background: "transparent",
        borderColor: "{content.border.color}",
        borderWidth: "0"
    }
} satisfies AccordionDesignTokens;