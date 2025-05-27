# Generowanie Komponentøw UI w Reacie pod dany Projekt

## Prompt do generowania komponentów UI w Reacie 

```
You are a senior frontend developer with 10+ years of experience, specialized in React, TypeScript, Tailwind, Vite, modern UI/UX design principles, and creating clean, scalable, and beautiful component-based interfaces. Your designs are pixel-perfect, responsive, accessible (WCAG compliant), and optimized for performance.

I want you to generate a React component that fulfills the following role:
Use functional components and hooks only.
Use TypeScript.
Structure the code cleanly with reusable subcomponents if needed.
Use Tailwind CSS for styling.
Include good spacing, modern typography, and visual hierarchy.
Follow modern UI/UX design best practices (e.g. alignment, contrast, balance, consistency).
Ensure the component is responsive, mobile-first, and works well on all screen sizes.
Add ARIA attributes or accessibility best practices where relevant.
Be sparse with useEffect, use it only if needed.
Because we are using React 19, memo, useMemo and useCallback is no longer necessary
We don"t need to import React anymore

Use Arrow Functions and Named Exports

export const ExampleComponent = ({ }: exampleComponentProps) => {
  // component logic
};

```

## Prompt opisujący nasz projekt
```

Project which i am going to Write is:

Modern, responsive personal portfolio website that showcases your professional identity and skills. The site should be clean, professional, and mobile-friendly.

Output only the code. Do not include explanations unless explicitly asked.
Don`t generate all Components directly, but let`s generate them step-by-step.

If there is improvement to be made, ask me an question before generating an component.

Components to be generated are:
1. Header Section
2. Hero Section
3. About Section
4. Skill Section
5. Favourite Tools Section
6. Contact Section
7. Footer

Let's start with the Header and generate those components step-by-step.

```

### Lista możliwych Komponentów UI do wygenerowania

#### Elementy UI

Skoro mamy nasze prompty, to teraz czas zdefiniować potrzebne przez nas elementy UI.

## Podstawowe Elementy Strukturalne

1. **Header** (Nagłówek)
2. **Navigation Bar/Menu** (Pasek nawigacji/Menu)
3. **Main Content Area** (Główny obszar treści)
4. **Sidebar** (Panel boczny)
5. **Footer** (Stopka)

## Elementy Interaktywne

1. **Przyciski** (Buttons)
2. **Formularze** (Forms)
3. **Wyszukiwarki** (Search bars)
4. **Okna modalne** (Modal dialogs)
5. **Zakładki i akordeony** (Tabs & Accordions)
6. **Bannery** (Banners)
7. **Etykiety/Tagi/Chipy** (Badges/Tags/Chips)
8. **Podpowiedzi/Popovery** (Tooltips/Popovers)
9. **Suwaki** (Sliders/Range inputs)
10. **Przełączniki** (Toggles/Switches)
11. **Pola wyboru** (Checkboxes)
12. **Przyciski radiowe** (Radio buttons)
13. **Listy rozwijane** (Dropdowns/Select)
14. **Paginacja** (Pagination)
15. **Breadcrumbs** (Ścieżka nawigacji)

## Elementy Prezentacji Treści

1. **Karty** (Cards)
2. **Listy** (Lists)
3. **Tabele** (Tables)
4. **Obrazy** (Images)
5. **Typografia** (Typography)
   - Nagłówki (Headings)
   - Paragrafy (Paragraphs)
   - Style tekstu (Text styles)
6. **Wykresy** (Charts)
7. **Kalendarze** (Calendars)
8. **Timeline/Oś czasu** (Timeline)
9. **Avatary** (Avatars)
10. **Ikony** (Icons)
11. **Galerie** (Galleries)
12. **Karuzele/Slidery** (Carousels/Sliders)

## Elementy Informacji Zwrotnej i Statusu

1. **Paski ładowania** (Loading bars)
2. **Komunikaty błędów** (Error messages/Alerts)
3. **Powiadomienia o sukcesie** (Success notifications)
4. **Paski postępu/Wskaźniki kroków** (Progress bars/Step indicators)
5. **Powiadomienia toast** (Toast notifications)
6. **Komunikaty walidacji** (Validation messages)
7. **Skeletons/Placeholder** (Elementy ładowania)
8. **Empty states** (Stany puste)
9. **Spinners** (Wskaźniki ładowania)

## Komponenty Układu

1. **Siatki** (Grids)
2. **Kontenery** (Containers)
3. **Odstępy** (Spacers/Spacing)
4. **Dividers/Separatory** (Separatory)
5. **Breakpoints** (Punkty przełamania)

## Elementy Nawigacyjne

1. **Menu hamburger** (Hamburger menu)
2. **Filtry** (Filters)
3. **Sortowanie** (Sorting)
4. **Wyszukiwanie zaawansowane** (Advanced search)
5. **Sticky/Fixed elementy** (Przyklejone elementy)

## Elementy Multimedialne

1. **Odtwarzacze wideo** (Video players)
2. **Odtwarzacze audio** (Audio players)
3. **Upload plików** (File upload)
4. **Drag & Drop** (Przeciągnij i upuść)

## Elementy Dostępności

1. **Focus indicators** (Wskaźniki fokusa)
2. **Skip links** (Linki pomijające)
3. **Screen reader elementy** (Elementy dla czytników ekranu)
4. **High contrast mode** (Tryb wysokiego kontrastu)

