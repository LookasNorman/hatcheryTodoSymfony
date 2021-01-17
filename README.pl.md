# System zarządzania utrzymania ruchu
Aplikacja pomagająca zarządzać zadaniami zespołu utrzymania ruchu, zgłaszanymi reklamacjami do dostawców zewnętrznych oraz zakupami części.

## Opis funkcjonalny
Aplikacja została stworzona aby pomóc zarządzać zadaniami zespołu utrzymania ruchu na wylęgarni oraz fermach. Zadania zostały podzielone na lokalizacje oraz typy.
Można je dodawać tak aby system mógłbyć reużywalny także w innych firmach.
Możliwość przypisania zadań do maszyn lub grupy maszyn (linii produkcyjnej) pozwala na stworzenie raportów dla każdej maszyny z wykonywanych zadań.
Dodatkowo został dodany zapis reklamacji zgłaszanych do firm zewnętrznych a dotyczących pracy poszczególnych maszyn.
Moduł zamówień ułatwia nadzór nad realizacją zamówień części od dostawców. W przyszłości planuję rozbudowę o stany magazynowe posiadanych części.
Do każdej lokalizacji można przypisać halę (w przypadku wylęgarnii) lub kurnik (w przypadku fermy) pozwala to na bardziej precyzyjne oznaczanie lokalizacji maszyn.

## Lista funkcji systemu
1. Zadania do wykonania:
  - Nazwa
  - Maszyna
  - Lokalizacja
  - Planowana data wykonania
  - Typ zadania
  - Zadanie cykliczne - czas powtórzeń
  - Data wykonania
2. Maszyny:
  - Nazwa
  - Numer seryjny
  - Lokalizacja
  - Hala / kurnik
  - Grupa maszyn
3. Lokalizacje:
  - Nazwa
  - Adres
  - Nr telefonu
  - Email
4. Hale / Kurniki:
  - Nazwa
  - Opis
  - Lokalizacja
5. Reklamacje:
  - Nazwa części
  - Dostawca
  - Opis reklamacji
  - Data zgłoszenia
  - Data usunięcia
  - Maszyna
6. Zamówienia:
  - Nazwa
  - Opis
  - Dostawca
  - Data zamówienia
  - Data dostawy
  - Lokalizacja
