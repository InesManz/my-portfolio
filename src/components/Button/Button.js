import "./Button.css";

/**
 * Botón reutilizable con icono Font Awesome.
 * (DIW: iconos obligatorios, sin usar imágenes como iconos)
 */
export const Button = (iconClass, text) => `
<button class="my-btn" type="button">
  <i class="${iconClass}" aria-hidden="true"></i>
  <span>${text}</span>
</button>
`;