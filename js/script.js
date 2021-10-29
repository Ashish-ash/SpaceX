( function () {
    let socials = document.querySelectorAll('.social div')
    socials.forEach(function(social,index){
        social.style.animation = `moveIn .8s ease-in-out forwards ${index/5}s`
    })
}())