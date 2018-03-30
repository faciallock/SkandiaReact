export default {
    "proxy": {
        "/api": {
            "target": "http://jsonplaceholder.typicode.com/",
            "changeOrigin": true,
            "pathRewrite": { "^/api": "" }
        },
        "/skandia": {
            "target": "http://localhost:9999/",
            "changeOrigin": true,
            "pathRewrite": { "^/skandia": "" }
        }
    }}
