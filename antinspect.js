
    document.addEventListener('contextmenu', event => event.preventDefault());


    document.addEventListener('keydown', event => {
        if (
            event.key === "F12" ||
            (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(event.key)) ||
            (event.ctrlKey && event.key === "U")
        ) {
            event.preventDefault();
        }
    });


    document.addEventListener('dragstart', event => event.preventDefault());


    setInterval(function() {
        const threshold = 160;
        if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
            document.body.innerHTML = "<h1 style='color: red; text-align: center;'>DevTools are not allowed.</h1>";
        }
    }, 1000);