const logger = (req, res, next) => {
    const medthod = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(medthod, url, time)
    next()
}

module.exports = logger
