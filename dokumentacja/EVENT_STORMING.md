# Plan dwóch sesji Event Storming

Status: plan roboczy do uzgodnienia z uczestnikami.

## Cel

Dwie sesje mają najpierw pokazać pełny obraz pracy szkoły, a następnie dokładnie opisać jeden proces wybrany do dalszego discovery. Wyniki mają pomóc ustalić granice pierwszego prototypu i przygotować późniejsze warsztaty BDD.

Event Storming służy odkrywaniu procesów i języka domeny. Podczas sesji nie projektujemy ekranów, tabel bazy danych ani docelowych modułów technicznych.

## Zakres obu sesji

| Sesja | Pytanie przewodnie | Rezultat |
| --- | --- | --- |
| 1. Big Picture | Co dzieje się w szkole od przygotowania roku i planu zajęć do zakończenia klasyfikacji? | Mapa procesów, problemów, ról i systemów oraz wybór procesu do pogłębienia |
| 2. Process Level | Jak dokładnie przebiega wybrany proces, jakie decyzje w nim zapadają i co może pójść inaczej? | Szczegółowy przebieg, reguły, wyjątki, pytania i materiał wejściowy do BDD |

Między sesjami prowadzący porządkuje mapę bez usuwania rozbieżności. Uczestnicy mają co najmniej dwa dni robocze na zgłoszenie błędów i braków.

## Uczestnicy i role

Optymalnie 6–10 osób:

- dyrekcja,
- sekretariat lub administracja,
- nauczyciel,
- wychowawca,
- pedagog lub inny specjalista szkolny,
- administrator IT,
- opcjonalnie przedstawiciel uczniów lub opiekunów,
- osoba prowadząca,
- osoba dokumentująca.

Na drugą sesję zapraszamy przede wszystkim osoby wykonujące i zatwierdzające wybrany proces. Jeśli proces dotyczy danych osobowych lub dokumentacji formalnej, należy zaplanować późniejszą recenzję osoby kompetentnej w zakresie prywatności lub prawa. Jej nieobecność nie może zostać potraktowana jako akceptacja.

## Odpowiedzialności

| Rola warsztatowa | Odpowiedzialność |
| --- | --- |
| Prowadzący | Pilnuje celu, czasu, neutralności i wspólnego języka |
| Eksperci szkolni | Opisują rzeczywistą pracę, wyjątki i obejścia |
| Dokumentujący | Zachowuje mapę, pytania, decyzje i listę uczestniczących ról |
| Obserwator techniczny | Zadaje pytania, ale nie narzuca architektury ani nazw modułów |
| Recenzent po stronie szkoły | Po sesji potwierdza poprawność opisu albo wskazuje poprawki |

## Przygotowanie

### Ustalenia organizacyjne

- [ ] Ustal daty obu sesji, uczestników, miejsce i narzędzie.
- [ ] Wyznacz prowadzącego, dokumentującego i recenzenta po stronie szkoły.
- [ ] Uzgodnij, które wyniki mogą zostać opublikowane.
- [ ] Wyjaśnij, że nie zapisujemy danych uczniów, danych kontaktowych ani poufnych informacji szkoły.
- [ ] Zarezerwuj 3,5–4 godziny na sesję pierwszą i 2,5–3 godziny na sesję drugą.
- [ ] Zaplanuj przerwę oraz krótkie wprowadzenie dla osób nieznających metody.

### Legenda mapy

Kolory można zmienić, ale legenda musi być widoczna przez cały warsztat.

| Kolor | Znaczenie | Forma zapisu |
| --- | --- | --- |
| Pomarańczowy | Zdarzenie domenowe | Czas przeszły, np. „Frekwencja została zapisana” |
| Niebieski | Polecenie lub działanie | Tryb rozkazujący, np. „Zapisz frekwencję” |
| Żółty | Osoba lub rola | Nazwa roli, nie konkretnej osoby |
| Fioletowy | Reguła lub decyzja | Warunek wpływający na dalszy przebieg |
| Różowy | Problem, ryzyko lub pytanie | Jedno zagadnienie na karteczkę |
| Zielony | Dokument, informacja lub system zewnętrzny | Nazwa potrzebnego źródła informacji |

## Sesja 1 — Big Picture

**Czas:** 3 godziny 40 minut wraz z przerwą.

**Pytanie przewodnie:** Co dzieje się w szkole od przygotowania roku i planu zajęć do zakończenia okresu klasyfikacyjnego?

### Agenda

