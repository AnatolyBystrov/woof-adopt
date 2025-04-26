
<!-- Dog Running GIF -->
<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjR0YWVsaDUxbmE2Nzc3b2VmM2E2N25reW02Y3E0dTZwYXJkYmtobiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8Ry7iAVwKBQpG/giphy.gif" width="500" alt="Dog Running Happy">
</p>

# 🐶 Woof Adopt - Angular Dog Gallery & Adoption App

Welcome to **Woof Adopt**, a beautiful and responsive Angular application that allows users to explore dog breeds and submit adoption requests 🐾.

---

<p align="center">
  <a href="https://woof-adopt.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel" alt="Live Demo">
  </a>
</p>

---

## 🌐 Live Demo

✨ Try the project online:  
🔗 [https://woof-adopt.vercel.app/](https://woof-adopt.vercel.app/)

---

## 🔥 Features

### 🔎 Search Dogs Tab

- Dropdown to select **Dog Breeds** (only breeds with sub-breeds)
- Dynamic second dropdown for **Sub-Breeds**
- Responsive **Dog Album** with beautiful image grid
- Instant breed/sub-breed updates
- Debounced input handling using **RxJS**

### 📝 Adoption Form Tab

- Fully Reactive Form for adoption requests:
  - **Weight (1-100 kg)** with validation
  - **Colour** selection: White, Black, Brown, Golden, Gray, Mixed
  - **First-time adoption?** checkbox (special validation)
  - **Age** validation (0-8 years if first adoption, 0-20 otherwise)
- Submit button only active when the form is valid
- 2-second loading animation on submit
- Custom error messages for each field

---

## 🧪 Tech Stack

- **Angular 17+** with Standalone Components
- **RxJS** for reactive programming
- **HttpClient** for Dog API
- **Reactive Forms**
- **Custom CSS** (no frameworks)

---

## 📦 Installation

Clone and run the app locally:

```bash
git clone https://github.com/AnatolyBystrov/woof-adopt.git
cd woof-adopt
npm install
npm start
```

Then open: [http://localhost:4200](http://localhost:4200)

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

- Dog images and data from: [Dog CEO API](https://dog.ceo/dog-api/)
- Project by **Anatoly Bystrov**

---

<p align="center">
  <b><i>"Every dog deserves a loving home. Let's make it happen!"</i></b>
</p>
