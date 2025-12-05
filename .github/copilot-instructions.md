# Copilot Instructions for esimesi.github.io

## Architecture & Structure
- **Type:** Static website hosted on GitHub Pages.
- **Pattern:** Multi-page architecture where each page (`index.html`, `menu.html`, `contacts.html`) functions independently with its own specific CSS and JS files.
- **Key Files:**
  - `index.html`: Homepage, uses `style.css` and `homepage.js`.
  - `menu.html`: Menu page, uses `menu.css` and `script.js`. Contains extensive inline HTML for menu items.
  - `contacts.html`: Contact/Order page, uses `contacts.css`.
- **Shared Assets:** Images in `icons/`, `pictures/`, `video/`.

## Development Patterns
- **HTML:**
  - **Duplication:** Common elements like the Header (logo, navigation) and Footer are **duplicated** across HTML files. When updating the header/footer, you must update ALL HTML files (`index.html`, `menu.html`, `contacts.html`).
  - **Libraries:** Uses CDN links for Swiper (carousel) and Leaflet (maps).
- **CSS:**
  - Styles are generally page-specific (`menu.css` for `menu.html`).
  - CSS resets and base styles are often repeated in each CSS file.
  - `style.css` serves as the base for the homepage.
- **JavaScript:**
  - `script.js`: Contains logic for sticky headers and scrolling (used in `menu.html`).
  - `homepage.js`: Specific logic for the homepage.
  - **Maps:** Leaflet map initialization is often done via **inline scripts** at the bottom of the HTML files (e.g., `menu.html`, `contacts.html`).

## Workflows
- **Local Development:** Use a simple static server (e.g., VS Code Live Server extension) to preview changes.
- **Deployment:** Automatic via GitHub Pages on push to `main`. No build step required.

## Conventions
- **Naming:** Keep page-specific assets named after the page (e.g., `page.html` -> `page.css`, `page.js`).
- **Maps:** When editing map logic, look for the inline `<script>` tag at the bottom of the HTML file, not just external JS files.
- **Responsiveness:** Mobile menu logic (hamburger toggle) is implemented via Checkbox Hack (`#toggle-menu`) and JS event listeners. Ensure changes work on mobile viewports.
