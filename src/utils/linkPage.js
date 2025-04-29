export const linkPage = (id, page) => {
  const link = document.querySelector(id);
  if (!link) {
    console.warn(`No se encontró el enlace con id: ${id}`);
    return;
  }

  link.addEventListener("click", (e) => {
    e.preventDefault();
    page();
  });
};
