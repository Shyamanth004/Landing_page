var images = document.querySelectorAll("#home-right-imgs img");
var quotes = document.querySelectorAll("#home-left-h1s h1");
let index1 = 0;
let index2 = 0;
start1();
start2();
function start1(){
    if(images.length > 0){
        images[index1].style.display = "flex";
        setInterval(nextimage1, 5000);
    }
}
function start2(){
    if(quotes.length > 0){
        quotes[index2].style.display = "flex";
        setInterval(nextimage2, 5000);
    }
}
function show1(i){
    if(i >= images.length){
        index1 = 0;
    }
    else if(i < 0){
        index1 = images.length - 1;
    }

    images.forEach(image => {
        image.style.display = "none";
    });
    images[index1].style.display = "flex";

}
function show2(i){
    if(i >= quotes.length){
        index2 = 0;
    }
    else if(i < 0){
        index2 = quotes.length - 1;
    }

    quotes.forEach(quote => {
        quote.style.display = "none";
    });
    quotes[index2].style.display = "flex";

}
function nextimage1(){
    index1++;
    show1(index1);
}
function nextimage2(){
    index2++;
    show2(index2);
}
