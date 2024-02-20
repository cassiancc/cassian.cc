let height = 591, peekVal;
const page = document.location.pathname

function openCollapsible(button) {
    height = 591
    button.classList.toggle("active");
    let readmore = button.nextElementSibling;
    let content = readmore.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
        readmore.innerHTML = `<br>read more...`
    } else {
        readmore.innerHTML = "<br>read less..."
        content.style.display = "block";
        document.querySelectorAll(".item").forEach(function(element) {
            if (element.clientHeight > height ) {
                height = element.clientHeight
            }
    })
    }
    
    document.querySelectorAll(".item").forEach(function(element) {
        element.style.minHeight = `${height}px`
        
    })
    
};

            
var iaGlide = new Glide('#ia-glide', {
    autoplay: 4000,
    type: "carousel",
    animationDuration: 2000,
    animationTimingFunc: 'linear',
    peek: {
    before: peekVal,
    after: peekVal
}})
var iotGlide = new Glide('#iot-glide', {
    autoplay: 4000,
    type: "carousel",
    animationDuration: 2000,
    animationTimingFunc: 'linear',
    peek: {
    before: peekVal,
    after: peekVal
}})

function peek () {
    peekVal = document.querySelector(".carousel").clientWidth
    let carousel = document.querySelector(".carousel").clientWidth
    if (carousel > 1600) {
        peekVal = peekVal / 3

    }
    else if (carousel > 1200) {
        peekVal = peekVal / 4

    }
    else if (carousel > 600) {
        peekVal = peekVal / 5

    }
    else {
        peekVal = Math.sqrt(peekVal)
        peekVal * 6

    }
    iotGlide.update({
        peek: {
        before: peekVal,
        after: peekVal
        }
    })
    iaGlide.update({
        peek: {
        before: peekVal,
        after: peekVal
        }
    })
    return peekVal
}


if (page == "/") {
    peek()
    peekVal = document.querySelector(".item").clientWidth
    iaGlide.mount()
    iotGlide.mount()
    peek()
    window.addEventListener("resize", peek);

}