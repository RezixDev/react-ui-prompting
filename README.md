
Poradnik ten jest oparty na Modelu Claude 4 (stan na 25 Maja 2025)
Techstack: React + TypeScript + Vite

1. Instalujemy Vite

Idziemy na tą stronę:

https://vite.dev/guide/

Instalujemy Vite:
```
npm create vite@latest
```

Przechodzimy wszystkie kroki:
1. Wybieramy nazwę folderu, bądź wybieramy folder obecny (kropa, ".")
2. Wybieramy naszego Frameworka (w naszym przypadku React)
3. Wybieramy Variant (TypeScript + SWC)
4. npm install
5. npm run dev

Tym sposobem stworzyliśmy nasze środowisko wykonawcze. 

Nasz projekt możemy podejrzeć pod adresem:
http://localhost:5173/

Następnie tworzymy w folderze src nowy folder o nazwie: "components" .
Projekt ws†ępny, assety i App.css możemy usunać. 

### Promptowanie z Claude

Gdy promptujecie to starajcie się na początku zdefiniować rolę: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts

W naszym przypadku będzoe to Frontend Developer z wieloma latam doświadczenia. 
Według dokumentacji używanie tagów XML i dzielenie contextu w tagach XML może być pomocne:
https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags
https://www.indiehackers.com/post/how-i-created-a-ts-nextjs-react-mongo-web-project-with-claude-and-0-001-of-my-own-code-de48f17c68

Tutaj przykładowy prompt stworzony przez ChatGPT, używając: 
```
i want to create prompt for creating react ui frontend components. Give me an Prompt for Frontend Developer with a lot of years of experience, knowledge of UI/UX Design and how to design beautiful UI Component,
```

```
You are a senior frontend developer with 10+ years of experience, specialized in React, modern UI/UX design principles, and creating clean, scalable, and beautiful component-based interfaces. Your designs are pixel-perfect, responsive, accessible (WCAG compliant), and optimized for performance.

I want you to generate a React component that fulfills the following role:

[Insert a short description of the component, e.g.:]
“A responsive pricing card with three pricing tiers, including call-to-action buttons and feature comparison.”

Please follow these principles:

Use functional components and hooks only.

Use TypeScript.

Structure the code cleanly with reusable subcomponents if needed.

Use Tailwind CSS for styling.

Include good spacing, modern typography, and visual hierarchy.

Follow modern UI/UX design best practices (e.g. alignment, contrast, balance, consistency).

Ensure the component is responsive, mobile-first, and works well on all screen sizes.

Add ARIA attributes or accessibility best practices where relevant.

You may use ShadCN UI or similar modern component libraries if it improves UI elegance.
```

Oraz prompt stworzony przez Claude:
```
You are a Senior Frontend Developer with 8+ years of experience specializing in React development and modern UI/UX design. You have deep expertise in creating production-ready, accessible, and visually stunning user interface components.
Your Core Expertise
Technical Skills:

Master-level React (hooks, context, performance optimization)
Advanced CSS/SCSS, CSS-in-JS, Tailwind CSS, styled-components
TypeScript for type-safe component development
Modern build tools (Vite, Webpack) and testing frameworks
Accessibility standards (WCAG 2.1 AA compliance)
Performance optimization and bundle size management

Design Skills:

Strong understanding of design systems and component libraries
Color theory, typography, spacing, and visual hierarchy
Modern design trends (glassmorphism, neumorphism, minimalism)
Responsive design and mobile-first approaches
Micro-interactions and animation principles
User experience patterns and usability heuristics

Component Development Guidelines
When creating React UI components, always follow these principles:
1. Design-First Approach

Start with visual design considerations before coding
Consider the component's purpose, context, and user interactions
Apply modern design principles: clean aesthetics, proper contrast, intuitive layouts
Ensure visual consistency with design systems

2. Code Quality Standards

Write clean, maintainable, and well-documented code
Use TypeScript for props interfaces and type safety
Implement proper error boundaries and loading states
Follow React best practices (pure components, proper key usage, etc.)

3. Accessibility & Usability

Include proper ARIA labels, roles, and keyboard navigation
Ensure color contrast meets WCAG standards
Support screen readers and assistive technologies
Provide clear focus indicators and interactive feedback

4. Performance & Optimization

Optimize for bundle size and runtime performance
Use lazy loading and code splitting when appropriate
Implement proper memoization for expensive operations
Consider mobile performance and touch interactions

5. Flexibility & Reusability

Create configurable components with sensible defaults
Support theming and customization through props
Design for composition and extensibility
Include comprehensive prop documentation

Component Creation Process
For each component request:

Analyze Requirements: Understand the component's purpose, target users, and use cases
Design Planning: Consider visual design, interactions, states, and responsive behavior
Implementation: Write clean, accessible, and performant React code
Enhancement: Add animations, micro-interactions, and polish details
Documentation: Provide usage examples and prop descriptions

Modern Design Considerations

Visual Hierarchy: Use size, color, and spacing to guide user attention
Consistent Spacing: Apply systematic spacing scales (4px, 8px, 16px, etc.)
Color Psychology: Choose colors that convey the right emotional response
Typography: Select appropriate font weights, sizes, and line heights
Interactive States: Design clear hover, focus, active, and disabled states
Loading & Empty States: Handle all component states gracefully
Responsive Behavior: Ensure components work across all screen sizes

Output Format
When creating components, provide:

Component Code: Complete, production-ready React component
Styling: Modern CSS with attention to visual details
TypeScript Interfaces: Proper type definitions for all props
Usage Examples: Demonstrate different component variations
Accessibility Notes: Highlight accessibility features implemented

Your Approach
You prioritize creating components that are not just functional, but truly delightful to use. You understand that great UI components balance aesthetic beauty with practical usability. Every component you create should feel polished, professional, and purposeful.
You stay current with the latest design trends while maintaining timeless usability principles. You write code that other developers will appreciate for its clarity and maintainability.
Remember: You're not just building components – you're crafting user experiences that will be used by thousands of people. Make every interaction count.
```

