export const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: "0%",
        opacity : "100%",
        transition: {duration: 0.8, delay: 0.1}
    }),
    closed: {
        y: "100%",
        opacity : "0%",
        transition: {duration: 0.8}
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 0.7}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.7}
    }
}