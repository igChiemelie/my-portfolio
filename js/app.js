M.AutoInit();

const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sctions Active 
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //resmove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();


$(function () {
    $('#sendMail').on('submit', (e)=>{
        e.preventDefault();

        let email = $('#email').val();
        let name = $('#name').val();
        let subject = $('#subject').val();
        let textarea1 = $('#textarea1').val();
        let banye = true;
        console.log(email,name,subject,textarea1,banye);
       

        if (name != " "  && email != " " && textarea1 != " ") {
            var formData = {
            
                name: name,
                email: email,
                subject: subject,
                textarea1: textarea1,
                banye: true,
            }
        }

        $.ajax({
            type: 'POST',
            url: './script/mail.php',
            data: formData,
            success: (data) => {
                if (data == 200) {
                    M.toast({ html: 'Mail sent Succesfully!!', displayLength: 6500, classes: 'rounded, green' });
                    // location.reload();
                    $('#email').val("");
                    $('#name').val("");
                    $('#subject').val("");
                    $('#textarea1').val("");

                } else if (data == 501) {
                    M.toast({ html: 'Try Again!!', displayLength: 5000, classes:'red lighten-3'});
                    // location.reload();
                } else if (data == 401) {
                    M.toast({ html: 'Unathorized Access', displayLength: 5000, classes: 'circle, red' });
                    location.reload();
                }
            }
        });
    })
});
