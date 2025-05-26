# 🚀 Shujaat Ali - Developer Portfolio

Welcome to my personal **developer portfolio**, a dynamic, fully responsive React application that showcases my skills, projects, and passion for problem-solving and clean UI/UX.


---

## 🌐 Live Demo

🔗 [Visit Live Site](https://ShujaatAli88.github.io/my_portfolio)

---

## ✨ Features

- ⚡ **Responsive design** with modern UI components
- 👨‍💻 **About Me** section highlighting my expertise
- 🛠️ **Project Cards** with hover animations and details
- 💌 **Contact Me** CTA for networking and opportunities
- 🚀 **Deployed via GitHub Pages** using GitHub Actions
- 🎨 Vibrant color scheme and polished user interface

---

## 📦 Tech Stack

| Technology   | Purpose             |
|--------------|---------------------|
| React.js     | Frontend framework  |
| HTML5 / CSS3 | Structure & styling |
| GitHub Pages | Deployment platform |
| GitHub Actions | CI/CD automation |
| JavaScript (ES6+) | Logic & interactions |

---

## 🗂️ Project Structure

```
my-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   └── HomePage.js
│   ├── styles/
│   │   └── HomePage.css
│   └── App.js
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── README.md
└── build/ (generated after build)
```

---

## 🚀 Getting Started

To run locally:

```bash
git clone https://github.com/ShujaatAli88/my_portfolio.git
cd my_portfolio
npm install
npm start
```

To build:

```bash
npm run build
```

---

## 🚚 Deployment (CI/CD via GitHub Actions)

Automatic deployment is set up using GitHub Actions. The app is deployed to GitHub Pages every time changes are pushed to the `main` branch.

### 📄 `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3.9.3
        with:
          github_token: ${{ secrets.TOKEN_GITHUB }}
          publish_dir: ./build
```

---

## 📬 Contact

I'm always open to connecting with fellow developers, collaborators, and recruiters!

- 🔗 [LinkedIn](https://www.linkedin.com/in/shujaat-ali-824253155/)
- 💻 [GitHub](https://github.com/ShujaatAli88)


---

## 🙌 Acknowledgements

Built with ❤️ using [React](https://reactjs.org/) and deployed via [GitHub Pages](https://pages.github.com/).

---

> © 2024 - Shujaat Ali. All rights reserved.