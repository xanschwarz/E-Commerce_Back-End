const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");

// Prefix all routes defined in 'categoryRoutes.js', 'productRoutes.js', and 'tagRoutes.js' with '/categories', '/products',
// and '/tags' respectively.
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

module.exports = router;
