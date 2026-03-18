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


function popup() {
    document.querySelector('.Password-Pop-Up').style.display = "block";
}

function closePopup() {
    document.getElementById('Close-Popup').addEventListener('click', function () {
        document.getElementById("PasswordPopup").style.display = "none";
    });     
}


