const Site = {
    init: function () {
         // Pop ups
        const modal = document.getElementById('modal');
        const vieworder = document.getElementById('vieworder');
        const std = document.getElementById('std');
        const confirmpass = document.getElementById('confirmpass');
        const deleter = document.getElementById('delete');
        const reorder = document.getElementById('reorder');
        const openview = document.getElementById('View');
        const backbtn = document.getElementById('Back');
        const addstd = document.getElementById('Addstudent');
        const backstd = document.getElementById('Backstd');
        const Suspend = document.getElementById('Suspend');
        const change = document.getElementById('Change');
        const Deletestudent = document.getElementById('Deletestudent');
        const Declined = document.getElementById('Declined');
        const Nobtn = document.querySelector('.no');

        if (openview) {
            openview.addEventListener('click', function () {
                modal.style.display = 'flex';
                vieworder.style.display = 'flex';
            });

            backbtn.addEventListener('click', function () {
                modal.style.display = 'none';
                vieworder.style.display = 'none';
            });
        }

        if (reorder) {

            reorder.addEventListener('click', function () {
                modal.style.display = 'flex';
                vieworder.style.display = 'flex';
                document.getElementById('viewtxt').innerText = 'Reorder';
                Declined.style.display = 'none';
                document.getElementById('Accepted').innerText = 'Reorder';
            });

            backbtn.addEventListener('click', function () {
                modal.style.display = 'none';
                vieworder.style.display = 'none';
            });
        }

        if (addstd) { 
            addstd.addEventListener('click', function () {
                modal.style.display = 'flex';
                std.style.display = 'flex';
                vieworder.style.display = 'none';
                confirmpass.style.display = 'flex';
                document.getElementById('changed').innerText = 'Add';
                document.getElementById('changes').innerText = 'Add';
            });

            change.addEventListener('click', function () {
                modal.style.display = 'flex';
                std.style.display = 'flex';
                vieworder.style.display = 'none';
                confirmpass.style.display = 'none';
                document.getElementById('changed').innerText = 'Change';
                document.getElementById('changes').innerText = 'Change';
            });

            Deletestudent.addEventListener('click', function () {
                modal.style.display = 'flex';
                std.style.display = 'none';
                vieworder.style.display = 'none';
                confirmpass.style.display = 'none';
                deleter.style.display = 'flex'; 
            });

            Suspend.addEventListener('click', function () {
                if (this.innerText === 'Ban') {
                    this.innerText = 'Unbanned';
                } else {
                    this.innerText = 'Ban';
                }
            });

            backstd.addEventListener('click', function () {
                modal.style.display = 'none';
                std.style.display = 'none';
                deleter.style.display = 'none';
            });

            Nobtn.addEventListener('click' , function () {
                modal.style.display = 'none';               
            });
        }
    },
};

document.addEventListener("DOMContentLoaded", function () {
    Site.init();
});