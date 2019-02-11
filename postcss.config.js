const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
    plugins: [
        require("postcss-import"),
        tailwindcss("./tailwind.js"),
        autoprefixer({
            grid: true,
            browsers: [">5%"]
        })
    ]
};
