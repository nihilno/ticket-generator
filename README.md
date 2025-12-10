# 🎟️ Ticket Sandbox App

## Overview

This project is built to explore and practice client‑side persistence using **LocalStorage** in a Next.js environment.  
It demonstrates how to generate a ticket, store its details locally, and render a styled ticket page based on the stored data.

---

## ✨ Features

- **Ticket Generation Flow**  
  Users can generate a ticket with details such as `name`, `email`, `github usernaem`, and an `avatar`.

- **LocalStorage Persistence**  
  Ticket details are saved in the browser’s LocalStorage and retrieved on the `/ticket/[id]` page.

- **Hydration & Validation**  
  The app checks LocalStorage after hydration.
  - If the ticket exists and matches the URL `id`, it displays the ticket.
  - If not, it shows a styled fallback page (`TicketNotFound`) or uses Next.js `not-found.tsx`.

---

## 🛠️ Tools & Technologies

nextjs, tailwindcss, shadcn, localstorage, nanoid, lucideicons, rhf, zod, react-dropzone
