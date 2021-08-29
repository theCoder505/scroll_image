const image = document.querySelector(".image");


// var paddingDiv1 = getStyle(document.getElementById("divOne"), "padding");

var paddingScrldiv = window.getComputedStyle(document.getElementById("divOne")).paddingBottom;
var font = window.getComputedStyle(document.getElementById("divOne")).fontSize;
paddingScrldiv = Number(paddingScrldiv.slice(0, -2));
font = Number(font.slice(0, -2));

var scrollDivTop = document.getElementById("scrollDiv").offsetTop; // = x;
var divOneHeight = document.getElementById("divOne").offsetHeight; // = a;


//setting the particular div section for scroll work 
document.getElementById("mainScrollTxts").addEventListener("scroll", function() {
    let content0 = document.getElementById("divZero");
    let content1 = document.getElementById("divOne");
    let content2 = document.getElementById("divTwo");
    let content3 = document.getElementById("divThree");
    let content4 = document.getElementById("divFour");
    let contentPosition0 = content0.getBoundingClientRect().top;
    let contentPosition1 = content1.getBoundingClientRect().top;
    let contentPosition2 = content2.getBoundingClientRect().top;
    let contentPosition3 = content3.getBoundingClientRect().top;
    let contentPosition4 = content4.getBoundingClientRect().top;

    let divBottomLimit0 = contentPosition0 + divOneHeight - (paddingScrldiv + font / 2);
    let divBottomLimit1 = contentPosition1 + divOneHeight - (paddingScrldiv + font / 2);
    let divBottomLimit2 = contentPosition2 + divOneHeight - (paddingScrldiv + font / 2);
    let divBottomLimit3 = contentPosition3 + divOneHeight - (paddingScrldiv + font / 2);
    let divBottomLimit4 = contentPosition4 + divOneHeight - (paddingScrldiv + font / 2);




    if ((contentPosition0 <= scrollDivTop) && (divBottomLimit0 >= scrollDivTop)) {
        image.style.backgroundSize = "100% 100%";
        image.style.backgroundPosition = "0% 0%";
        image.style.backgroundImage = "url('image.jpg')";
    }
    if ((contentPosition1 <= scrollDivTop) && (divBottomLimit1 >= scrollDivTop)) {
        image.style.backgroundSize = "205% 176%";
        image.style.backgroundPosition = "95% 27%";
        image.style.backgroundImage = "url('image.jpg')";
    } else if ((contentPosition2 <= scrollDivTop) && (divBottomLimit2 >= scrollDivTop)) {
        image.style.backgroundSize = "218% 162%";
        image.style.backgroundPosition = "0% 30%";
        image.style.backgroundImage = "url('image.jpg')";
    } else if ((contentPosition3 <= scrollDivTop) && (divBottomLimit3 >= scrollDivTop)) {
        image.style.backgroundSize = "100% 100%";
        image.style.backgroundPosition = "0% 0%";
        image.style.backgroundImage = "url('stunning.png')";
    } else if ((contentPosition4 <= scrollDivTop) && (divBottomLimit4 >= scrollDivTop)) {
        image.style.backgroundSize = "170% 130%";
        image.style.backgroundPosition = "0% 32%";
        image.style.backgroundImage = "url('image.jpg')";
    }


});