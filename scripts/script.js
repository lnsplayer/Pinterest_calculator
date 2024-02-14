function insert(exp) {
    document.form.textview.value = 
    document.form.textview.value + exp;
}

function del() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}

function AC() {
    document.form.textview.value = '';
}

function equal() {
    let exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp);
    }
}