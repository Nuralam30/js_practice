// var opacity=0;
// var intervalID=0;
// window.onload=fadeout;
//     function fadeout(){
//            setInterval(hide, 200);
//     }
// function hide(){
//       var body=document.getElementById("page-loader");
//       opacity =
// Number(window.getComputedStyle(body).getPropertyValue("opacity"))

//         if(opacity>0){
//                opacity=opacity-0.1;
//                        body.style.opacity=opacity
//         }
//         else{
//             clearInterval(intervalID); 
//         }
//     }


window.onload = pageLoader;

function pageLoader(){
    setInterval( loaderActive, 5000)
}

function loaderActive(){
    const loader = document.querySelector('.loader-container');
    loader.classList.add('hide');
}
