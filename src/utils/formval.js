document.getElementById('sendbtn').addEventListener('click', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname');
    const emailinput = document.getElementById('emailinput');
    const tlfnum = document.getElementById('phoneinput');
    const mailcheck = document.getElementById('mailcheck');
    const callcheck = document.getElementById('callcheck');

    const fullnamevalue = fullname.value.trim();
    const emailvalue = emailinput.value.trim();
    const tlfnumvalue = tlfnum.value.trim();

    const setError = (el, hasError) => el.classList.toggle('formerror', hasError);

    setError(fullname, !fullnamevalue);
    setError(emailinput, !emailvalue);
    setError(tlfnum, !tlfnumvalue);

    if (!fullnamevalue || !emailvalue || !tlfnumvalue) return;

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailvalue);

    if (!validEmail) {
        setError(emailinput, true);
        return;
    }

    alert('sent');
});