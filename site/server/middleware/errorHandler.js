class CustomError extends Error {
    constructor(status, message) {
        super()
        this.status = status
        this.message = message
    }
}
const AsyncHandler = function (fn) {
    return (req, res, next) => {
        fn(req, res, next).catch((e) => {
            // console.log(e)
            next(e)
        })
    }
}

const errorHandler = (err, req, res, next) => {
    const { status = 500, message = "Server error" } = err

    res.status(status).send(message)
}

export { CustomError, AsyncHandler, errorHandler }