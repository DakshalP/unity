/* 
Creating a static webpage, so cannot use any server-side code. 
That's why I'm using this client-side JS to render header and footer divs.
*/

const header = document.querySelector("#header");
const footer = document.querySelector("#footer");
if(header!=null) { 
    header.innerHTML = 
    `
    <p>Hello</p>
    `;
}

if(footer!=null) {  
    footer.innerHTML = 
    `
        <p>Copyright Dakshal P</p>
    `;
}