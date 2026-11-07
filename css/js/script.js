document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector(".menu-toggle");
  const panel = document.querySelector(".mobile-panel");

  if (toggle && panel) {
    toggle.addEventListener("click", () => {
      panel.classList.toggle("open");
    });
  }

  const toast = document.querySelector(".toast");

  window.notify = (message) => {
    if (!toast) {
      return;
    }

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  };

  document.querySelectorAll("[data-demo]").forEach((element) => {
    element.addEventListener("click", () => {

      const message =
        element.dataset.demo ||
        "This feature is ready in the frontend demo.";

      notify(message);

    });
  });

  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {

      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const type = form.dataset.form;
      let message;

      if (type === "signup") {
        message = "Account created successfully for this frontend demo.";
      } else if (type === "signin") {
        message = "Sign-in accepted. Welcome back!";
      } else {
        message = "Thanks! Your request has been submitted.";
      }

      notify(message);
      form.reset();

    });
  });

  document.querySelectorAll("[data-order]").forEach((button) => {
    button.addEventListener("click", () => {

      const item =
        button.dataset.order ||
        "your order";

      notify(`${item} added to your order.`);

    });
  });

});