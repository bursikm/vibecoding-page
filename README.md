# Vstupní stránka – Claude AI vibe coding (ICT PRO)

Statická jednostránková upoutávka (landing page) na kurz **Claude AI – vibe coding a tvorba aplikací bez programování (CLVC)** od ICT PRO. Určená jako cílová stránka pro reklamní kampaně (Google Ads, Sklik, Meta Ads).

Obsah vychází z oficiální stránky kurzu: https://www.skoleni-ict.cz/kurz/Claude-AI-vibe-coding-a-tvorba-aplikaci-bez-programovani-CLVC.aspx

## Struktura

```
index.html          hlavní a jediná stránka
assets/style.css     styly
assets/script.js      rozklikávací osnova a FAQ
favicon.svg            ikonka v záložce
```

Čistě statický obsah – žádný build krok, žádné závislosti.

## Publikace na GitHub Pages

1. Nahrajte obsah této složky do GitHub repozitáře (větev `main`).
2. V repozitáři: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, větev `main`, složka `/ (root)`.
3. Po pár minutách bude stránka dostupná na `https://<uzivatel>.github.io/<repozitar>/`.

```bash
git init
git add index.html assets favicon.svg README.md
git commit -m "Vstupní stránka Claude AI vibe coding"
git branch -M main
git remote add origin <URL vašeho repozitáře>
git push -u origin main
```

## Měření konverzí z reklamy (doporučeno)

Stránka obsahuje v `index.html` zakomentovaný placeholder pro **Google Tag Manager** (hned v `<head>` a druhý blok hned po `<body>`). Po doplnění vlastního `GTM-XXXXXXX` ID a odkomentování obou bloků lze přes GTM bez dalšího zásahu do kódu napojit:

- Google Ads conversion tracking
- Sklik retargeting kód
- Meta Pixel

a měřit kliky na CTA tlačítka ("Přihlásit se") jako konverze.

Jakmile aktivujete GTM/pixely, doporučujeme doplnit i jednoduchý cookie consent banner (např. [Klaro.js](https://klaro.org/) nebo CookieConsent od Osano – oba fungují jako jeden `<script>` tag bez backendu) kvůli GDPR.

## Volitelně: zachycení kontaktu přímo na stránce

Aktuálně vedou všechna CTA tlačítka přímo na objednávkovou stránku kurzu na skoleni-ict.cz. Pokud byste chtěli zachytit kontakt (jméno, e-mail) ještě před odchodem na ICT PRO, lze snadno doplnit formulář přes bezplatnou službu [Formspree](https://formspree.io/) – funguje jen s `<form action="https://formspree.io/f/...">`, bez nutnosti vlastního backendu (GitHub Pages je čistě statický hosting).

## Barvy

Terakotová/korálová (`#D97757`) a zlatá (`#F2B84B`) na antracitové (`#141413`) a krémové (`#FAF9F5`) – bez modré, v souladu s brandem Claude/Anthropic.
