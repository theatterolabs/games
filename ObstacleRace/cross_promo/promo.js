
var promos = [];
promos.push({img:"thumb1.png", id:'179266'});
promos.push({img:"thumb2.png", id:'180336'});
promos.push({img:"thumb3.png", id:'180711'});
promos.push({img:"thumb4.png", id:'180524'});
promos.push({img:"thumb5.png", id:'181350'});
//promos.push({img:"thumb6.png", id:'179271'});
promos.push({img:"thumb7.png", id:'181517'});
promos.push({img:"thumb8.png", id:'182204'});
promos.push({img:"thumb9.png", id:'182347'});
promos.push({img:"thumb10.png", id:'182346'});
promos.push({img:"thumb11.png", id:'182934'});
promos.push({img:"thumb12.png", id:'182937'});
promos.push({img:"thumb13.png", id:'182940'});
promos.push({img:"thumb14.png", id:'183687'});
promos.push({img:"thumb15.png", id:'183691'});
promos.push({img:"thumb16.png", id:'183694'});
promos.push({img:"thumb17.png", id:'184817'});
promos.push({img:"thumb18.png", id:'184098'});
promos.push({img:"thumb19.png", id:'184509'});
promos.push({img:"thumb20.png", id:'184160'});
promos.push({img:"thumb21.png", id:'184921'});
promos.push({img:"thumb22.png", id:'185412'});
promos.push({img:"thumb23.png", id:'185921'});
promos.push({img:"thumb24.png", id:'185927'});
promos.push({img:"thumb25.png", id:'185929'});
promos.push({img:"thumb26.png", id:'185933'});
promos.push({img:"thumb27.png", id:'185938'});
promos.push({img:"thumb28.png", id:'186214'});
promos.push({img:"thumb29.png", id:'186220'});
promos.push({img:"thumb30.png", id:'186372'});
promos.push({img:"thumb31.png", id:'187186'});
promos.push({img:"thumb32.png", id:'187894'});
promos.push({img:"thumb33.png", id:'187890'});
promos.push({img:"thumb34.png", id:'187825'});
promos.push({img:"thumb35.png", id:'188115'});

function SetGamePromoVisible(visible)
{
    var promoParent = document.getElementsByClassName("swiper-container")[0];    
    if(window.mySwiper){
        mySwiper.destroy();
        window.mySwiper = null;
    }
    if(visible)
        promoParent.style.display = "block";
    else{
        promoParent.style.display = "none";
    }
    if(!visible)
        return;
    window.mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        slidesPerColumn: 3,
        slidesPerView: 3,
        spaceBetween: 0,
        freeMode: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
}

var ___parent = document.getElementsByClassName("swiper-wrapper")[0];
const shuffled = promos.sort(() => 0.5 - Math.random());
for(var i = 0; i < promos.length; i++){
    var iDiv = document.createElement('div');
    var promoImg = document.createElement('img');
    iDiv.className = "swiper-slide";
    promoImg.className = "scale-up-center";
    promoImg.name = i;
    var Id = i.valueOf();
    promoImg.onclick = function(){
        var url = (window.location != window.parent.location)
        ? document.referrer
        : document.location.href;
        url = url.split("/games/")[0];
        window.open(url + "/games/play/" + shuffled[this.name].id);
    }
    promoImg.src = "cross_promo/"+ shuffled[i].img;
    iDiv.appendChild(promoImg);
    ___parent.appendChild(iDiv);
}
document.getElementsByClassName("swiper-container")[0].style.display = "none";