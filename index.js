const mainForm = document.getElementById('mainForm');
document.getElementById('btn').addEventListener('click', function () {
    document.querySelector('.pop_up').style.display = "flex";
});

document.querySelector('.cross').addEventListener('click', function(){
    document.querySelector('.pop_up').style.display = "none";
})

const bubble = document.querySelector('.bubble');
const bubbles = document.querySelector('.bubbles');




