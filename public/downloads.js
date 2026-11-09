// Installer download links, keyed by tool. This is the only place to change them.
// Leave a link empty ("") to show that tool's Download Installer button as disabled.
var DOWNLOADS = {
  factorstrat: "https://simonkuchernam-my.sharepoint.com/:u:/g/personal/sofia_moreno_simon-kucher_com/IQDMJLlr9MRVSKm5h5Ok9LLkAfHkgsgtHatnsY-LkGlI-aE?e=rWrXab&download=1",
  quickwins: "",
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
