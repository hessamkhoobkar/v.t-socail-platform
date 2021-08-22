document.addEventListener("DOMContentLoaded", function () {
  const offcanvasToggles = document.querySelectorAll("[offcanvas-switch]");

  offcanvasToggles.forEach((offcanvasToggle) => {
    offcanvasToggle.addEventListener("click", function () {
      const targetPanel = offcanvasToggle.getAttribute("offcanvas-target");
      const offcanvasPanel = document.querySelector(
        `[is-offcanvas-target="${targetPanel}"]`
      );

      offcanvasPanel.classList.toggle("hidden");
      offcanvasPanel.classList.toggle("visible");
    });
  });
  console.log(offcanvasToggles);
});
