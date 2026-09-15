# Karta projektu

Status: roboczy · Źródła: S1 §1–3, S2 §1 i §9; [wykaz źródeł](README.md#źródła-i-interpretacja).

## Cel

Szkoliber ma być otwartą platformą dla szkół, możliwą do samodzielnego hostowania, wdrażania przez różnych operatorów i rozszerzania wtyczkami open source oraz komercyjnymi. Ma wspierać codzienną pracę szkoły przy zachowaniu kontroli nad danymi i możliwości zmiany dostawcy.

Pierwszym celem jest stworzenie małej społeczności, dostęp do wiedzy szkolnej i zdolność do odpowiedzialnego podejmowania decyzji. Nie deklarujemy gotowości systemu produkcyjnego ani terminu jego wdrożenia.

## Dla kogo

Dyrekcja, administracja, nauczyciele, wychowawcy, specjaliści szkolni, uczniowie, rodzice i opiekunowie, organy prowadzące oraz operatorzy techniczni.

## Zasady kierunkowe

1. **Kontrola nad danymi:** pełny eksport, możliwość odtworzenia instalacji i zmiany operatora wraz z historią.
2. **Wolny rdzeń:** serwer, klient, migratory i narzędzia wdrożeniowe na Apache-2.0; podstawowe działanie i wymagania formalne bez obowiązkowych płatnych dodatków.
3. **Równość operatorów:** te same publiczne interfejsy i dokumentacja dla wszystkich dostawców.
4. **Rozszerzalność:** wtyczki otwarte i komercyjne z jawnymi uprawnieniami oraz wersjonowanymi kontraktami.
5. **Prywatność i bezpieczeństwo:** minimalizacja danych, właściwe uprawnienia, historia zmian, kopie i proces obsługi incydentów.
6. **Dostępność:** projektowanie z użytkownikami, klawiatura, czytniki ekranu, powiększenie i czytelne komunikaty.
7. **Decyzje oparte na potrzebach:** warsztaty ze szkołami poprzedzają ustalenie modelu domeny i kolejności funkcji.
8. **Jawna współpraca:** publiczny plan, uzasadnienia decyzji i możliwość recenzji.

## Modele wdrożenia

| Model | Założenie |
| --- | --- |
| Pojedyncza szkoła | Własna instancja i infrastruktura |
| Organ prowadzący | Wspólna instalacja z rozdzieleniem danych i odpowiedzialności szkół |
| Usługa operatora | Zarządzany hosting z możliwością przeniesienia do innego dostawcy |

## Zakres obecnego etapu

- Pakiet publicznego projektu i zasady współpracy.
- Pozyskanie współprowadzącego technicznego oraz przedstawicieli szkół.
- Warsztaty, mapa procesów i hipotezy wymagające walidacji.
- Pierwsze małe wkłady oraz propozycja zasad wtyczek.
- Decyzja o rozpoczęciu ograniczonego prototypu technicznego.

## Poza obecnym etapem

- Produkcyjny system ocen, frekwencji i komunikacji.
- Gotowa aplikacja mobilna i katalog wtyczek.
- Ostateczny model danych lub przyrzeczenie zastąpienia istniejącego dziennika.

Docelowo księgowość, kadry, stołówka, biblioteka, płatności i rekrutacja są rozszerzeniami. Ich krytyczność należy ustalić osobno dla szkoły; nie włączamy ich automatycznie do pilotażu.

## Uzgodnienie karty

- Właściciel dokumentu: do ustalenia.
- Recenzent reprezentujący szkołę: do ustalenia.
- Recenzent techniczny: do ustalenia.
- Decyzja i data przyjęcia: nie podjęto.
- Dyskusja / PR: do uzupełnienia.
