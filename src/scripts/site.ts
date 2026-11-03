// Theme toggle: follows the system until the visitor picks one.
const root = document.documentElement;
const media = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(theme: "light" | "dark", remember: boolean) {
  root.dataset.theme = theme;
  if (remember) {
    try { localStorage.setItem("theme", theme); } catch {}
  }
}

document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
});

media.addEventListener("change", (e) => {
  let stored: string | null = null;
  try { stored = localStorage.getItem("theme"); } catch {}
  if (!stored) setTheme(e.matches ? "dark" : "light", false);
});

// Reveal sections as they scroll into view.
const revealables = document.querySelectorAll<HTMLElement>("[data-reveal]");
if ("IntersectionObserver" in window && revealables.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add("is-visible"));
}

// Hairline under the header once the page scrolls.
const onScroll = () => root.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Abstract toggles.
document.querySelectorAll<HTMLButtonElement>("[data-abstract-toggle]").forEach((btn) => {
  const panel = document.getElementById(btn.getAttribute("aria-controls") || "");
  if (!panel) return;
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    panel.classList.toggle("is-open", !open);
    panel.toggleAttribute("inert", open);
  });
});

// Copy BibTeX.
document.querySelectorAll<HTMLButtonElement>("[data-copy]").forEach((btn) => {
  const label = btn.querySelector("span");
  const original = label?.textContent ?? "";
  btn.addEventListener("click", async () => {
    const text = btn.dataset.copy ?? "";
    try {
      await navigator.clipboard.writeText(text);
      if (label) label.textContent = "Copied";
    } catch {
      if (label) label.textContent = "Copy failed";
    }
    setTimeout(() => label && (label.textContent = original), 1600);
  });
});
