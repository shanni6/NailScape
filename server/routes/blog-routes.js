const router = require("express").Router();
const blogController = require("../controllers/blog-controller");

router.route("/").get(blogController.index);
router.route("/:id").get(blogController.findOne).delete(blogController.remove);
router
    .route("/:id/comments")
    .get(blogController.comments)
    .post(blogController.addComment);
router.route("/:id/comments/:commentId").delete(blogController.removeComment);

module.exports = router;
