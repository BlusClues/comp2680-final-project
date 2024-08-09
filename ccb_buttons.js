/*
The Canadian Comic Bin 
Website Revamp Project 
Comp 2680

JavaScript For Button Events
Author: Logan Hendry T00682135
Date: November 15th, 2023

Filename: ccb_buttons.js

What happens when you click different buttons within the website.
*/

//script for the back to top button
//help with how to make this type of button \/    
//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//get the button
let topbutton = document.getElementById("backtoTop");

//when the user scrolls down 20px from the top of the document the button shows
window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
    //show/hide button based on scroll position
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        topbutton.style.display = "block";
    }
    else
    {
        topbutton.style.display = "none";
    }

    //check if the user has scrolled to the bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
    {
        topbutton.style.bottom = "50px";
    }
    else
    {
        topbutton.style.bottom = "20px";
    }
}

//when the user clicks the button scroll to the top of document
function topFunction()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





//script for the news gallery on home page
//help with how to make this gallery \/    
//https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
/*This Fullfills Requirement 5.6 (d)
This is through the setTimeout function
along with the array methods.*/
let slideIndex = 1;
let timeout;
showSlides(slideIndex);

//next/previous buttons controls
function plusSlides(n)
{
    clearTimeout(timeout); //clear automatic slideshow timeout
    showSlides(slideIndex += n);
}

function showSlides(n)
{
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) 
    {
        slideIndex = 1;
    }

    if (n < 1)
    {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    //change slide every 10 seconds
    timeout = setTimeout(function() {plusSlides(1)}, 10000);
}

