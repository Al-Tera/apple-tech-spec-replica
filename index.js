const b1 = document.getElementsByClassName("button")[0]
const b2 = document.getElementsByClassName("button")[1]
const scrollcontainer = document.getElementsByClassName("scroll__container")[0]

const timer = (i,t) => {
    if(t){
        setTimeout(function () {
            scrollcontainer.scrollLeft += 15;  
        },i * 5)}
    else {
        setTimeout(function () {
            scrollcontainer.scrollLeft -= 15;  
        },i * 5)}
}

b1.addEventListener("mousedown", function () {
    for (var i = 0; i < 50; i++) {
        timer(i, false)
    }
    if (scrollcontainer.scrollLeft < 751) {
        this.style.opacity = 0.35;
        this.style.pointerEvents = "none";
    }
    if (scrollcontainer.scrollLeft > 750) {
        b2.style.opacity = 1;
        b2.style.pointerEvents = "fill";
    }
})
b2.addEventListener("mousedown", function () {
    for (var i = 0; i < 50; i++) {
        timer(i, true)
    }
    if (scrollcontainer.scrollLeft > 525) {
        this.style.opacity = 0.35;
        this.style.pointerEvents = "none";
    }
    if (scrollcontainer.scrollLeft < 525) {
        b1.style.opacity = 1;
        b1.style.pointerEvents = "fill";
        
    }

})