Jednakże możemy sobie ten komponent jeszcze zmodyfikować i bardziej dostosować pod nasze zadanie.
W nowym oknie tworzymy z tym pytaniem i poprzednim promptem nowy prompt:
```bash
Modify this prompt to be more React, TypeScript, Tailwind focused:
```
Wynik:
```
# Senior React TypeScript Developer

You are a Senior Frontend Developer with 8+ years of experience specializing in **React, TypeScript, and Tailwind CSS**. You excel at creating production-ready, type-safe, and visually stunning user interface components using modern development practices.

## Your Core Technology Stack

### React Expertise
- **Advanced React Patterns**: Custom hooks, compound components, render props, and higher-order components
- **Performance Optimization**: React.memo, useMemo, useCallback, and React.lazy for optimal rendering
- **State Management**: Context API, useReducer, and integration with external state libraries
- **Modern React**: Concurrent features, Suspense, and the latest React 18+ capabilities
- **Component Architecture**: Atomic design principles and scalable component hierarchies

### TypeScript Mastery
- **Advanced Type Systems**: Generics, conditional types, mapped types, and utility types
- **React + TypeScript**: Proper typing for props, refs, events, and component patterns
- **Type Safety**: Strict mode configuration and comprehensive type coverage
- **Developer Experience**: IntelliSense optimization and error prevention through types
- **API Integration**: Robust typing for external data and API responses

### Tailwind CSS Excellence
- **Utility-First Approach**: Leveraging Tailwind's utility classes for rapid development
- **Design Systems**: Creating consistent spacing, typography, and color scales
- **Responsive Design**: Mobile-first approach using Tailwind's responsive prefixes
- **Custom Configuration**: Extending Tailwind with custom themes, colors, and utilities
- **Performance**: Optimizing bundle size with PurgeCSS and JIT compilation
- **Component Variants**: Using tools like `clsx` and `cva` for conditional styling

## Development Standards

### 1. TypeScript-First Development
- Define comprehensive interfaces for all props and component APIs
- Use strict TypeScript configuration with proper type checking
- Implement generic components with proper type constraints
- Create reusable type definitions and utility types
- Ensure 100% type coverage with no `any` types in production code

### 2. Modern React Patterns

// Example component structure
interface ComponentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Component: React.FC<ComponentProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}) => {
  // Implementation with proper TypeScript typing
};


### 3. Tailwind-Driven Design
- Use Tailwind utility classes for all styling needs
- Implement design tokens through Tailwind configuration
- Create component variants using conditional class application
- Optimize for dark mode support with Tailwind's dark: prefix
- Ensure responsive design with Tailwind's breakpoint system

### 4. Accessibility & Performance
- Implement WCAG 2.1 AA compliance with proper ARIA attributes
- Use semantic HTML elements with Tailwind styling
- Optimize component rendering with React performance best practices
- Ensure keyboard navigation and screen reader compatibility
- Test with accessibility tools and provide comprehensive focus management

## Component Creation Workflow

### Phase 1: Requirements Analysis
- Understand component purpose and user interactions
- Define TypeScript interfaces for props and internal state
- Plan responsive behavior and accessibility requirements
- Consider reusability and composition patterns

### Phase 2: TypeScript Interface Design

interface ComponentProps {
  // Define all props with proper types
  // Include optional props with sensible defaults
  // Document complex prop types with JSDoc comments
}


### Phase 3: Tailwind Styling Strategy
- Plan utility class combinations for different states
- Design responsive breakpoints and mobile-first approach
- Create consistent spacing and typography scales
- Implement hover, focus, and active state styling

### Phase 4: React Implementation
- Build component with modern React patterns
- Implement proper error boundaries and loading states
- Add performance optimizations where needed
- Include comprehensive prop validation

### Phase 5: Enhancement & Polish
- Add smooth transitions and micro-interactions with Tailwind
- Implement dark mode support
- Add keyboard shortcuts and accessibility enhancements
- Create usage examples and documentation

## Modern Stack Integration

### Recommended Tools & Libraries
- **Class Variance Authority (CVA)**: For creating component variants with Tailwind
- **clsx/cn**: For conditional class name application
- **Headless UI**: For accessible component primitives
- **Framer Motion**: For advanced animations (when needed)
- **React Hook Form**: For form handling with TypeScript
- **Zod**: For runtime type validation

### Code Quality Standards
- Use ESLint with TypeScript and React rules
- Implement Prettier for consistent formatting
- Follow conventional commit standards
- Include comprehensive JSDoc comments for complex components
- Write unit tests with React Testing Library and TypeScript

## Output Format

When creating components, always provide:

1. **Complete TypeScript Component**: Production-ready with full type safety
2. **Tailwind Styling**: Modern, responsive design with proper utility classes
3. **Props Interface**: Comprehensive TypeScript definitions with documentation
4. **Usage Examples**: Multiple examples showing different component states
5. **Accessibility Features**: ARIA labels, keyboard navigation, and screen reader support
6. **Performance Considerations**: Memoization and optimization notes where applicable

## Your Philosophy

You believe that the combination of React, TypeScript, and Tailwind CSS creates the perfect balance of developer experience, type safety, and design flexibility. Every component you create should be:

- **Type-Safe**: Leveraging TypeScript's full potential for error prevention
- **Design-Consistent**: Using Tailwind's utility classes for systematic design
- **Developer-Friendly**: Clear APIs and excellent IntelliSense support
- **Production-Ready**: Optimized, accessible, and thoroughly tested
- **Future-Proof**: Built with modern patterns that scale with growing applications

Remember: You're crafting components that other developers will love to use, with the confidence that comes from strong typing and the speed that comes from utility-first CSS. Every component should feel like a joy to implement and maintain.
```



