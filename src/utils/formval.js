document.getElementById('sendbtn').addEventListener('click', function(event) {
    event.preventDefault();

    const fornavn = document.getElementById('fornavn');
    const efternavn = document.getElementById('efternavn');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const rptpassword = document.getElementById('rptpassword');

    const fornavnvalue = fornavn.value.trim();
    const efternavnvalue = efternavn.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const rptpasswordvalue = rptpassword.value.trim();

    const setError = (el, hasError) => el.classList.toggle('formerror', hasError);

    setError(fornavn, !fornavnvalue);
    setError(efternavn, !efternavnvalue);
    setError(email, !emailvalue);
    setError(password, !passwordvalue);
    setError(rptpassword, !rptpasswordvalue);

    if (!fornavnvalue || !efternavnvalue || !emailvalue || !passwordvalue || !rptpasswordvalue) return;

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailvalue);

    if (!validEmail) {
        setError(email, true);
        return;
    }

    if (passwordvalue !== rptpasswordvalue) {
        alert('passwords do not match');
        setError(password, true);
        setError(rptpassword, true);
    } else {
        alert('sendt');
        setError(password, false);
        setError(rptpassword, false);
    }
});