(function () {
  const body = document.querySelector("body");
  const heroForm = body.querySelector(".hero__form");
  const modalHeroForm = body.querySelector(".modal .hero__form");

  heroForm.addEventListener("click", toggleDate);
  modalHeroForm.addEventListener("click", toggleDate);

  function toggleDate(event) {
    const target = event.target;
    const btnDate = target.closest(".select__date-btn");
    if (!btnDate) return;

    const date = target.closest(".select__wrapper");
    const dateInput = date.querySelector(".select__date-input");
    const dateInputMobile = heroForm.querySelector(
      ".select__date-input--mobile"
    );
    const modalDateInputMobile = modalHeroForm.querySelector(
      ".select__date-input--mobile"
    );

    if (date.classList.contains("select__wrapper--active")) {
      date.classList.remove("select__wrapper--active");
      if (dateInput) {
        dateInput.style.maxHeight = 0;
      }
      if (dateInputMobile) {
        dateInputMobile.style.maxHeight = 0;
        dateInputMobile.style.marginBottom = 0;
      }
      if (modalDateInputMobile) {
        modalDateInputMobile.style.maxHeight = 0;
        modalDateInputMobile.style.marginBottom = 0;
      }
    } else {
      date.classList.add("select__wrapper--active");
      if (dateInput) {
        dateInput.style.maxHeight = dateInput.scrollHeight + "px";
      }
      if (dateInputMobile) {
        dateInputMobile.style.maxHeight = dateInputMobile.scrollHeight + "px";
        dateInputMobile.style.marginBottom = 10 + "px";
      }
      if (modalDateInputMobile) {
        modalDateInputMobile.style.maxHeight =
          modalDateInputMobile.scrollHeight + "px";
        modalDateInputMobile.style.marginBottom = 10 + "px";
      }
    }
  }

  // Бургер меню

  const headerTop = body.querySelector(".header__top");
  headerTop.addEventListener("click", toggleBurgerMenu);

  function toggleBurgerMenu(event) {
    const target = event.target;
    const btnBurger = target.closest(".burger-icon");
    const navLink = target.closest(".header__nav-link");
    const btnConsult = target.closest(".header__btn--mobile");

    if (!btnBurger && !navLink && !btnConsult) return;

    body.classList.toggle("header__nav--active");
  }

  // Модалка найти программу и модалка "оставить контакты"

  const modal = body.querySelector(".modal");
  const modalButton = document.querySelector(".header__form-btn-mobile");

  const modalContacts = body.querySelector(".modal-contacts");
  const modalContactsButtonList = document.querySelectorAll(".contacts-btn");

  modalButton.addEventListener("click", openModal);
  modal.addEventListener("click", closeModal);

  modalContactsButtonList.forEach((value) => {
    value.addEventListener("click", openModal);
  });
  modalContacts.addEventListener("click", closeModal);

  function openModal(event) {
    event.preventDefault();
    const target = event.target;
    console.log(Array.from(modalContactsButtonList));
    console.log(Array.from(modalContactsButtonList).includes(target));

    if (target == modalButton) {
      body.classList.toggle("body--opened-modal");
      body.classList.remove("body--opened-modal-contacts");
    } else if (Array.from(modalContactsButtonList).includes(target)) {
      body.classList.toggle("body--opened-modal-contacts");
      body.classList.remove("body--opened-modal");
    }
  }

  function closeModal(event) {
    const target = event.target;

    if (
      target.closest(".modal__cancel") ||
      target.classList.contains("modal") ||
      target.classList.contains("modal-contacts")
    ) {
      body.classList.remove("body--opened-modal");
      body.classList.remove("body--opened-modal-contacts");
    }
  }

  // Маска телефона

  const telInputs = document.querySelectorAll('input[type="tel"]');
  const im = new Inputmask("+7 (999) 999-99-99");
  im.mask(telInputs);

  // Слайдер popular-dest

  new Swiper(".popular-dest__slider", {
    slidesPerView: 1.2,
    spaceBetween: 40,

    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  // Слайдер blog__slider

  new Swiper(".blog__slider", {
    slidesPerView: "auto",
    spaceBetween: 20,

    breakpoints: {
      900: {
        slidesPerView: "auto",
      },
      1100: {
        slidesPerView: 2,

        grid: {
          fill: "row",
          rows: 2,
        },
      },
    },
  });

  // Слайдеры impressions

  new Swiper(".impressions__slider-1", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  new Swiper(".impressions__slider-2", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    width: 250,
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
})();
