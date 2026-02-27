import type { DialogDesignTokens } from '@primeuix/themes/types/dialog';

 export default {
    root: {
        color: "{overlay.modal.color}",
        shadow: "{overlay.modal.shadow}",
        background: "{overlay.modal.background}",
        borderColor: "{overlay.modal.border.color}",
        borderRadius: "{overlay.modal.border.radius}"
    },
    title: {
        fontSize: "1.25rem",
        fontWeight: "600"
    },
    footer: {
        gap: "0.5rem",
        padding: "0 {overlay.modal.padding} 20px {overlay.modal.padding}"
    },
    header: {
        gap: "0.5rem",
        padding: "20px 20px 16px {overlay.modal.padding}"
    },
    content: {
        padding: "0 {overlay.modal.padding} 20px {overlay.modal.padding}"
    }
} satisfies DialogDesignTokens;