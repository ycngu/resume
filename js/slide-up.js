! function () {
    let specialTags = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }

    findClosest()
    window.onscroll = function () {
        var topNavBar = document.querySelector('.topNavBar')
        if (window.scrollY > 0) {
            topNavBar.classList.add('sticky')
        } else {
            topNavBar.classList.remove('sticky')
        }
        findClosest()
    }

    function findClosest() {
        let specialTags = document.querySelectorAll('[data-x]')
        let minIndex = 0
        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i
            }
        }
        // minIndex 就是里窗口顶部最近的元素
        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let brothersAndMe = li.parentNode.children
        for (let i = 0; i < brothersAndMe.length; i++) {
            brothersAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
    console.log('done')
}.call()