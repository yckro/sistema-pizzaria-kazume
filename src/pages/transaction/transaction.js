function onchangeDate(){
    const date = form.date().value;
    form.dateRequiredError().style.display = !date ? "block" : "nome";
}

const form = {
    date: () => document.getElementById('date'),
    dateRequiredError: () => document.getElementById('date-required-error')
}