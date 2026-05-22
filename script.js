// ===== Ano atual no footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Navbar: sombra ao rolar =====
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// ===== Menu mobile =====
const burger = document.getElementById("burger");
const links = document.querySelector(".nav__links");
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});

// ===== Revelação ao entrar na tela =====
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in"));
}

// ===== Contador animado das estatísticas =====
const counters = document.querySelectorAll(".stat__num");
const runCounter = (el) => {
  const target = +el.dataset.target;
  const suffix = el.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
    el.textContent = Math.round(eased * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
if ("IntersectionObserver" in window) {
  const statIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          statIO.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((el) => statIO.observe(el));
} else {
  counters.forEach((el) => (el.textContent = el.dataset.target + (el.dataset.suffix || "")));
}

// ===== Formulário de contato (abre o email com a mensagem) =====
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const nome = (data.get("nome") || "").trim();
  const email = (data.get("email") || "").trim();
  const mensagem = (data.get("mensagem") || "").trim();

  if (!nome || !email || !mensagem) {
    status.textContent = "Por favor, preencha todos os campos.";
    status.className = "form__status err";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = "Informe um email válido.";
    status.className = "form__status err";
    return;
  }

  const assunto = encodeURIComponent(`Contato pelo portfólio — ${nome}`);
  const corpo = encodeURIComponent(`${mensagem}\n\n— ${nome} (${email})`);
  window.location.href = `mailto:deyvlucas02@gmail.com?subject=${assunto}&body=${corpo}`;

  status.textContent = "Abrindo seu app de email... obrigado pelo contato!";
  status.className = "form__status ok";
  form.reset();
});
