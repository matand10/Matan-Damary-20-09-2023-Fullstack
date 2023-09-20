
export const utilService = {
    makeDebounce
}

function makeDebounce(fn: (...args: any) => void, delay: number = 500) {
    let id: NodeJS.Timeout
    return (...args: any) => {
        if (id)
            clearTimeout(id)
        id = setTimeout(() => fn(args), delay)
    }
}