
// SCROLL EVENT 
const header = document.getElementById("header")

const stickNavbar = () => {
    if (window !== undefined) {
        let windowHeight = window.scrollY;
        // window height changed for the demo
        if (windowHeight > 100) {
            header.classList.remove("fixed");
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
            header.classList.add("fixed");
        };
    };
};

window.addEventListener('scroll', stickNavbar);
// SCROLL EVENT 


// collapsible button
const open = document.getElementById("nav-btn");
const sidebar = document.querySelector(".sidebar");

let handleClick = false; 

open.addEventListener("click", () => {
    sidebar.classList.add("active");
    handleClick = true;
    // close on click close icon
    const close = document.getElementById("side-btn");
    close.addEventListener("click", () => {
        handleClick = false;
        sidebar.classList.remove("active");
    })

    // close on click outside sidebar 
    if (handleClick) {
        window.addEventListener("click", (e) => {
            if ((e.target.id !== "sidebar") && e.target.id !== "nav-btn") {
                handleClick = false;
                sidebar.classList.remove("active");
            }
        })
    }
})
