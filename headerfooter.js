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
        <div class="links list">
            <h3>Menu</h3>
            <ul>
                <a href="one.html">
                    <li>
                        <img class="thumbnail" src="images/one.svg">
                        <div class="list-text">
                            <h2>Intro to Unity</h2>
                            <p>What is Unity? Find out here.</p>
                        </div>
                    </li>
                </a>
                <a href="two.html">
                    <li>
                        <img class="thumbnail" src="images/two.svg">
                        <div class="list-text">
                            <h2>Starting tutorials</h2>
                            <p>Here are the videos we'll use.</p>
                        </div>
                    </li>
                </a>
                <a href="three.html">
                    <li>
                        <img class="thumbnail" src="images/three.svg">
                        <div class="list-text">
                            <h2>Moving models</h2>
                            <p>Go from 3DSMax to Unity.</p>
                        </div>
                    </li>
                </a>
                <a href="four.html">
                    <li>
                        <img class="thumbnail" src="images/four.svg">
                        <div class="list-text">
                            <h2>Shortcuts</h2>
                            <p>Keyboard shortcuts make your life easier.</p>
                        </div>
                    </li>
                </a>
            </ul>
            <h3>Extras</h3>
            <ul>
                <a href="installUnity.html"><li>How to install Unity</li></a>
                <a href="installVsCode.html"><li>How to install Vs Code</li></a>
            </ul>
        </div>
    </div>
    `;
}

if(footer!=null) {  
    footer.innerHTML = 
    `
        <div class="modal">
            <div class="modal-content">
                <img src="images/dev.png" style="width: 160px; height: 160px">
                <h4>Made by <strong>Dakshal P</strong> for <strong>NBTHS</strong> Gaming and Animation Classes</h4>
                <div class="close-button">Ok</div>
            </div>
        </div>
        <a style="cursor: pointer" class="trigger"><h3>Coded by Dakshal P | © Dakshal P</h3></a>
    `;
}