// Installer download links, keyed by tool. This is the only place to change them.
// Leave a link empty ("") to show that tool's Download Installer button as disabled.
var DOWNLOADS = {
  factorstrat: "https://simonkuchernam-my.sharepoint.com/:u:/g/personal/sofia_moreno_simon-kucher_com/IQDLuyfoN9FWQoQKf4yON_GoAaTVu6ReS4o-saP2HETmc4g?e=PIuNKO&download=1",
  quickwins: "https://simonkuchernam-my.sharepoint.com/:u:/g/personal/sofia_moreno_simon-kucher_com/IQB1r2fUb_lESYVgGaxSffnpARtFgg7BDk0cLOBOByeFN78?e=FhxDKq&download=1",
  compol: ""
};

// Point every <a data-download="tool"> at its installer link
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[data-download]").forEach(function (link) {
    var url = DOWNLOADS[link.getAttribute("data-download")];
    if (url) {
      link.href = url;
      link.classList.remove("is-disabled");
      link.removeAttribute("aria-disabled");
    } else {
      link.removeAttribute("href");
      link.classList.add("is-disabled");
      link.setAttribute("aria-disabled", "true");
    }
  });
});
