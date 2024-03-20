/**
 * package name: body-img-carousel
 * version: 2.1
 * developed by: Jahid Iqbal Biswas
 * github: https://github.com/jahidIqbalBiswas/body-img-carousel
 */
function bgCarousel(path,images,slideDuration=5000,transition="1s"){
const body = document.body;
body.background = `${path}/${images[0]}`
body.style.transition = transition
let count = 0
setInterval(function(){
    body.background = `${path}/${images[count]}`
    count++
    if(count > images.length - 1){
        count = 0
    }
},slideDuration)
}
