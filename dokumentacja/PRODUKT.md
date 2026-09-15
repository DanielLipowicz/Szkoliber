# Plan produktu

Status: hipoteza do walidacji ze szkołami · Źródło: S2 §1–5, §12 i §15. Rozwój produktu następuje po [bramie prototypu](PLAN_STARTOWY.md#brama-rozpoczęcia-prototypu).

## Użytkownicy i ryzyka

| Rola | Kluczowe czynności | Ryzyko do sprawdzenia |
| --- | --- | --- |
| Nauczyciel | Plan dnia, temat, frekwencja, oceny, zadania | Zbyt wiele czynności podczas lekcji |
| Wychowawca | Frekwencja klasy, usprawiedliwienia, kontakt z opiekunami | Brak historii decyzji i niespójne uprawnienia |
| Opiekun | Plan, oceny, wiadomości, wnioski, przełączanie dzieci | Dostęp do danych innego dziecka lub rodziny |
| Uczeń | Plan, zadania, terminy, materiały i komunikaty | Nieczytelność na telefonie i nadmiar powiadomień |
| Dyrekcja | Konfiguracja, klasyfikacja, raporty, eksport | Brak dowodów kompletności i integralności |
| Administrator | Konta, role, aktualizacje, kopie i diagnostyka | Trudne odtworzenie lub błędna konfiguracja |
| Operator | Izolacja szkół, monitoring i wsparcie | Mieszanie danych szkół lub zależność od dostawcy |

## Cel pilotażowego MVP

MVP, czyli pierwsza ograniczona wersja do sprawdzenia z użytkownikami, ma pozwolić jednej szkole przetestować codzienne czynności przez kilka tygodni. Nie oznacza automatycznej gotowości do wyłączenia dotychczasowego dziennika ani przejęcia formalnej dokumentacji.

Zakres poniżej pochodzi z planu produktu i wymaga weryfikacji po warsztatach. Prototyp techniczny poprzedzający MVP jest mniejszym eksperymentem dotyczącym jednego ryzyka.

## Macierz zakresu

| Obszar | Proponowany pilotaż | Dalszy rozwój |
| --- | --- | --- |
| Organizacja | Rok, okresy, oddziały, grupy, przedmioty, sale i import planu | Polityki i szablony dla wielu szkół |
| Konta | Zaproszenia, odzyskanie dostępu, role i relacje opieki | Federacja i złożone relacje czasowe |
| Lekcja | Plan, temat, prowadzący, grupa, potwierdzenie realizacji | Zastępstwa, wyjątki i dzienniki specjalistów |
| Frekwencja | Obecność, nieobecność, spóźnienie i korekta z historią | Wnioski, decyzje i reguły szkoły |
| Oceny | Bieżące, kategorie, wagi, komentarze i widoki uprawnionych osób | Klasyfikacja, zatwierdzanie i dokumenty formalne |
| Zadania i sprawdziany | Terminy, opis, przedmiot i załączniki | Oddawanie prac i integracje edukacyjne |
| Komunikacja | Podstawowe wiadomości, ogłoszenia i e-mail | Moderacja, potwierdzenia, delegowanie i polityki retencji |
| Uwagi i pochwały | Wpis z kontrolą widoczności | Proces wychowawczy i raporty |
| Uczeń i opiekun | Plan, oceny, frekwencja, terminy i wiele dzieci | Pełnoletność, czasowe relacje i rozbudowane wnioski |
| Dane | Walidowany import CSV, eksport roboczy CSV/PDF | XML, archiwum i pełna paczka przenośności |
| Utrzymanie | Audyt, kopie, odtworzenie, diagnostyka i instrukcja instalacji | Kanały wydań, wsparcie długoterminowe i wielu operatorów |
| Urządzenia | Responsywna aplikacja webowa / PWA | Natywne aplikacje wyłącznie przy potwierdzonej potrzebie |

Poza MVP: wyłączna dokumentacja formalna, kompletne archiwum i eksport formalny, wszystkie dzienniki specjalistyczne, natywne aplikacje mobilne, zaawansowany tryb offline, SMS, płatności, kadry, biblioteka i stołówka.

## Proponowane kryteria odbioru MVP

- [ ] Pilotaż obejmuje co najmniej jedną szkołę i wszystkie główne role.
- [ ] Przez cztery kolejne tygodnie co najmniej 90% zaplanowanych lekcji jest obsłużonych bez pomocy administratora.
- [ ] Test odtworzenia nie traci zapisów; opisano dopuszczalną utratę danych (RPO) i czas przywrócenia działania (RTO).
- [ ] Każda zmiana oceny, frekwencji, tematu i uprawnienia ma autora, czas oraz wartość przed i po; powód tam, gdzie jest wymagany.
- [ ] Nie ma otwartych krytycznych i wysokich błędów ujawniających dane, naruszających integralność lub blokujących pracę.
- [ ] Kluczowe ścieżki nauczyciela, ucznia i opiekuna działają z klawiatury i czytnika ekranu.
- [ ] Osoba spoza zespołu potrafi zainstalować, zaktualizować i odtworzyć system według publicznej dokumentacji.

Każde kryterium musi otrzymać właściciela, scenariusz testu oraz odnośnik do dowodu przed rozpoczęciem pilotażu.

## Mierniki do doprecyzowania

| Pytanie | Miernik |
| --- | --- |
| Czy szkoła faktycznie używa systemu? | Odsetek lekcji obsłużonych w pilotażu |
| Czy interfejs oszczędza czas? | Mediana czasu wpisania tematu i frekwencji |
| Czy dane są poprawne? | Korekty i niezgodności na tysiąc wpisów |
| Czy można polegać na systemie? | Błędy, opóźnienia i skuteczne odtworzenia |
| Czy ryzyko jest obsługiwane? | Czas naprawy podatności i incydenty dostępu |
| Czy użytkownicy mogą wykonać zadania? | Odbiór dostępności z użytkownikami |
| Czy można zmienić operatora? | Pełny eksport i odtworzenie u innego dostawcy |
| Czy utrzymanie jest wykonalne? | Czas rozwiązania problemów i jakość instrukcji |

Nie zbieramy tych mierników przez niejawny dostęp do danych uczniów. Metody i zakres pomiaru wymagają ustalenia przed pilotażem.

## Pełne przejście szkoły

Pełne przejście wymaga osobnego odbioru: uzgodnionej macierzy krytycznych funkcji, aktualnego przeglądu prawnego, sprawdzonej migracji, zakończenia krytycznego cyklu szkoły, audytów bez usterek blokujących, testów kopii i przenośności, szkoleń oraz działającego wsparcia. Szkoła, administrator techniczny, IOD i organ prowadzący zatwierdzają swoje zakresy odpowiedzialności. Szczegóły opisują [roadmapa](ROADMAPA.md) i [plan jakości](JAKOSC_I_RYZYKA.md).
