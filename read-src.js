const srcURL = document?.currentScript?.src || null
if (srcURL) {
  console.log("Detected a src URL", srcURL)
} else {
  console.log("No src found.")
}
