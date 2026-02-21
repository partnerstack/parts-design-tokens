export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    step: {
        gap: "1rem",
        padding: "0.5rem"
    },
    separator: {
        size: "2px",
        margin: "0 0 0 1rem",
        background: "{content.border.color}",
        activeBackground: "{primary.color}"
    },
    stepTitle: {
        color: "{text.muted.color}",
        fontWeight: "500",
        activeColor: "{primary.color}"
    },
    steppanel: {
        color: "{content.color}",
        indent: "1rem",
        padding: "0",
        background: "transparent"
    },
    stepHeader: {
        gap: "0.5rem",
        padding: "0",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}"
        },
        borderRadius: "{content.border.radius}"
    },
    stepNumber: {
        size: ".5rem",
        color: "{surface.500}",
        shadow: "0 0 0 0 rgba(0, 0, 0, 0)",
        fontSize: "2px",
        background: "{surface.500}",
        fontWeight: "500",
        activeColor: "{primary.color}",
        borderColor: "{surface.500}",
        borderRadius: "50%",
        activeBackground: "{primary.color}",
        activeBorderColor: "{primary.color}"
    },
    steppanels: {
        padding: "0.875rem 0.5rem 1.125rem 0.5rem"
    }
}