(() => {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-main-nav]");

  if (toggle && nav) {
    const closeMenu = () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Відкрити меню");
    };

    toggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Закрити меню" : "Відкрити меню");
      if (isOpen) nav.querySelector("a")?.focus();
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1080) closeMenu();
    });
  }

  const requestForm = document.querySelector("[data-request-form]");

  if (requestForm) {
    requestForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(requestForm);
      const direction = data.get("direction") || "Загальний запит";
      const requestType = data.get("requestType") || "Консультація";
      const organization = data.get("organization") || "Не вказано";
      const contact = data.get("contact") || "Не вказано";
      const phone = data.get("phone") || "Не вказано";
      const message = data.get("message") || "Без додаткового опису";
      const subject = `[Lotus Med] ${direction} — ${requestType}`;
      const body = [
        `Напрям: ${direction}`,
        `Тип запиту: ${requestType}`,
        `Організація: ${organization}`,
        `Контакт: ${contact}`,
        `Телефон: ${phone}`,
        "",
        "Опис потреби:",
        message,
      ].join("\n");

      window.location.href = `mailto:lotusua@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
