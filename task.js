function t_manager(){
    document.querySelector('#submit').disabled = true;
    document.querySelector('#add').onkeyup = () => {
        if (document.querySelector('#add').value.length > 0) {
            document.querySelector('#submit').disabled = false;
        } else {
        document.querySelector('#submit').disabled = true;
    }
}
const task = document.querySelector('#add').value;
const li = document.createElement('li');
li.innerHTML = task;
document.querySelector('#tasks').append(li);
document.querySelector('#add').value = '';
document.querySelector('#submit').disabled = true;
return false;
}
document.addEventListener('DOMContentLoaded',function(){
document.querySelector('form').onsubmit = t_manager;
});