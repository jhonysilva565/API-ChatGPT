const PostMessage = async (req, res) => {
    try {
        const {message} = await req.body
        
        res.json(message)
    } catch (error) {
        req.status(500).json({message: error.message})
    }
}

const GetMessage = (req, res) => {
    try {
        res.send('Rodando')
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export {
    PostMessage,
    GetMessage
}