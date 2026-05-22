# 🚀 Galactica — Space Travel Agency

**Galactica** is a web application for a fictional space tourism agency that allows users to explore planets, manage a wishlist of dream destinations, and get to know the crew of space explorers.

---

## 🛠 Project Overview & Migration

> **⚠️ Important Note:** This project was originally developed using the **Vite + React** stack. 
> 
> This repository represents a **successful migration of the application to the Next.js framework (App Router)**.

### Why Migrate?
Moving the project to Next.js was done to boost performance, optimize SEO, and implement modern web development practices:
*   **Routing:** Transitioned from client-side routing (`react-router-dom`) to Next.js's native file-system-based routing (App Router).
*   **Context & Layouts:** Refactored the core layout using `layout.js` to properly wrap global states (like the Wishlist Context) and provide consistent navigation across pages.
*   **Prerendering:** Leveraging server-side building to speed up the initial page load time for users.

---

## 💻 Tech Stack

*   **Framework:** Next.js (App Router)
*   **Library:** React
*   **Styling:** CSS Modules (for component-scoped styling)
*   **State Management:** React Context API (for storing and synchronizing selected planets in the Wishlist)
*   **Deployment:** Vercel

---

## 🚀 Key Features

*   **Space Destinations:** An interactive list of available planets with detailed breakdown cards.
*   **Interactive Wishlist:** Users can seamlessly add planets to their wishlist, remove them, add custom planets via forms, and track the real-time dynamic countdown of selected destinations.
*   **Crew & About Us Pages:** Introducing the Galactica team and partners with fully refactored responsive component architecture.
*   **NASA Collaboration:** A dedicated dashboard layout prepared for tracking outer-space data and rover photograph elements fetched from NASA API.

---
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge&logo=vercel)](https://space-galactica-nextjs.vercel.app/)
