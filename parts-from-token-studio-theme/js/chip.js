export default {
    icon: {
        size: "14px"
    },
    root: {
        gap: "8px",
        paddingX: "8px",
        paddingY: "8px",
        borderRadius: "4px",
        transitionDuration: "{transition.duration}"
    },
    image: {
        width: "2rem",
        height: "2rem"
    },
    removeIcon: {
        size: "14px",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "{form.field.focus.ring.shadow}"
        }
    },
    colorScheme: {
        dark: {
            icon: {
                color: "{surface.0}"
            },
            root: {
                color: "{surface.0}",
                background: "{surface.800}"
            },
            removeIcon: {
                color: "{surface.0}"
            }
        },
        light: {
            icon: {
                color: "{primary.700}"
            },
            root: {
                color: "{primary.700}",
                background: "{primary.75}"
            },
            removeIcon: {
                color: "{primary.700}"
            }
        }
    }
}