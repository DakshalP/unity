/* 
Creating a static webpage, so cannot use any server-side code. 
That's why I'm using this client-side JS to render header and footer divs.

To make things simpler, in this context header = navbar;
*/

const header = document.querySelector("#header");
const footer = document.querySelector("#footer");
if(header!=null) { 
    header.innerHTML = 
    `
    <a class="home" href="index.html">Home</a>
    <a class="menu" onclick="openNav()">Menu</a>
    <div id="mySidenav" class="sidenav">
        <a class="menu closebtn" onclick="closeNav()">Close</a>
        <div class="links">
            <h3>Menu</h3>
            <ul>
                <a href="one.html">
                    <li>
                        <img class="thumbnail" src="images/one.svg">
                        <div class="link-text">
                            <h2>Intro to Unity</h2>
                            <p>What is Unity? Find out here.</p>
                        </div>
                    </li>
                </a>
                <a href="#">
                    <li>
                        <img class="thumbnail" src="images/two.svg">
                        <div class="link-text">
                            <h2>Starting tutorials</h2>
                            <p>Here are the videos we'll use.</p>
                        </div>
                    </li>
                </a>
                <a href="#">
                    <li>
                        <img class="thumbnail" src="images/three.svg">
                        <div class="link-text">
                            <h2>Moving models</h2>
                            <p>Go from 3DSMax to Unity.</p>
                        </div>
                    </li>
                </a>
                <a href="#">
                    <li>
                        <img class="thumbnail" src="images/four.svg">
                        <div class="link-text">
                            <h2>Shortcuts</h2>
                            <p>Find a list of keyboard shortcuts here.</p>
                        </div>
                    </li>
                </a>
            </ul>
        </div>
    </div>
    `;
}

if(footer!=null) {  
    footer.innerHTML = 
    `
        <p>Copyright Dakshal P</p>
    `;
}