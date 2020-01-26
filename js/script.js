// let ptag = document.querySelectorAll('.container div');
// for (let i= 0; i<ptag.length; i++){
//     ptag[i].style.color ='red';
//     ptag[i].style.backgroundColor = 'green';
//     ptag[i].innerHTML = '<b>Hello Neptun</b>';
// }

// let tor =document.querySelectorAll('tor')[0];
// let itag = document.querySelectorAll('i')[0];

// itag.classList.replace('class1' , 'class2');

// let imgTag =document.querySelectorAll('img')[0];
// imgTag.src = '#'


let container = document.getElementsByTagName('li');
for (let i = 0; i < container.length; i++) {
    container[i].onclick = function () {
        for (var j = 0; j < container.length; j++) {
            container[j].classList.remove('active');
            container[j].classList.replace('fa-arrow-up', 'fa-arrow-down');
        }
        this.classList.toggle('active');
        this.classList.replace('fa-arrow-down', 'fa-arrow-up');
    }
}

// let headers = document.querySelectorAll('.header');
// let ptags = document.querySelectorAll('.content p');
// let itags = document.querySelectorAll('.header i');

// for(let k=0; k<headers.length; k++){

//     headers[k].addEventListener('click',function(){
//         for (let h = 0; h< ptags.length; h++){
//             ptags[h].classList.remove('open');
//         }
//     })

// }

let acc = document.getElementsByClassName("box");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
    });
}