| Czas | Etap | Działanie i rezultat |
| --- | --- | --- |
| 15 min | Otwarcie | Cel, zakres, legenda, zasady bezpieczeństwa informacji i definicja udanej sesji |
| 25 min | Cicha praca | Każdy zapisuje ważne zdarzenia domenowe bez konsultowania się z grupą |
| 35 min | Oś czasu | Grupa układa zdarzenia chronologicznie, łączy duplikaty i zachowuje sprzeczne wersje |
| 25 min | Problemy | Uczestnicy zaznaczają ręczne obejścia, podwójne wpisywanie, błędy, opóźnienia i niejasną odpowiedzialność |
| 10 min | Przerwa | — |
| 35 min | Działania i role | Do kluczowych zdarzeń dodawane są polecenia, wykonawcy, osoby zatwierdzające i odbiorcy informacji |
| 30 min | Reguły i wyjątki | Grupa zapisuje warunki, warianty, korekty i wszystkie odpowiedzi „to zależy” |
| 20 min | Systemy i dane | Zaznaczane są dokumenty, przepływy danych, papier, arkusze i obecne systemy |
| 25 min | Głosowanie | Każdy wybiera najbardziej bolesny proces, największe ryzyko i najlepszego kandydata do prototypu |
| 20 min | Podsumowanie | Wybór procesu do sesji drugiej, właściciele pytań, recenzent i termin weryfikacji mapy |

### Zasady prowadzenia

- Zdarzenia opisujemy w czasie przeszłym, bez nazw ekranów i komponentów.
- Najpierw budujemy oś zdarzeń, potem rozmawiamy o rozwiązaniach.
- Rozbieżności zaznaczamy; nie wymuszamy kompromisu bez dowodów.
- Stan faktyczny, obejścia i praca poza systemem są częścią procesu.
- Lista modułów Szkolibra nie jest punktem wyjścia do mapowania.
- Prowadzący zatrzymuje rozmowę o architekturze i zapisuje ją na osobnej liście tematów technicznych.

### Pytania pomocnicze

- Co uruchamia dany proces?
- Co musi wydarzyć się wcześniej?
- Kto wykonuje działanie, a kto zatwierdza wynik?
- Co dzieje się w przypadku błędu, nieobecności pracownika lub braku dostępu?
- Które dane są przepisywane między systemami?
- W którym miejscu szkoła traci najwięcej czasu lub kontroli?
- Które zdarzenia muszą mieć zachowaną historię?

### Kryteria zakończenia sesji pierwszej

- [ ] Powstała wspólna oś najważniejszych zdarzeń.
- [ ] Zaznaczono problemy, wyjątki, role, dokumenty i używane systemy.
- [ ] Sprzeczne wersje procesu pozostały widoczne i mają właściciela wyjaśnienia.
- [ ] Wybrano jeden proces do sesji Process Level oraz proces rezerwowy.
- [ ] Wybór ma uzasadnienie: wartość dla użytkownika, ryzyko i możliwość ograniczenia zakresu.
- [ ] Wskazano brakujące role, pytania i osoby odpowiedzialne za odpowiedzi.
- [ ] Ustalono recenzenta oraz termin weryfikacji mapy.

### Kandydat do pogłębienia

Jeżeli głosowanie nie wskaże wyraźnie innego procesu, punktem wyjścia może być:

> zaplanowana lekcja → przeprowadzenie lekcji → zapis frekwencji → korekta → udostępnienie wyniku uprawnionym osobom.

To propozycja organizacyjna, nie decyzja podjęta przed warsztatem.

## Praca między sesjami

Prowadzący i dokumentujący:

1. zapisują cyfrową kopię mapy i jej wersję źródłową,
2. ujednolicają pisownię, ale nie zmieniają znaczenia zdarzeń,
3. tworzą słownik niejednoznacznych pojęć,
4. grupują pytania według właścicieli,
5. opisują kryteria wyboru procesu do sesji drugiej,
6. przesyłają zapis uczestnikom do weryfikacji,
7. nanoszą poprawki z informacją, kto je zgłosił.

Przed drugą sesją trzeba potwierdzić jej początek, koniec, uczestniczące role oraz dostępność osoby, która zna wyjątki w tym procesie.

## Sesja 2 — Process Level

**Czas:** 2 godziny 45 minut wraz z przerwą.

**Pytanie przewodnie:** Jak dokładnie przebiega wybrany proces, jakie decyzje w nim zapadają i co dzieje się w sytuacjach nietypowych?

### Agenda

