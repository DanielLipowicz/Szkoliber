# Jakość, bezpieczeństwo i ryzyka

Status: plan wymagań i przeglądów · Źródła: S1 §6, §8 i §11; S2 §7–8, §11–13 i §15.

To materiał do planowania, nie opinia prawna ani potwierdzenie zgodności systemu. Wymagania formalne z dokumentów źródłowych trzeba zweryfikować z aktualnymi przepisami i kompetentnymi recenzentami przed odpowiednim wydaniem.

## Bezpieczeństwo i prywatność jako kryteria produktu

- Uprawnienia wynikają z roli i relacji do konkretnego obiektu, ucznia, rodziny oraz szkoły.
- Testy obejmują niedozwolone operacje, także między szkołami i po wygaśnięciu relacji opieki.
- Plan obejmuje MFA personelu, odzyskiwanie kont, ograniczenie sesji oraz ochronę przed automatycznymi próbami przejęcia kont.
- Historia zmian powinna pozwalać ustalić autora, czas, stan przed i po oraz powód tam, gdzie jest potrzebny.
- Transport i kopie wymagają ochrony; sekrety nie trafiają do repozytorium ani logów.
- Załączniki, rozszerzenia i zależności wymagają oceny pochodzenia, skanowania oraz możliwości wyłączenia.
- Telemetria projektu nie powinna zawierać danych uczniów ani treści wiadomości.
- Odpowiedzialność szkoły, operatora i projektu oraz zasady przetwarzania danych wymagają formalnego uzgodnienia przed pilotem.

## Przegląd formalny

Mapa wymagań powinna objąć m.in. dokumentację szkolną, selektywny dostęp, historię zmian, eksport i wydruki, utrwalanie i odczyt archiwum, retencję oraz role i umowy związane z przetwarzaniem danych. Dokument źródłowy wskazuje te obszary jako konieczne do ponownej weryfikacji, nie jako gotową specyfikację prawną.

| Wymaganie / pytanie | Aktualne źródło | Osoba kompetentna | Dowód testowy | Status |
| --- | --- | --- | --- | --- |
| Do uzupełnienia przed wydaniem formalnym | | | | Niezweryfikowane |

## Dostępność

Docelowo kluczowe ścieżki mają spełniać WCAG 2.2 AA jako cel produktowy ze źródła. Obowiązujące minimum formalne wymaga osobnego sprawdzenia. Odbiór obejmuje klawiaturę, czytnik ekranu, powiększenie, kontrast, fokus, komunikaty błędów i zrozumiałość treści. Test automatyczny jest pomocą, a nie pełnym odbiorem.

## Testy i wydania

- Reguły domeny → kontrakty API → integracja danych → krytyczne ścieżki użytkowników.
- Każdy znaleziony błąd danych lub uprawnień otrzymuje test zapobiegający powrotowi problemu.
- Osobne środowiska lokalne, integracyjne, demonstracyjne z danymi syntetycznymi, pilotażowe i produkcyjne.
- Aktualizacja musi mieć próbę przedwdrożeniową, kopię i plan postępowania przy błędzie migracji.
- Przed skalowaniem: próby obciążenia na początku lekcji, publikacji ocen i klasyfikacji.
- Kanały wydań i wsparcie długoterminowe wymagają wskazania odpowiedzialnych osób oraz finansowania.
- Prywatny kanał zgłaszania podatności i procedura publikacji poprawek muszą zostać faktycznie uruchomione przed wpisaniem ich jako obowiązującej polityki SECURITY.

## Migracja i odtworzenie

1. Zinwentaryzować legalnie dostępne eksporty, kategorie danych, dokumenty i wymagany okres przechowywania.
2. Uzgodnić mapowanie identyfikatorów i format pośredni; nie opierać rdzenia na scrapingu lub prywatnych interfejsach dostawcy.
3. Wykonać powtarzalny import próbny z raportem błędów i zachowaniem pochodzenia danych.
4. Porównać liczebności, sumy kontrolne i próbki uzgodnione z właścicielami procesów.
5. Sprawdzić pracę równoległą i plan odwrotu.
6. Wykonać migrację końcową, odbiór i monitoring.
7. Zamknąć plan odwrotu po uzgodnionym cyklu; źródłowe materiały migracyjne zabezpieczyć i usunąć zgodnie z uzgodnionymi zasadami.

Kopie muszą mieć sprawdzony proces odtworzenia. RPO określa tolerowaną utratę najnowszych danych, a RTO czas przywrócenia usługi. Ich wartości ustala szkoła z operatorem; nie przyjmujemy ich domyślnie w dokumentacji projektu.

## Rejestr ryzyk

Poniższe pozycje są ryzykami z planów, nie stwierdzonymi incydentami. Właściciele wszystkich pozycji: do przypisania.

| ID | Ryzyko / sygnał | Działanie ograniczające |
| --- | --- | --- |
| R01 | Zaległe recenzje i przeciążenie inicjatora | Ograniczyć zakres i kanały, pozyskać współprowadzącego |
| R02 | Brak reprezentantów szkół | Wstrzymać utrwalanie modelu domeny, skupić się na rozmowach |
| R03 | Dużo deklaracji, brak zakończonych wkładów | Zadania 60–120 minut i dostępny recenzent |
| R04 | Materiałów AI przybywa szybciej niż recenzji | Każdy rezultat ma ludzkiego właściciela i recenzenta |
| R05 | Zbyt szeroki MVP lub zbyt wczesne kodowanie | Powiązać zadanie z potwierdzonym procesem albo pytaniem badawczym |
| R06 | Niejasna granica rdzenia i wtyczek | RFC kontraktów i przegląd licencyjny przed katalogiem |
| R07 | Błędy w wymaganiach formalnych | Mapa wymagań i kompetentny przegląd przed odbiorem |
| R08 | Ujawnienie danych przez błędne uprawnienia | Model zagrożeń, testy negatywne i niezależny audyt |
| R09 | Trudny self-hosting lub porzucone instalacje | Próby instalacji i odtworzenia oraz plan aktualizacji i wsparcia |
| R10 | Zależność od jednego operatora | Publiczne API, formaty i sprawdzona migracja między operatorami |
| R11 | Niepełny eksport z poprzedniego systemu | Wczesna inwentaryzacja i uzgodnione ścieżki archiwizacji |
| R12 | Niska akceptacja nauczycieli | Obserwacje i testy rzeczywistych ścieżek przed rozbudową |
| R13 | Brak finansowania utrzymania i audytów | Zaplanować odpowiedzialność i budżet przed zobowiązaniami wdrożeniowymi |

## Szablon przeglądu ryzyka

- ID / data:
- Właściciel i recenzent:
- Dowód lub sygnał:
- Prawdopodobieństwo i wpływ z uzasadnieniem:
- Działanie, termin i dowód skuteczności:
- Ryzyko pozostałe i decyzja o akceptacji:
