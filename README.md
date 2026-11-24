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
| `assets/css/main.css` | Galvenais stils (HTML5 UP veidne, pielāgota) |
| `assets/css/site.css` | Krāsu palete un vietnes komponentes (skat. zemāk) |
| `assets/css/fonts.css`, `assets/fonts/` | Lato fonts, ielādēts no pašas vietnes |
| `assets/js/navigation.js` | Mobilā izvēlne un saliekamā sānjosla |

## Jaunas lapas pievienošana

Izveido failu, piemēram, `jauna-lapa.html`:

```html
---
layout: sidebar
title: Jaunā lapa        # parādās pārlūka cilnē: "Jaunā lapa | Aizupes pamatskola"
sidebar: school          # school | students | parents | projects
section: school          # kura galvenās izvēlnes poga ir izcelta
description: "Īss lapas apraksts (līdz ~155 zīmēm), ko rāda Google rezultātos."
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

## Krāsas un noformējums

Krāsas ir definētas vienuviet — `assets/css/site.css` sākumā (`--green`, `--orange`, `--blue`, `--red`, `--purple`, katrai ar `-dark` un `-tint`). Mainot tur, krāsa mainās visā vietnē.

Gatavas komponentes (krāsu izvēlas ar `accent-green`, `accent-orange`, `accent-blue`, `accent-red`, `accent-purple`):

```html
<div class="card accent-green">Balts bloks ar krāsainu kreiso malu</div>
<div class="callout accent-blue">Iekrāsots izcelts bloks</div>
<a class="btn accent-red" href="...">Poga</a>
```

Virsraksti: katrai lapai ir viens `<h1 class="page-title">` (izskatās kā sadaļas virsraksts), apakšvirsraksti — `<h2 class="h3">`.
Oranžam tekstam uz balta fona lieto `var(--orange-text)` (gaišais oranžais ir slikti salasāms).

## Meklētājprogrammas (Google)

- `/sitemap.xml` tiek ģenerēts automātiski (spraudnis `jekyll-sitemap`); `robots.txt` norāda uz to.
- Katrai lapai galvenē ir `description` — tas parādās zem saites Google rezultātos.
- Melnrakstiem, ko nav paredzēts rādīt meklētājos, galvenē pievieno `sitemap: false` un `noindex: true`.
- Sākumlapā ir strukturēti dati par skolu (`_includes/school-data.html`) — adrese, tālrunis, darba laiks.
  Ja kontakti mainās, jāatjauno arī tur un `_includes/footer.html`.

## Pārbaude

Katrs pull request automātiski tiek uzbūvēts (`.github/workflows/check-site.yml`);
gatavo vietni var lejupielādēt kā artefaktu `website-preview` darbības lapā.

Dizaina pamatā ir [Minimaxing by HTML5 UP](https://html5up.net/minimaxing) (CC BY 3.0).