| Czas | Etap | Działanie i rezultat |
| --- | --- | --- |
| 10 min | Otwarcie | Przypomnienie celu, granic procesu i ustaleń z pierwszej sesji |
| 20 min | Ścieżka podstawowa | Ułożenie minimalnego poprawnego przebiegu od wyzwalacza do wyniku |
| 25 min | Polecenia i wykonawcy | Powiązanie każdego zdarzenia z działaniem, rolą i potrzebnymi informacjami |
| 30 min | Reguły decyzji | Zapis warunków, terminów, uprawnień i punktów zatwierdzenia |
| 10 min | Przerwa | — |
| 30 min | Warianty i błędy | Alternatywne ścieżki, korekty, odmowy, brak danych i awarie |
| 20 min | Granice i zależności | Wskazanie odpowiedzialności procesu, powiązań oraz kandydatów na osobne obszary domenowe |
| 20 min | Pytania i ryzyka | Ocena brakujących informacji, prywatności, audytu i wymogów formalnych |
| 20 min | Podsumowanie | Wybór przykładów do BDD, właściciele pytań i kryteria gotowości do dalszej pracy |

### Pytania dla każdego kroku

- Jaki stan lub zdarzenie pozwala wykonać działanie?
- Kto może je wykonać, a kto nie może?
- Jakiej informacji potrzebuje ta osoba?
- Jaka reguła decyduje o wyniku?
- Jakie zdarzenie potwierdza zakończenie?
- Co zostaje zapisane w historii?
- Co dzieje się przy pomyłce, opóźnieniu, zastępstwie lub wygaśnięciu uprawnienia?
- Kogo trzeba poinformować i kiedy?

### Kryteria zakończenia sesji drugiej

- [ ] Proces ma jawny początek, koniec i właściciela biznesowego.
- [ ] Opisano ścieżkę podstawową oraz istotne warianty i błędy.
- [ ] Każde kluczowe zdarzenie ma polecenie, wykonawcę i potrzebne informacje.
- [ ] Reguły, terminy, uprawnienia, korekty oraz punkty zatwierdzania są zapisane albo oznaczone jako pytania.
- [ ] Ustalono, co należy do procesu, a co jest zależnością zewnętrzną.
- [ ] Wybrano przykłady zwykłe, graniczne i niedozwolone do późniejszego warsztatu BDD.
- [ ] Pytania prawne, prywatności i bezpieczeństwa mają właścicieli; nie są uznane za rozstrzygnięte bez właściwej recenzji.
- [ ] Ekspert szkolny ma wskazany termin zatwierdzenia lub poprawienia mapy.

## Wyniki do zapisania w repozytorium

W repozytorium publikujemy wyłącznie treści uzgodnione i pozbawione danych osobowych:

- eksport lub zdjęcie mapy dopuszczone do publikacji,
- opis zakresu i reprezentowanych ról,
- słownik pojęć,
- lista procesów i problemów z sesji pierwszej,
- szczegółowy opis wybranego procesu,
- reguły, wyjątki i pytania otwarte,
- decyzję o kolejnym kroku wraz z uzasadnieniem,
- odnośniki do zadań, RFC i scenariuszy BDD powstałych na podstawie warsztatu.

## Szablon raportu

### Informacje o sesji

- Typ sesji: Big Picture / Process Level.
- Data i czas:
- Prowadzący i dokumentujący:
- Reprezentowane role:
- Zakres dopuszczony do publikacji:
- Status recenzji po stronie szkoły:

### Zakres i rezultat

- Pytanie przewodnie:
- Początek i koniec analizowanego obszaru:
- Najważniejsze odkrycia:
- Wybrany proces / następny krok:
- Uzasadnienie wyboru:

### Pytania i działania

| ID | Pytanie lub problem | Właściciel odpowiedzi | Termin | Wynik / odnośnik |
| --- | --- | --- | --- | --- |
| ES-01 | | | | |

### Recenzja

- Zgłoszone poprawki:
- Osoba zatwierdzająca po stronie szkoły:
- Data i status zatwierdzenia:
- Powiązany issue / PR / RFC:

## Dalszy krok: BDD

Event Storming dostarcza mapę procesu i pytania. Warsztat BDD powinien dotyczyć jednego zachowania z mapy, a nie całego modułu. Reguły i przykłady z sesji Process Level należy przełożyć na Example Mapping, a następnie na niewielki zestaw scenariuszy akceptacyjnych. Dopiero zaakceptowane przykłady mogą wyznaczyć zakres prototypu.
