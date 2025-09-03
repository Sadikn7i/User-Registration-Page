// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const pricingPlans = document.querySelectorAll(".pricing-plan");
  const buttons = document.querySelectorAll(".pricing-button");

  // Card hover effect (lift up on hover)
  pricingPlans.forEach(plan => {
    plan.addEventListener("mouseenter", () => {
      plan.style.transform = "translateY(-8px)";
      plan.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
      plan.style.transition = "all 0.3s ease";
    });
    plan.addEventListener("mouseleave", () => {
      plan.style.transform = "translateY(0)";
      plan.style.boxShadow = "none";
    });
  });

  // Pulse effect for featured plan on load
  const featured = document.querySelector(".pricing-button.is-featured");
  if (featured) {
    featured.closest(".pricing-plan").animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.05)" },
        { transform: "scale(1)" }
      ],
      {
        duration: 1000,
        iterations: 2,
        easing: "ease-in-out"
      }
    );
  }

  // Button ripple effect
  buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      this.appendChild(ripple);

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = e.clientX - rect.left - size / 2 + "px";
      ripple.style.top = e.clientY - rect.top - size / 2 + "px";

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Dark mode toggle
  const toggle = document.createElement("button");
  toggle.innerText = "🌙 Dark Mode";
  toggle.style.position = "fixed";
  toggle.style.bottom = "20px";
  toggle.style.right = "20px";
  toggle.style.padding = "10px 20px";
  toggle.style.border = "none";
  toggle.style.borderRadius = "8px";
  toggle.style.cursor = "pointer";
  toggle.style.background = "#48aaff";
  toggle.style.color = "#fff";
  toggle.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.innerText = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
});
