/*
The Canadian Comic Bin 
Website Revamp Project 
Comp 2680

JavaScript For the search bar
Author: Logan Hendry T00682135
Date: November 16th, 2023

Filename: ccb_search.js

What happens when you use the search bar and try and use the filters
*/

//script for drop down filter with click filter nested inside from
//the search page
//made with help from both these sources \/
//https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
//https://www.w3schools.com/howto/howto_js_filter_elements.asp
//getting refferences to each of the drop down buttons

// Function to toggle the visibility of a dropdown
function toggleDropdown(buttonNumber)
{
    //check if one of the other drop down boxes are open and closes it if you
    //open another one
    for (let i = 1; i <= 4; i++)
    {
        if (i !== buttonNumber)
        {
            const otherDropdown = document.getElementById(`filterDropdown${i}`);
            otherDropdown.style.display = 'none';
        }
    }

    //opens the drop down options
    const dropdown = document.getElementById(`filterDropdown${buttonNumber}`);
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

// Add event listeners to each button
for (let i = 1; i <= 4; i++) 
{
    const button = document.getElementById(`filterButton${i}`);
    button.addEventListener("click", function () {
        toggleDropdown(i);
    });
}


