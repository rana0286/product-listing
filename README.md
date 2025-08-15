# 🛍️ Product Listing App

A product listing page built with **Next.js + TypeScript** featuring:
- Product **filtering by type**
- **General search** functionality
- Fully configured **Jest** testing, **Husky** git hooks, **ESLint** + **Prettier** code formatting


---

## 🚀 Features
- **Responsive Product Listing** – Displays products in a clean grid layout.
- **Filter by Type** – Quickly filter products by type.
- **Search Function** – Search across product names.
- **Fast Development Setup** – Preconfigured with ESLint, Prettier, and Husky for a consistent dev experience.
- **Unit Testing** – Jest + React Testing Library for UI and logic tests.
- **Type Safety** – Fully typed with TypeScript.

---

## 🛠 Tech Stack
- **Framework:** [Next.js 15+](https://nextjs.org/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind](https://tailwindcss.com/)
- **Fonts:** [Geist](https://vercel.com/font)
- **Testing:** [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Linting/Formatting:** [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- **Git Hooks:** [Husky](https://typicode.github.io/husky)

---

## 📂 Project Structure
.
├── __mocks__
│   └── fileMock.js
├── eslint.config.mjs
├── jest.config.ts
├── jest.setup.ts
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   └── img
├── README.md
├── src
│   ├── app
│   ├── components
│   ├── data
│   └── models
└── tsconfig.json


---

## ⚙️ Getting Started

### 1️⃣ Clone the repo
git clone https://github.com/rana0286/product-listing.git
cd product-listing-app

### 2️⃣ Install dependencies
bash```npm install```


### 3️⃣ Start development server

bash```npm run dev```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🔍 Implementation Details

### Product Listing
- Data is fetched JSON locally and rendered as a card layout.
- Each card contains product image, name, price, and sale sticker.

### Filtering
- **Filter by Type**: Dropdown modifies state to only display products of the selected type.

### Search
- **General Search**: Text input filters displayed products by name using a case-insensitive match.

---

## 🧪 Testing
We use **Jest** for testing and **React Testing Library** for component rendering.

Run all tests:
bash ```npm run test```


---

## 🧹 Code Quality

- **ESLint**: Static code analysis.
- **Prettier**: Automatic code formatting.
- **Husky**: Pre-commit hooks that run lint + tests before allowing commits.

Run lint manually:
bash ```npm run format```

---

## 📌 Future Improvements
- Infinite scroll or pagination for large data set.
- Sorting by price or name.
- API integration for real product data.
- Improved UI design.
- Accessibility to AA/AAA
- E2E testing using Playwright
- More Unit test coverage

---

## 👤 Author
**Vijay Rana**  