
# 🐶 Woof Adopt - Angular Dog Gallery & Adoption App

Welcome to **Woof Adopt**, a beautiful and responsive Angular application that allows users to explore dog breeds and submit adoption requests 🐾.

![Woof Adopt Screenshot](https://dog.ceo/img/dog-api-logo.svg)

---

## 🔥 Features

### 🔎 Search Tab

- Dropdown to select **Dog Breeds** (only those with sub-breeds)
- Second dropdown for **Sub-Breeds**
- Responsive **Dog Album** with image grid
- Instant update on selection
- Debounced input handling with **RxJS**

### 📝 Adopt Tab

- Reactive form for adoption requests:
  - **Weight (1-100kg)** with validation
  - **Colour** dropdown (White, Black, Brown, Golden, Gray, Mixed)
  - **First Adoption?** checkbox
  - **Age (0-20)** with conditional validation (0-8 if first adoption)
- Submit button active only when valid
- Loader for 2 seconds then confirmation message
- Custom error messages for each field

---

## 🧪 Tech Stack

- **Angular 17+** with Standalone Components
- **RxJS** for reactive logic
- **HttpClient** for Dog API
- **Reactive Forms**
- Custom CSS for styling

---

## 📦 Installation

```bash
npm install
ng serve
```

App will run at: `http://localhost:4200`

---

## 📁 Folder Structure

```
src/
│
├── app/
│   ├── pages/
│   │   ├── search-dogs/
│   │   └── adoption-form/
│   ├── services/
│   └── app.component.ts
│
└── assets/
```

---

## 💡 Credits

- Dog images and data: [Dog CEO API](https://dog.ceo/dog-api/)
- Project by Anatoly Bystrov

