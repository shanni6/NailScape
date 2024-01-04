const router = require("express").Router();
const blogController = require("../controllers/blog-controller");

router.route("/").get(blogController.index);
router.route("/:id").get(blogController.findOne);
router.route("/:id/comments").get(blogController.comments);

module.exports = router;