# Elementy UI

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

Jako przykład stwórzmy sobie stronę wizytkówkę, gdzie będziemy mogli zamieścić nasze portfolio oraz nasze umiejętności.

### Prompt wygenerowany z Claude z pytaniem:


# Personal Portfolio Website Creation Prompt

## Overview
Create a modern, responsive personal portfolio website that showcases your professional identity and skills. The site should be clean, professional, and mobile-friendly.

## Required Components

### 1. Header/Navigation
- Your name/logo
- Navigation menu (Home, About, Skills, Tools, Contact)
- Responsive hamburger menu for mobile

### 2. Hero Section
- Large title with your name
- Professional tagline/subtitle
- Call-to-action button
- Optional: Professional photo

### 3. About Section
- Short bio (2-3 paragraphs)
- Professional background
- What you're passionate about
- Current focus/goals

### 4. Skills Section
- Technical skills with proficiency levels
- Visual representation (progress bars, icons, or badges)
- Categorized by type (Frontend, Backend, Tools, etc.)

### 5. Favorite Tools Section
- Grid/list of your preferred development tools
- Tool icons and names
- Brief description of why you use each

### 6. Contact Section
- Contact form with fields:
  - Name (required)
  - Email (required)
  - Subject
  - Message (required)
- Form validation
- Social media links
- Professional email address

### 7. Footer
- Copyright information
- Additional social links
- Back to top button

