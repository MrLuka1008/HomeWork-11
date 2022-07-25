const navLinks = ["About us", "Services", "Projects", "Contact us"];
const navLinksTag = [
  "about.html",
  "services.html",
  "projects.html",
  "contactus.html",
];
let navlength = navLinks.length;

let ulstart = "<ul>";

for (let i = 0; i < navlength; i++) {
  ulstart += `<li><a href=` + navLinksTag[i] + `>` + navLinks[i] + `</a></li>`;
}

ulstart += "</ul>";

document.getElementById("nav-links").innerHTML = ulstart;
