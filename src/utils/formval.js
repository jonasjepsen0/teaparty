document.getElementById('sendbtn').addEventListener('click', function(event) {
    event.preventDefault();

    const fornavn = document.getElementById('fornavn');
    const efternavn = document.getElementById('efternavn');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const rptpassword = document.getElementById('rptpassword');

    const fornavnvalue = document.getElementById('fornavn').value.trim();
    const efternavnvalue = document.getElementById('efternavn').value.trim();
    const emailvalue = document.getElementById('email').value.trim();
    const passwordvalue = document.getElementById('password').value.trim();
    const rptpasswordvalue = document.getElementById('rptpassword').value.trim();

        if(!fornavnvalue) fornavn.classList.add('formerror');
        else fornavn.classList.remove('formerror');
        if(!efternavnvalue) efternavn.classList.add('formerror');
        else efternavn.classList.remove('formerror');
        if(!emailvalue) email.classList.add('formerror');
        else email.classList.remove('formerror');
        if(!passwordvalue) password.classList.add('formerror');
        else password.classList.remove('formerror');
        if(!rptpasswordvalue) rptpassword.classList.add('formerror');
        else rptpassword.classList.remove('formerror'); 

        if (!fornavnvalue || !efternavnvalue || !emailvalue || !passwordvalue || !rptpasswordvalue) {
            return;
        }

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailvalue)) {
            if (passwordvalue !== rptpasswordvalue) { 
                alert('passwords do not match');
                password.classList.add('formerror');
                rptpassword.classList.add('formerror');
            }
            else {
                alert('sendt');
                password.classList.remove('formerror');
                rptpassword.classList.remove('formerror'); 
            }
            } 
        else {
            email.classList.add('formerror');
        }
});