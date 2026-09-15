# Roadmapa produktu

Status: warunkowy kierunek rozwoju · Źródło: S2 §6. Obecny plan pracy: [faza startowa](PLAN_STARTOWY.md).

## Jak czytać harmonogram

Pierwsze około 12 tygodni służy społeczności, badaniu potrzeb i decyzji o prototypie. Nie jest obietnicą ukończenia MVP. Część rezultatów może później zasilić M0, ale nie oznacza jego automatycznego odbioru.

Przedziały z dokumentu produktu zakładają stabilny, finansowany zespół: orientacyjnie 7–10 etatów z rolami częściowymi dla M0–M1, 10–14 dla M2–M4 i 12–16 dla M5–M6. Nie opisują obecnych zasobów. Etapy mogą częściowo się nakładać; przedziały nie tworzą wiążącej daty wydania.

| Kamień | Szacunek źródłowy | Główny rezultat | Warunek przejścia |
| --- | --- | --- | --- |
| M0 · Fundament | 6–8 tygodni | Potwierdzony zakres, UX, ryzyka i organizacja pilotażu | Każda krytyczna funkcja ma właściciela, źródło potrzeby i scenariusz akceptacyjny |
| M1 · MVP pilotażowe | 4–6 miesięcy | Codzienna praca jednej szkoły w kontrolowanym pilotażu | Kryteria MVP, testy ścieżek i odtworzenie przez osobę spoza zespołu |
| M2 · Dziennik formalny | 3–4 miesiące | Klasyfikacja, dokumentacja, eksport i archiwum | Aktualny przegląd prawny, niezależny audyt i formalna akceptacja szkoły |
| M3 · Komunikacja | 3–4 miesiące | Pełne ścieżki rodziny, wiadomości i wnioski | Brak krytycznej czynności wymagającej powrotu do poprzedniego portalu |
| M4 · Operacje szkoły | 4–6 miesięcy | Zastępstwa, raporty, dodatkowe dzienniki i integracje | Klasyfikacja i zamknięcie roku w co najmniej dwóch różnych szkołach |
| M5 · Ekosystem | 3–6 miesięcy | Operatorzy, rozszerzenia i dojrzałe utrzymanie | Przeniesienie szkoły między dwoma niezależnymi operatorami bez utraty danych |
| M6 · Pełna migracja | 2–3 miesiące | Zakończenie pracy równoległej | Odbiór odpowiedzialnych stron i zamknięcie planu odwrotu |

## M0 — fundament

- Warsztaty z reprezentacją szkół i rodzin, mapa procesów i krytycznych funkcji.
- Mapa wymagań i dowodów do weryfikacji prawnej.
- Makiety pięciu krytycznych ścieżek, model uprawnień i zagrożeń.
- Zasady wkładu, decyzji, licencji i jakości.
- Uzgodnienie jednej szkoły pilotażowej i jednej obserwującej, wsparcia oraz odpowiedzialności.

## M1 — pilotażowe MVP

- Konta, organizacja, plan, lekcja, frekwencja, oceny, zadania i podstawowa komunikacja.
- Widoki ról, import i eksport roboczy, historia zmian.
- Kopie, odtwarzanie, instalacja, monitoring i testy krytycznych ścieżek.
- Odbiór według [kryteriów MVP](PRODUKT.md#proponowane-kryteria-odbioru-mvp).

## M2 — formalny dziennik

- Mechanizmy dokumentacji, klasyfikacji, korekt, integralności i archiwizacji.
- Eksport i wydruki odpowiadające zweryfikowanym wymaganiom.
- Polityki przechowywania danych, odpowiedzialność operatorów i plan incydentowy.
- Przegląd aktualnych wymagań przez kompetentne osoby przed deklaracją gotowości.

## M3 — komunikacja i rodzina

- Wnioski o usprawiedliwienie i zwolnienie, decyzje i powiadomienia.
- Wiadomości, ogłoszenia, załączniki i reguły przechowywania.
- Wiele dzieci, pełnoletność, czasowe relacje i wygasanie uprawnień.
- Dostępne powiadomienia, tryb ciszy i aplikacja webowa.

## M4 — operacje i integracje

- Zastępstwa, zmiany planu, grupy i dodatkowe rodzaje zajęć.
- Dokumenty oraz raporty wynikające z uzgodnionego zakresu szkół.
- Publiczne, wersjonowane API i adaptery integracji.
- Test krytycznego sezonowego cyklu w różnych szkołach.

## M5 — operatorzy i rozszerzenia

- Aktualizacje, długoterminowe wsparcie, wysoka dostępność i ćwiczenia awaryjne.
- Obsługa wielu szkół, limity zasobów i odpowiedzialność operatorów.
- Paczka przenośności zawierająca dane, pliki, konfigurację, historię i wersję schematu.
- Narzędzia autorów wtyczek, kontrola pochodzenia i uprawnień; katalog bez monopolu jednego dostawcy.
- Aplikacje natywne tylko przy potrzebach niespełnianych przez web/PWA.

## M6 — migracja i zakończenie poprzedniej usługi

1. Zamrozić macierz zgodności konkretnej szkoły i właścicieli różnic.
2. Wykonać co najmniej dwie migracje próbne i porównać wyniki.
3. Przeprowadzić uzgodnioną pracę równoległą obejmującą krytyczny cykl.
4. Przeszkolić użytkowników i uruchomić wsparcie.
5. Wykonać migrację końcową i odbiór danych oraz dokumentów.
6. Uzyskać odbiór szkoły, IOD, administratora i organu prowadzącego w ich zakresach.
7. Utrzymać plan odwrotu do zakończenia pierwszego cyklu, następnie zamknąć poprzednią usługę.

## Zapis odbioru etapu

- Kamień i wersja zakresu:
- Właściciel:
- Kryteria oraz odnośniki do dowodów:
- Otwarte ryzyka i osoby odpowiedzialne:
- Decyzja: kontynuacja / uzupełnienia / wstrzymanie.
- Osoby zatwierdzające, data i PR:
