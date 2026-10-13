<div align="center">

# Bondeth Tech — Frontend

**The storefront for Bondeth Tech, an online technology shop.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)

</div>

---

## Overview

Bondeth Tech Frontend is the customer-facing storefront of an online technology shop. Shoppers browse promotional posters and products by category, search the catalog, and use the cart from the header. It pairs with the [Bondeth Tech Backend](https://github.com/RithyBondeth/Bondeth-Tech-Backend).

## Features

- **Header** with navigation, product search, and a cart.
- **Promotional poster** carousel.
- **Category menu** and product rows of product cards.
- **Reusable UI components** for buttons and icon labels.
- **Global state** with Zustand.

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State management | Zustand |
| Build | Vite, ESLint |

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
git clone https://github.com/RithyBondeth/Bondeth-Tech-Frontend.git
cd Bondeth-Tech-Frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build |

## Project Structure

```text
Bondeth-Tech-Frontend/
└── src/
    ├── components/
    │   ├── header/      # Navbar, search, cart
    │   ├── poster/      # Promotional poster
    │   ├── product/     # Category menu, product card, product row
    │   └── utilities/   # Buttons and labels
    └── stores/          # Zustand stores
```

## Related Repositories

- [Bondeth-Tech-Backend](https://github.com/RithyBondeth/Bondeth-Tech-Backend): the NestJS API

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.
