# _Danshari_
A blank slate theme for Shopify 2.0 with Tailwind CSS

> **_Danshari (<ruby>断捨離<rt>だんしゃり</rt></ruby>)_**<br>
> _n._ Decluttering, clearing out past accumulation, minimalism.

## Demo
- [Live demo](https://human-dev.myshopify.com/) (Password: `tacos`)
- CSS utility classes demo (`sections/demo-css.liquid`)
- Richtext demo (`sections/css-richtext.liquid`)

## Global Settings
Configured in `config/settings_schema.json` and defined as CSS custom properties in `assets/root.css.liquid`.

- **Colors**
- **Typography**
- **Miscellaneous**
  - Logos & Favicon
  - [Predictive Search](https://shopify.dev/api/ajax/reference/predictive-search) feature enabled by default

## Tailwind CSS
Run Yarn scripts to watch/build Tailwind CSS
- Watch: `yarn css:watch`
- Build: `yarn css:build`

## Default Styles
Danshari is a minimally styled theme. However, the following pages are applied default styles:
- Login, Register and Account related pages ([/account](https://human-dev.myshopify.com/account))
- Cart page ([/cart](https://human-dev.myshopify.com/cart))
- Blog page & Articles
- Search results page

## Media Queries
VS Code snippets (defined in `.vscode/danshari.code-snippets`) included for improved developer experience.

| Snippet | Breakpoint |
| - | - |
| `media mobile` | ≤ 428px |
| `media tablet-and-up` | ≥ 429px |
| `media tablet` | ≤ 768px |
| `media desktop-and-up` | ≥ 769px |
| `media desktop` | ≤ 1280px |
| `media large` | ≥ 1281px |

## Snippets

### `srcset`
Automatically generates `srcset`, `src`, `width` and `height` attributes for `<img>` tags.

Example usage:
```liquid
<img
  {% render 'srcset', image: section.settings.image, width: 1000 %}
  alt="..." loading="lazy"
/>
```

| Props | Description |
| - | - |
| `image` | Shopify image object. Required. |
| `width`? | Max width of the image to display. |

### `quantity-selector`
Renders a product quantity selector.

| Props | Description |
| - | - |
| `name` | `name` attribute for the input. Required. |
| `id`? | `id` attribute for the input. (Default: "qty") |
| `value`? | Initial value. (Default: 1) |
| `label`? | Show a text label above the inputs. |
