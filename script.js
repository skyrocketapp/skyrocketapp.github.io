window.addEventListener("load", function() {
    if (/iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) && !window.MSStream) {
        document.body.classList.add("apple-device");
    } else {
        document.body.classList.add("other-device");
    }
});