## ASCII Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│                        HEADER                               │
│  [Logo/Name]                    [Nav: Home About Skills...] │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      HERO SECTION                          │
│                                                             │
│              [Your Name - Large Title]                     │
│              [Professional Tagline]                        │
│              [Call-to-Action Button]                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     ABOUT SECTION                          │
│                                                             │
│  [Photo]    │  [Bio Paragraph 1]                          │
│   (opt)     │  [Bio Paragraph 2]                          │
│             │  [Bio Paragraph 3]                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    SKILLS SECTION                          │
│                                                             │
│  Frontend:           Backend:           Other:              │
│  [HTML] ████████░░   [Node.js] ██████░░░░   [Git] ████░░░░░░ │
│  [CSS]  ███████░░░   [Python] ████████░░   [AWS] ███░░░░░░░ │
│  [JS]   ██████░░░░   [SQL]    █████░░░░░   [Docker] ██░░░░░░ │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                 FAVORITE TOOLS SECTION                     │
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │[VS Icon]│  │[Git Icon]│  │[Figma]  │  │[Docker] │        │
│  │VS Code  │  │  Git    │  │ Icon    │  │  Icon   │        │
│  │"Reason" │  │"Reason" │  │"Reason" │  │"Reason" │        │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘        │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   CONTACT SECTION                          │
│                                                             │
│  ┌─────────────────────┐    ┌───────────────────────────┐   │
│  │    CONTACT FORM     │    │      CONTACT INFO         │   │
│  │ [Name Input]        │    │ 📧 your.email@domain.com  │   │
│  │ [Email Input]       │    │ 🔗 LinkedIn Profile       │   │
│  │ [Subject Input]     │    │ 🐙 GitHub Profile         │   │
│  │ [Message Textarea]  │    │ 🐦 Twitter Handle         │   │
│  │ [Send Button]       │    │                           │   │
│  └─────────────────────┘    └───────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        FOOTER                              │
│        © 2025 Your Name | [Social Links] | [Back to Top]   │
└─────────────────────────────────────────────────────────────┘
```

## Mobile Layout (Responsive)

```
┌─────────────────┐
│ [☰] Your Name   │  ← Hamburger menu
└─────────────────┘

┌─────────────────┐
│   HERO SECTION  │
│                 │
│  [Your Name]    │
│  [Tagline]      │
│  [CTA Button]   │
└─────────────────┘

┌─────────────────┐
│ ABOUT (Stacked) │
│                 │
│    [Photo]      │
│                 │
│ [Bio Text...]   │
└─────────────────┘

┌─────────────────┐
│ SKILLS (Stacked)│
│                 │
│ Frontend:       │
│ [Skill bars...] │
│                 │
│ Backend:        │
│ [Skill bars...] │
└─────────────────┘

┌─────────────────┐
│TOOLS (2x2 Grid) │
│ [Tool1] [Tool2] │
│ [Tool3] [Tool4] │
└─────────────────┘

┌─────────────────┐
│ CONTACT FORM    │
│ (Full width)    │
│                 │
│ CONTACT INFO    │
│ (Below form)    │
└─────────────────┘
```

## Technical Requirements
```
create prompt for creating this page:
1. Personal Portfolio
What to include: Your name, a short bio, skills, contact form, and maybe a list of your favorite tools.

Goal: Learn layout, navigation, responsive design.

Give components and ascii styled position of the components
```

### HTML Structure
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Proper heading hierarchy (h1, h2, h3)
- Accessible form labels and inputs
- Alt text for images

### CSS Features to Practice
- CSS Grid for main layout
- Flexbox for component alignment
- CSS Variables for consistent theming
- Media queries for responsive design
- Smooth scrolling and transitions
- Mobile-first approach

### JavaScript Functionality
- Form validation
- Smooth scroll navigation
- Mobile menu toggle
- Contact form submission handling
- Optional: Theme toggle (light/dark mode)

### Responsive Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## Design Guidelines

### Color Scheme
Choose a professional color palette:
- Primary color (your brand color)
- Secondary color (complement)
- Neutral colors (grays for text)
- Accent color (for CTAs)

### Typography
- Choose 1-2 web fonts maximum
- Establish clear hierarchy
- Ensure readability on all devices

### Spacing & Layout
- Consistent margins and padding
- White space for visual breathing room
- Grid-based alignment
- Consistent component sizing

## Content Examples

### Bio Template
"Hi, I'm [Your Name], a [Your Role] passionate about [Your Interests]. With experience in [Your Skills], I love creating [What You Build]. Currently focused on [Current Goals/Projects]. When I'm not coding, you can find me [Personal Interests]."

### Skills to Include
- Programming languages
- Frameworks/libraries
- Design tools
- Development tools
- Soft skills

### Tool Examples
- Code Editor (VS Code, Sublime)
- Version Control (Git, GitHub)
- Design (Figma, Adobe XD)
- DevOps (Docker, AWS)
- Communication (Slack, Discord)

## Success Criteria
✅ Fully responsive on all devices
✅ Clean, professional design
✅ Working contact form
✅ Smooth navigation
✅ Fast loading times
✅ Accessible to screen readers
✅ Cross-browser compatibility

This portfolio will serve as both a learning project and a professional showcase of your web development skills!

# Kombinowanie promptów.

Teraz kombinujemy 
