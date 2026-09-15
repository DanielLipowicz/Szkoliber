# Backlog startowy

Status: propozycje do wyboru · Źródło: S1 §3–5 i §9–13. Identyfikatory oraz podział na małe zadania są propozycją organizacji pracy.

Statusy zadań: do podjęcia, w toku, do recenzji, ukończone, wstrzymane. Ukończenie wymaga odnośnika do zaakceptowanego rezultatu. Utworzenie tego pliku nie oznacza utworzenia GitHub Issues.

## Pięć propozycji pierwszego wkładu

| ID | Zadanie | Gotowe, gdy | Właściciel / recenzent | Status |
| --- | --- | --- | --- | --- |
| START-01 | Recenzja karty projektu | Wskazano niejasności i propozycje korekt celu, zakresu i niecelów | Do przypisania | Do podjęcia |
| START-02 | Opis jednej czynności nauczyciela | Jest wyzwalacz, kroki, uczestnicy, wyjątki i kryterium poprawnego zakończenia; bez danych rzeczywistych | Do przypisania | Do podjęcia |
| START-03 | Recenzja agendy warsztatu | Reprezentant szkoły wskazał brakujące pytania i ryzyko sugerowania odpowiedzi | Do przypisania | Do podjęcia |
| START-04 | Przegląd dostępności landing page | Sprawdzono klawiaturę, fokus i powiększenie; opisano warunki testu i konkretne problemy lub wynik bez uwag | Do przypisania | Do podjęcia |
| START-05 | Szkic uprawnień jednej przykładowej wtyczki | Opisano minimalny dostęp, uzasadnienie, cofnięcie zgody i zachowanie po wyłączeniu | Do przypisania | Do podjęcia |

Każde zadanie należy ograniczyć do 60–120 minut pierwszego wkładu. Dalsze uwagi mogą stać się osobnym zadaniem. Recenzja prawa lub bezpieczeństwa nie jest automatycznie audytem ani akceptacją wdrożenia.

## Kolejka organizacyjna i badawcza

| ID | Priorytet | Zadanie | Warunek zakończenia | Zależność |
| --- | --- | --- | --- | --- |
| ORG-01 | P0 | Przyjąć kartę i pitch | Publiczna, zrecenzowana karta z zapisem decyzji | START-01 |
| ORG-02 | P0 | Przyjąć zasady współpracy | CONTRIBUTING, kodeks postępowania, governance i SECURITY z rzeczywistymi odpowiedzialnymi oraz działającymi kanałami | Właściciele decyzji |
| ORG-03 | P0 | Pozyskać współprowadzącego technicznego | Potwierdzony zakres odpowiedzialności i udział przez kwartał | Rozmowy |
| ORG-04 | P0 | Pozyskać przedstawicieli szkół | Dwie osoby potwierdziły warsztat lub recenzję | Rozmowy |
| BAD-01 | P0 | Przeprowadzić warsztat | Wyniki przyjęte przez uczestników i zanonimizowane do publikacji | ORG-04 |
| RFC-01 | P0 | Przygotować RFC wtyczek | API, granica rdzenia, uprawnienia, izolacja, kompatybilność i licencje mają propozycję i recenzentów | ORG-03, BAD-01 |
| ORG-05 | P1 | Spotkanie wprowadzające | Każdy uczestnik ma uzgodniony następny krok | Pierwsze zainteresowane osoby |
| BAD-02 | P1 | Uporządkować backlog produktu | Każda pozycja wskazuje proces lub hipotezę oraz kryteria odbioru | BAD-01 |
| JAK-01 | P1 | Zaplanować przegląd prawny i bezpieczeństwa | Zakres, osoba kompetentna i moment przeglądu są uzgodnione | Zespół |
| PRO-01 | P1 | Zdecydować o prototypie | Wszystkie warunki z planu startowego ocenione i decyzja zapisana | BAD-01, RFC-01, JAK-01 |

## Szablon szczegółowego zadania

- ID i tytuł:
- Problem / proces / hipoteza:
- Źródło potrzeby:
- Zakres i poza zakresem:
- Oczekiwany rezultat:
- Kryteria odbioru:
- Szacowany czas pierwszego wkładu:
- Właściciel i recenzent:
- Status, zależności i blokady:
- Link do issue / PR / wyniku:
