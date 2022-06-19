input = document.querySelector('input');
search = document.querySelector('.search');
button = document.querySelector('button');

button.onclick = () => {
    search.classList.toggle("active");
    input.focus();
}

