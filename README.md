# Szkoliber

Otwarta platforma dla szkół: wolny rdzeń, kontrola nad danymi, swoboda hostingu i rozszerzenia przez publiczne API.

**Etap: start projektu.** Budujemy społeczność i poznajemy potrzeby szkół. Nie ma jeszcze gotowego systemu do wdrożenia. Pierwsze około 12 tygodni to rekrutacja współtwórców, warsztaty i decyzja o prototypie.

## Landing page

Strona w języku polskim znajduje się w `docs/`. Jest statyczna, bez zależności, procesu budowania, śledzenia i zewnętrznych fontów. Działa bez JavaScriptu. Zasoby mają ścieżki względne zgodne z adresem projektu na GitHub Pages.

- `docs/index.html` — treści i sekcje strony.
- `docs/styles.css` — wygląd i układ mobilny.
- `docs/favicon.svg` — znak projektu.
- `.github/ISSUE_TEMPLATE/udzial.yml` — formularz zgłoszenia udziału, używany przez przyciski strony.

Podgląd: otwórz `docs/index.html` w przeglądarce lub uruchom `node scripts/preview.mjs` i wejdź na `http://localhost:4173/Szkoliber/`.

## Publikacja na GitHub Pages

1. Po przeglądzie zmian połącz gałąź z `master` i wypchnij do GitHuba.
2. W repozytorium wybierz **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Workflow **Publish landing page** wdroży zawartość `docs/` po zmianach na `master`. Jeśli pierwsze uruchomienie nastąpiło przed konfiguracją Pages, uruchom workflow ponownie z zakładki Actions.
4. Oczekiwany adres po udanym wdrożeniu: `https://daniellipowicz.github.io/Szkoliber/`. Potwierdź adres w wyniku workflow; samo dodanie plików nie publikuje strony.

Workflow publikuje wyłącznie `docs/`. Jeśli gałąź domyślna zostanie zmieniona, zaktualizuj oba wystąpienia `master` w `.github/workflows/pages.yml`.

[Dokumentacja konfiguracji GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Dołącz

[Zaproponuj wkład lub rozmowę o potrzebach szkoły](https://github.com/DanielLipowicz/Szkoliber/issues/new?template=udzial.yml).

Szukamy współprowadzącego technicznego, przedstawicieli szkół i osób wspierających technologię, UX, dostępność, bezpieczeństwo, prawo i dokumentację. Zgłoszenia wymagają konta GitHub i są publiczne. Nie umieszczaj w nich danych uczniów ani informacji poufnych. Repozytorium musi mieć włączone Issues; formularz pojawi się po dodaniu go do domyślnej gałęzi.

## Źródła treści

- [Plan uruchomienia projektu i pozyskania kontrybutorów](https://docs.google.com/document/d/1ji5vyCnJCS3VfcQeWWHHNTq2E99XxUJL6yvPPx4UTHQ/edit).
- [Plan produktu i realizacji](https://docs.google.com/document/d/1kTQu_27c7vBwrppIVYq7BXBtdieXMGNefSh22-w9Dzo/edit).

Dokumenty używają roboczej nazwy OpenDziennik; landing page stosuje nazwę Szkoliber. Plan startowy ma pierwszeństwo przed intensywnym harmonogramem budowy produktu z dokumentu długoterminowego. Liczby 1+, 2+ i 3+ to cele fazy, nie osiągnięte wyniki. Dalsze kamienie M0–M6 są warunkową wizją bez obietnic terminów. Strona opisuje założenia bezpieczeństwa i dostępności, nie certyfikowaną zgodność istniejącego produktu.

## Licencja

[Apache License 2.0](LICENSE).
