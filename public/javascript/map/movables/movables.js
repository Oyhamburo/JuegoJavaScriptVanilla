const createMovables = (background,boundaries,foreground) => {
    let movables = []
    return movables = [background, ...boundaries,foreground]
}

export { createMovables }