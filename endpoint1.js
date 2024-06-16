let ads = document.getElementById("banner")
let btnc = document.getElementById("close")

btnc.addEventListener('click', function () {
    ads.style.display = 'none'
})

function dlmnu() {
    window.location.href = "dalemanmenu.html"
}
function blg() {
    window.location.href = "dalemanberita.html"
}

let tag = document.getElementById("tag")
tag.addEventListener('mouseenter', function () {
    tag.style.width = "30px"
    tag.style.height = "30px"
    tag.style.backgroundColor = "blue"
    tag.style.borderRadius = "5px"
})
tag.addEventListener('mouseleave', function () {
    tag.style.width = "28px"
    tag.style.height = "28px"
    tag.style.backgroundColor = "transparent"

})
let tag2 = document.getElementById("tag2")
tag2.addEventListener('mouseenter', function () {
    tag2.style.width = "30px"
    tag2.style.height = "30px"
    tag2.style.backgroundColor = "blue"
    tag2.style.borderRadius = "5px"
})
tag2.addEventListener('mouseleave', function () {
    tag2.style.width = "28px"
    tag2.style.height = "28px"
    tag2.style.backgroundColor = "transparent"

})
let tag3 = document.getElementById("tag3")
tag3.addEventListener('mouseenter', function () {
    tag3.style.width = "30px"
    tag3.style.height = "30px"
    tag3.style.backgroundColor = "blue"
    tag3.style.borderRadius = "5px"
})
tag3.addEventListener('mouseleave', function () {
    tag3.style.width = "28px"
    tag3.style.height = "28px"
    tag3.style.backgroundColor = "transparent"

})
let tag4 = document.getElementById("tag4")
tag4.addEventListener('mouseenter', function () {
    tag4.style.width = "30px"
    tag4.style.height = "30px"
    tag4.style.backgroundColor = "blue"
    tag4.style.borderRadius = "5px"
})
tag4.addEventListener('mouseleave', function () {
    tag4.style.width = "28px"
    tag4.style.height = "28px"
    tag4.style.backgroundColor = "transparent"

})
let tag5 = document.getElementById("tag5")
tag5.addEventListener('mouseenter', function () {
    tag5.style.width = "30px"
    tag5.style.height = "30px"
    tag5.style.backgroundColor = "blue"
    tag5.style.borderRadius = "5px"
})
tag5.addEventListener('mouseleave', function () {
    tag5.style.width = "28px"
    tag5.style.height = "28px"
    tag5.style.backgroundColor = "transparent"

})
let tag6 = document.getElementById("tag6")
tag6.addEventListener('mouseenter', function () {
    tag6.style.width = "30px"
    tag6.style.height = "30px"
    tag6.style.backgroundColor = "blue"
    tag6.style.borderRadius = "5px"
})
tag6.addEventListener('mouseleave', function () {
    tag6.style.width = "28px"
    tag6.style.height = "28px"
    tag6.style.backgroundColor = "transparent"

})



/////////////////////////////////////////////////////////////////
var xstatus = false;
window.onscroll = function () { menu() };

function menu() {
    console.log("jalan");
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("topHeader").classList.add("bg-white");
        document.getElementById("topHeader").classList.add("shadow-lg");
    } else {
        if (!xstatus && document.documentElement.scrollTop < 20) {
            document.getElementById("topHeader").classList.remove("bg-white");
            document.getElementById("topHeader").classList.remove("shadow-lg");
        }
    }
}


function showhidemenu() {
    if (!xstatus) {
        document.getElementById('menu').classList.remove('hidden');
        document.getElementById('menu').classList.add('flex');
        if (document.documentElement.scrollTop < 20) {
            document.getElementById("topHeader").classList.add("bg-white");
            document.getElementById("topHeader").classList.add("shadow-lg");
        }
        xstatus = true;
    } else {
        document.getElementById('menu').classList.remove('flex');
        document.getElementById('menu').classList.add('hidden');
        xstatus = false;
        if (document.documentElement.scrollTop < 20) {
            document.getElementById("topHeader").classList.remove("bg-white");
            document.getElementById("topHeader").classList.remove("shadow-lg");
        }
    }


}

