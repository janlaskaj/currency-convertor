import corsAnywhere from 'cors-anywhere'
const CORS_PROXY_PORT = 5001

corsAnywhere
    .createServer({
        originWhitelist: [],
    })
    .listen(CORS_PROXY_PORT, () =>
        console.log(
            `Internal CORS Anywhere server started at port ${CORS_PROXY_PORT}`
        )
    )
