const Site = {
    init: function () {
        const reorder = document.getElementById('reorder');
        const openview = document.getElementById('View');
        const backbtn = document.getElementById('Back');

        if(openview) {
            openview.addEventListener('click' , function () {
                modal.style.display = 'flex';
                vieworder.style.display = 'flex';
            });

            backbtn.addEventListener('click', function(){
                modal.style.display = 'none';
                vieworder.style.display = 'none';
            });
        }

        if (reorder) {
            reorder.addEventListener('click', function () {
                modal.style.display = 'flex';
                vieworder.style.display = 'flex';
                console.log('nigga');
            });

            backbtn.addEventListener('click', function(){
                modal.style.display = 'none';
                vieworder.style.display = 'none';
            });
        }
    },


};



document.addEventListener("DOMContentLoaded", function () {
    Site.init();
});