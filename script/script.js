document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const url = card.getAttribute("data-url");

    if (url) {
      window.open(url, "_blank"); // abre en nueva pestaña
      // window.location.href = url; // usa esto si quieres misma pestaña
    }
  });
});
