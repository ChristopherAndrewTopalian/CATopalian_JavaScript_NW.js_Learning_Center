// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    ba(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.id = 'subDiv';
    mainDiv.append(subDiv);

    //-//

    let openContainer = ce('div');
    openContainer.style.display = 'flex';
    openContainer.style.flexDirection = 'column';
    subDiv.append(openContainer);

    //-//

    let openText001Button = ce('button');
    openText001Button.textContent = 'Open text001.txt';
    openText001Button.style.alignSelf = 'flex-start'; // no stretch
    openText001Button.onmouseover = function()
    {
        hoverSound();
    };
    openText001Button.onclick = function()
    {
        clickSound();
        openInDefaultApp('text', 'text001.txt');
    };
    openContainer.append(openText001Button);

    //-//

    let openVideo001Button = ce('button');
    openVideo001Button.textContent = 'Open 001.mp4';
    openVideo001Button.style.alignSelf = 'flex-start'; // no stretch
    openVideo001Button.onmouseover = function()
    {
        hoverSound();
    };
    openVideo001Button.onclick = function()
    {
        clickSound();
        openInDefaultApp('videos', '001.mp4');
    };
    openContainer.append(openVideo001Button);

    //-//

    let openHydrogenButton = ce('button');
    openHydrogenButton.textContent = 'Open Hydrogen.pdf';
    openHydrogenButton.style.alignSelf = 'flex-start'; // no stretch
    openHydrogenButton.onmouseover = function()
    {
        hoverSound();
    };
    openHydrogenButton.onclick = function()
    {
        clickSound();
        openInDefaultApp('pdf', 'Hydrogen.pdf');
    };
    openContainer.append(openHydrogenButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

