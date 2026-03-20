const PageInit = {
    Menu: function () {
        console.log("Menu initialized");

        const btnDelivery = document.getElementById('btn-delivery');
        const btnPickup = document.getElementById('btn-pickup');

        btnDelivery.addEventListener('click', () => {
            btnDelivery.classList.add('active');
            btnPickup.classList.remove('active');
        });

        btnPickup.addEventListener('click', () => {
            btnPickup.classList.add('active');
            btnDelivery.classList.remove('active');
        });
    },

    Orders: function () {
        console.log("Orders initialized");
    },

    Profile: function () {
        console.log("Profile initialized");

        const openBtn = document.getElementById('Editprofile');
        const popup = document.getElementById('PasswordPopup');
        const closeBtn = document.getElementById('Close-Popup');
        
        openBtn.addEventListener('click', function () {
            popup.style.display = 'block';
        });

        document.querySelector('.Editprofile')?.addEventListener('click', function () {
            popup.style.display = 'block';
        });

        closeBtn.addEventListener('click', function () {
            popup.style.display = 'none';
        });
    },

    Login: function () {
        console.log("Login initialized");
    },

    Adminstudent: function () {
        console.log("Admin Student initialized");

        const add = document.getElementById('Addstudent');
        const popup = document.getElementById('PasswordPopup');
        const closeBtn = document.getElementById('Close-Popup');

        add?.addEventListener('click', function () {
            popup.style.display = 'Block';
        });

        document.querySelector('.Addstudent')?.addEventListener('click', function () {
            popup.style.display = 'block';
        });

        closeBtn?.addEventListener('click', function () {
          popup.style.display = 'None';
        });

    },

    Adminorder: function () {
        console.log("Page inizalization");

        const allCards = document.querySelectorAll('.total-card, .pending-order, .accepted-order, .cancel-order');

        allCards.forEach(card => {
            card.addEventListener('click', function () {
                allCards.forEach(c => c.classList.remove('active')); 
                this.classList.add('active');                  
            });
        });
        

    }
};

document.addEventListener("DOMContentLoaded", function () {
    const page = document.body.dataset.page;

    if (PageInit[page]) {
        PageInit[page]();
    }
});