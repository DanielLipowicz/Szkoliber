# Dokumentacja robocza Szkolibra

Materiały do wspólnego rozwijania projektu przez szkoły, kontrybutorów i przyszłych operatorów.

**Status:** wersja robocza do przeglądu. Opracowano 15 września 2026 r. na podstawie dwóch dokumentów źródłowych odczytanych podczas przygotowania landing page. Nie jest to zapis zatwierdzenia przez zespół ani raport z przeprowadzonych warsztatów.

## Od czego zacząć

| Materiał | Do czego służy |
| --- | --- |
| [Karta projektu](KARTA_PROJEKTU.md) | Cel, zasady i granice przedsięwzięcia |
| [Plan startowy](PLAN_STARTOWY.md) | Pierwsze 12 tygodni, role i kryteria przejścia do prototypu |
| [Backlog startowy](BACKLOG.md) | Małe zadania z kryteriami ukończenia i miejscem na właściciela |
| [Warsztaty ze szkołami](WARSZTATY.md) | Agenda i szablon wyników badania potrzeb |
| [Dwie sesje Event Storming](EVENT_STORMING.md) | Big Picture, Process Level i przejście do BDD |
| [Plan produktu](PRODUKT.md) | Użytkownicy, zakres pilotażu i definicja gotowości |
| [Roadmapa](ROADMAPA.md) | Kamienie M0–M6 i warunki zakończenia etapów |
| [Architektura i wtyczki](ARCHITEKTURA.md) | Hipotezy techniczne i zakres pierwszej propozycji architektury |
| [Jakość i ryzyka](JAKOSC_I_RYZYKA.md) | Bezpieczeństwo, dostępność, migracja i utrzymanie |
| [Decyzje](DECYZJE.md) | Rejestr otwartych pytań i uzgodnień |
| [Szablon RFC](szablony/RFC.md) | Opis większej propozycji do wspólnej recenzji |
| [Zasady wkładu](../CONTRIBUTING.md) | Jak zgłosić zmianę lub pierwszy wkład |

## Jak pracować z materiałami

1. Wybierz zadanie, proces lub otwartą decyzję.
2. Wskaż źródło: rozmowę, wynik warsztatu, dokument albo hipotezę do sprawdzenia.
3. Zaproponuj zmianę przez pull request (PR), czyli prośbę o przegląd zmian w repozytorium.
4. Poproś odpowiednią osobę o recenzję. Decyzji dotyczących szkoły nie podejmujemy wyłącznie w gronie technicznym.
5. Po uzgodnieniu uaktualnij dokument i rejestr decyzji. Dodaj odnośnik do dyskusji oraz datę.

Statusy dokumentów i decyzji: **roboczy → do recenzji → przyjęty** albo **odrzucony / zastąpiony**. „Przyjęty” wymaga wskazania osób zatwierdzających i odnośnika do uzgodnienia. Puste pola oznaczają brak ustalenia. Checkboxy w planach oznaczają warunki do spełnienia, nie aktualne osiągnięcia projektu.

Materiały zawierają informacje przeznaczone do publicznego repozytorium. Dane kontaktowe uczestników, zgody, dane uczniów i poufne materiały szkół przechowujemy poza nim. Szablony przykładów wypełniamy danymi syntetycznymi.

## Źródła i interpretacja

- **S1:** plan uruchomienia projektu i pozyskania kontrybutorów. Jego lokalnym opracowaniem są [plan startowy](PLAN_STARTOWY.md), [backlog](BACKLOG.md) i [warsztaty](WARSZTATY.md).
- **S2:** plan produktu i realizacji otwartego systemu szkolnego. Jego lokalnym opracowaniem są [plan produktu](PRODUKT.md), [roadmapa](ROADMAPA.md), [architektura](ARCHITEKTURA.md) oraz [jakość i ryzyka](JAKOSC_I_RYZYKA.md).

Materiały są uporządkowanym opracowaniem, nie pełną kopią tekstów wyjściowych. Wszystkie odnośniki potrzebne do pracy prowadzą do plików w repozytorium. Roboczą nazwę OpenDziennik zastąpiono nazwą Szkoliber zgodnie z decyzją inicjatora. S1 wyznacza bieżący plan startu przy ograniczonej dostępności; intensywny plan 90 dni z S2 nie jest równoległym zobowiązaniem. Architektura, moduły i terminy S2 są hipotezami lub szacunkami dla przyszłego stabilnego zespołu. Tabele do uzupełnienia, identyfikatory i sposób organizacji plików są propozycją redakcyjną na potrzeby współpracy.

Źródła proponują CC BY 4.0 dla dokumentacji oraz osobną politykę znaków towarowych. Ich formalne przyjęcie pozostaje otwartą decyzją; ten pakiet nie zmienia istniejącego pliku LICENSE.
