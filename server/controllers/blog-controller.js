const knex = require("knex")(require("../knexfile"));

const addComment = async (req, res) => {
    if (!req.body.comment || !req.body.name) {
        return res.status(400).json({
            message:
                "Please provide comment and name for the comment in the request",
        });
    }

    try {
        const result = await knex("comment").insert(req.body);

        const newCommentId = result[0];
        const createdComment = await knex("comment").where({
            id: newCommentId,
        });

        res.status(201).json(createdComment);
    } catch (error) {
        res.status(500).json({
            message: `Unable to create new comment: ${error}`,
        });
    }
};

const comments = async (req, res) => {
    try {
        const comments = await knex("blog")
            .select([
                "comment.content",
                "comment.created_at",
                "comment.id",
                "comment.name",
            ])
            .join("comment", "comment.blog_id", "blog.id")
            .where({ blog_id: req.params.id });

        res.json(comments);
    } catch (error) {
        res.status(500).json({
            message: `Unable to retrieve comments for blog with ID ${req.params.id}: ${error}`,
        });
    }
};

const findOne = async (req, res) => {
    try {
        const blogsFound = await knex("blog").where({ id: req.params.id });

        if (blogsFound.length === 0) {
            return res.status(404).json({
                message: `Blog with ID ${req.params.id} not found`,
            });
        }

        const blogData = blogsFound[0];
        res.json(blogData);
    } catch (error) {
        res.status(500).json({
            message: `Unable to retrieve blog data for blog with ID ${req.params.id}`,
        });
    }
};

const index = async (_req, res) => {
    try {
        const data = await knex("blog");
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send(`Error retrieving Blogs: ${err}`);
    }
};

const remove = async (req, res) => {
    try {
        const rowsDeleted = await knex("blog")
            .where({ id: req.params.id })
            .delete();

        if (rowsDeleted === 0) {
            return res
                .status(404)
                .json({ message: `Blog with ID ${req.params.id} not found` });
        }

        // No Content response
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: `Unable to delete blog: ${error}`,
        });
    }
};

const removeComment = async (req, res) => {
    try {
        const rowsDeleted = await knex("comment")
            .where({ id: req.params.commentId })
            .delete();

        if (rowsDeleted === 0) {
            return res.status(404).json({
                message: `Comment with ID ${req.params.commentId} not found`,
            });
        }

        // No Content response
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: `Unable to delete comment: ${error}`,
        });
    }
};

module.exports = {
    addComment,
    comments,
    findOne,
    index,
    remove,
    removeComment,
};
