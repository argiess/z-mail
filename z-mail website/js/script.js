// BURGER MENU START
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".list__menu");

burger.addEventListener("click", ()=>{
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".list__link").forEach(n => n.addEventListener("click", ()=>{
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}));
// BURGER MENU END

// SCROLL HEADER EFFECT START
const header = document.querySelector(".header");

document.addEventListener("scroll", ()=>{
    if(window.scrollY > 10){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }
});

// CURR LINK ACTIVE COLOR
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".list__link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const link = document.querySelector(`.list__link[href="#${id}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("curr", "curr-cta");
          });

          if (link) {
            if (id === "contact") {
              link.classList.add("curr-cta");
            } else {
              link.classList.add("curr");
            }
          }
        }
      });
    },
    {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});


// CLEAR CONTACT FORM
let fName = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let msg = document.getElementById("msg");

function clearText(){
    fName.value = "";
    email.value = "";
    number.value = "";
    msg.value = "";
}

// MODAL
const modal = document.getElementById("policyModal");
        const modalTitle = document.getElementById("modalTitle");
        const modalText = document.getElementById("modalText");
        const closeModal = document.querySelector(".close");

        const policies = {
            refund: {
                title: "Refund Policy",
                text: "<strong>•</strong> All sale items are final. No returns, exchanges, or refunds will be accepted."
            },
            privacy: {
              title: "Privacy Policy",
              text: `
                <p>Your privacy is important to us. This Privacy Policy explains how Zypherr collects, uses, and protects your information.</p><br>
                <ul>
                  <li><strong>•</strong> We collect personal details (name, email, etc.) for order processing.</li>
                  <li><strong>•</strong> We do not sell or share your data with third parties.</li>
                  <li><strong>•</strong> We use encryption and secure protocols to protect your information.</li><br>
                </ul>
                <p>For questions, contact us at <a href="mailto:zmail@gmail.com">zmail@gmail.com</a>.</p>
              `
            },
            terms: {
              title: "Terms & Conditions",
              text: `
                <p>By using our website <a href="https://z-mail.netlify.app/" target="_blank">https://z-mail.netlify.app/</a>, you agree to the following terms:</p><br>
                <p>
                  <strong>•</strong> You must be at least 18 years old to use our services.<br>
                  <strong>•</strong> Unauthorized use of payment methods will result in order cancellation.<br>
                  <strong>•</strong> All content is owned by Z-Mail and cannot be resold or redistributed.
                </p><br>
                <p>For any concerns, please reach out to <a href="mailto:zmail@gmail.com">zmail@gmail.com</a>.</p>
              `
            }
        };

        document.querySelectorAll(".footer a").forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                const policyKey = this.getAttribute("data-modal");
                modalTitle.textContent = policies[policyKey].title;
                modalText.innerHTML = policies[policyKey].text;
                modal.style.display = "block";
            });
        });

        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });