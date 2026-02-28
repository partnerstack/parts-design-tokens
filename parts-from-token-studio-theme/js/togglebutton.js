export default {
    icon: {
        disabledColor: "{form.field.disabled.color}"
    },
    root: {
        lg: {
            padding: "0.25rem",
            fontSize: "{form.field.lg.font.size}"
        },
        sm: {
            padding: "0.25rem",
            fontSize: "{form.field.sm.font.size}"
        },
        gap: "0.5rem",
        padding: "0.25rem",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "{focus.ring.shadow}"
        },
        fontWeight: "600",
        borderRadius: "{content.border.radius}",
        disabledColor: "{form.field.disabled.color}",
        disabledBackground: "{form.field.disabled.background}",
        invalidBorderColor: "{form.field.invalid.border.color}",
        transitionDuration: "{form.field.transition.duration}",
        disabledBorderColor: "{form.field.disabled.background}"
    },
    content: {
        lg: {
            padding: "0.25rem 0.75rem"
        },
        sm: {
            padding: "0.25rem 0.75rem"
        },
        padding: "8px 16px",
        borderRadius: "{content.border.radius}",
        checkedShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.02),0 1px 2px 0 rgba(0, 0, 0, 0.04)"
    },
    colorScheme: {
        dark: {
            icon: {
                color: "{surface.400}",
                hoverColor: "{surface.300}",
                checkedColor: "{surface.0}"
            },
            root: {
                color: "{surface.400}",
                background: "{surface.950}",
                hoverColor: "{surface.300}",
                borderColor: "{surface.950}",
                checkedColor: "{surface.0}",
                hoverBackground: "{surface.950}",
                checkedBackground: "{surface.950}",
                checkedBorderColor: "{surface.950}"
            },
            content: {
                checkedBackground: "{surface.800}"
            }
        },
        light: {
            icon: {
                color: "{surface.500}",
                hoverColor: "{surface.700}",
                checkedColor: "{primary.color}"
            },
            root: {
                color: "{surface.700}",
                background: "{surface.0}",
                hoverColor: "{surface.700}",
                borderColor: "none",
                checkedColor: "{primary.color}",
                hoverBackground: "{surface.50}",
                checkedBackground: "{surface.0}",
                checkedBorderColor: "{surface.0}"
            },
            content: {
                checkedBackground: "{primary.75}"
            }
        }
    }
}