const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/boeingtuan/Desktop/hackathon/perfect-smile/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/boeingtuan/Desktop/hackathon/perfect-smile/src/pages/404.tsx"))),
  "component---src-pages-face-classification-tsx": hot(preferDefault(require("/Users/boeingtuan/Desktop/hackathon/perfect-smile/src/pages/face_classification.tsx"))),
  "component---src-pages-face-recognition-tsx": hot(preferDefault(require("/Users/boeingtuan/Desktop/hackathon/perfect-smile/src/pages/face_recognition.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/boeingtuan/Desktop/hackathon/perfect-smile/src/pages/index.tsx")))
}

