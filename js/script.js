// Highlight the nav link of the current page
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav:not(.subnav) a").forEach(link => {
  link.classList.toggle("active", link.getAttribute("href") === current);
});
