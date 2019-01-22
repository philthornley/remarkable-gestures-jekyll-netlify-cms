
        
//my code, so I get to choose the namespace name :-)
RIMAGES = {};

//get pixel ratio, default to 1
RIMAGES.devicePixelRatio = window.devicePixelRatio || 1;

//screenwidth * pixelratio
RIMAGES.screenWidth = window.innerWidth * RIMAGES.devicePixelRatio;


document.getElementById("screen-size").innerHTML = RIMAGES.screenWidth;

//get images blocks and loop through them
RIMAGES.lazyLoadImages = function(){
    var lazyloadUs = document.getElementsByClassName("lazy-load");                
    for(var i = 0; i < lazyloadUs.length; i++){       
        RIMAGES.lazyloadImage(lazyloadUs[i]);
    }
}

//insert 'correct' image based
RIMAGES.lazyloadImage = function(lazyLoadMe){
    
    var noscriptTag = lazyLoadMe.children[0];

    var imgAlt = noscriptTag.getAttribute("data-alt");
    var imgSRC240 = noscriptTag.getAttribute("data-src-240");
    var imgSRC320 = noscriptTag.getAttribute("data-src-320");
    var imgSRC480 = noscriptTag.getAttribute("data-src-480");
    var imgSRC640 = noscriptTag.getAttribute("data-src-640");

    var img = document.createElement("img");
    
    if (imgAlt) {
        img.setAttribute("alt", imgAlt);
    }

    if(RIMAGES.screenWidth < 320){
        img.setAttribute("src", imgSRC240 );
    }else if(RIMAGES.screenWidth < 480){
        img.setAttribute("src", imgSRC320 );
    }else if(RIMAGES.screenWidth < 640){
        img.setAttribute("src", imgSRC480 );
    }else{
        img.setAttribute("src", imgSRC640 );
    }
      lazyLoadMe.appendChild(img);
}

// do it
RIMAGES.lazyLoadImages();