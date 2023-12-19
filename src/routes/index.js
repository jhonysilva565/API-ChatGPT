import bodyParser from "body-parser"
import message from "./message.js"

const routes = (app) => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: false })
    )
    app.use('/message', message)
}

export default routes