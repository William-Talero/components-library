export const mergeClassNames = (classNames: string, classToMerge: string) => {

    if (!classToMerge) return classNames.trim()

    const originalClassNames = classNames.split(" ").concat(classToMerge.split(" "))

    return originalClassNames.reduce((prev: string, curr) => {
        if (curr) {
            return prev.concat(' ', curr)
        }
        return prev.trim()
    }, '')
}