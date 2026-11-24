# Aizupes pamatskolas mājaslapa

Vietne darbojas ar GitHub Pages (Jekyll) un ir pieejama adresē <https://aizupe.lv>.

## Kā viss ir sakārtots

| Kur | Kas tur ir |
|---|---|
| `_layouts/default.html` | Kopējais lapas karkass: `<head>`, galvene, kājene, skripti |
| `_layouts/sidebar.html` | Karkass lapām ar sānjoslu kreisajā pusē |
| `_includes/header.html` | Galvene un galvenā izvēlne |
| `_includes/footer.html` | Kājene (kontakti, adrese) |
| `_includes/sidebar.html` | Sānjosla, ko zīmē no `_data/sidebars.yml` |
| `_data/sidebars.yml` | **Visu sānjoslu saites** — rediģē šeit, nevis katrā lapā |
| `assets/css/main.css` | Galvenais stils |
| `assets/js/navigation.js` | Mobilā izvēlne un saliekamā sānjosla |

## Jaunas lapas pievienošana

Izveido failu, piemēram, `jauna-lapa.html`:

```html
---
layout: sidebar
title: Jaunā lapa        # parādās pārlūka cilnē: "Jaunā lapa | Aizupes pamatskola"
sidebar: school          # school | students | parents | projects
section: school          # kura galvenās izvēlnes poga ir izcelta
---
<section>
  <h2>Virsraksts</h2>
  <p>Saturs...</p>
</section>
```

Tad pievieno saiti uz to `_data/sidebars.yml` attiecīgajā grupā.

Lapai bez sānjoslas lieto `layout: default` un pats saturs sākas ar `<div id="main">...`.

Papildu iespējas galvenē: `css: [fails.css]` un `scripts: [fails.js]` (no `assets/css/` un `assets/js/`),
`sidebar_current: lapa.html`, ja sānjoslā jāizceļ cita lapa (piem., rakstam projekta iekšienē).

## Pārbaude

Katrs pull request automātiski tiek uzbūvēts (`.github/workflows/check-site.yml`);
gatavo vietni var lejupielādēt kā artefaktu `website-preview` darbības lapā.

Dizaina pamatā ir [Minimaxing by HTML5 UP](https://html5up.net/minimaxing) (CC BY 3.0).
