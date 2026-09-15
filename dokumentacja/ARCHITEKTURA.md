# Architektura i system wtyczek

Status: hipotezy, bez zatwierdzonego stosu · Źródła: S1 §8 i §12, S2 §4 i §9.

## Kierunek referencyjny

Początek jako modularny monolit: jedna aplikacja z wyraźnymi granicami modułów, publicznymi kontraktami i możliwie prostą instalacją. Podział na oddzielne usługi wymaga uzasadnienia realnymi potrzebami. Model domeny powstaje po warsztatach, nie przez przepisanie listy ekranów.

| Warstwa | Kandydat ze źródła | Pytanie przed wyborem |
| --- | --- | --- |
| Interfejs | React / TypeScript, responsywny web / PWA | Kompetencje, dostępność, złożoność utrzymania |
| Backend | Java LTS + Spring Boot lub równoważny dojrzały stos | Koszt i umiejętności przyszłego zespołu |
| Tożsamość | OIDC/OAuth2, referencyjnie Keycloak | Instalacja, MFA, odzyskanie konta i federacja |
| Dane | PostgreSQL i migracje schematu | Transakcje, izolacja szkół i odtworzenie |
| Pliki | Magazyn zgodny z S3 | Koszt, skanowanie i przechowywanie załączników |
| Zadania | Kolejka / Redis i transactional outbox | Jak uniknąć utraty powiadomienia po zapisie danych? |
| Obserwowalność | OpenTelemetry, metryki i logi | Jak diagnozować bez ujawniania treści szkolnych? |
| Wdrożenie | Docker Compose, później Helm | Czy szkoła odtworzy instalację z dokumentacji? |

Transactional outbox oznacza zapis zdarzenia do wysłania w tej samej transakcji co zmiana danych, a potem jego niezawodne przetworzenie. To propozycja mechanizmu, nie istniejąca implementacja.

## Hipotezy granic domeny

- Organizacja szkoły i rok szkolny.
- Tożsamość, role i relacje opieki.
- Plan oraz realizacja zajęć.
- Frekwencja i decyzje o nieobecnościach.
- Ocenianie, klasyfikacja i zatwierdzanie.
- Komunikacja i odbiorcy.
- Zadania, terminy i materiały ucznia.
- Dokumenty, raporty i migracja.
- Historia zmian, integralność i zgodność.
- Integracje, rozszerzenia i publiczne API.

Przed utrwaleniem podziału każda domena wymaga powiązania z procesem szkolnym, właścicielem oraz krytycznymi wyjątkami.

## Izolacja danych

Instalacja jednej szkoły jest najprostszym wariantem. Dla wielu szkół należy ocenić osobną bazę na szkołę oraz wspólną bazę z wymuszoną izolacją. Testy muszą próbować dostępu między szkołami, uczniami i rodzinami, a nie tylko sprawdzać role. Uprawnienie administratora operatora nie powinno automatycznie oznaczać wglądu w treści szkolne.

## Pierwszy RFC wtyczek

RFC (propozycja do wspólnej recenzji) ma ustalić kontrakty i ryzyka. Katalog wtyczek nie jest celem fazy startowej.

- [ ] Granica użytecznego rdzenia i rozszerzeń, w tym operacje zastrzeżone dla rdzenia.
- [ ] Publiczne, wersjonowane API i polityka zgodności.
- [ ] Manifest minimalnych uprawnień, zgoda administratora i widoczny zakres danych.
- [ ] Izolacja procesu lub usługi adekwatna do ryzyka.
- [ ] Instalacja, aktualizacja, wyłączenie, wycofanie i odzyskiwanie po błędzie.
- [ ] Autorstwo, podpisywanie paczek, zależności i informacje o podatnościach.
- [ ] Zasady telemetrii bez niejawnego dostępu do danych uczniów.
- [ ] Dystrybucja niezależna od jednego centralnego katalogu.
- [ ] Równe kontrakty dla rozszerzeń otwartych i komercyjnych.
- [ ] Kompetentny przegląd licencji rdzenia i wtyczek, pliku NOTICE i obowiązków autorów.

**Proponowane kryterium odbioru:** dwóch niezależnych autorów może przygotować różne wtyczki na podstawie tej samej dokumentacji. Administrator widzi autora, wersję, uprawnienia i sposób natychmiastowego wyłączenia wtyczki.

## Szablon eksperymentu technicznego

- Jedno pytanie badawcze:
- Proces / ryzyko potwierdzone przez warsztat:
- Najmniejszy eksperyment i limit czasu:
- Wyłącznie dane syntetyczne:
- Mierzalne kryterium zakończenia:
- Właściciel i recenzenci:
- Wynik i ograniczenia:
- Decyzja oraz odnośnik do RFC:
