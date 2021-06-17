const addComment = async (req, res) => {
    try {
        const comment = await new Comment({
            txt: req.body.txt,
            writer: req.body.txt,
            post: req.body.txt
        })

        comment.save()
        res.json('Комментарий добавлен')

    }
    catch (e) {
        console.log(e)
    }
}


module.exports = addComment