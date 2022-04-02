// button

//containers
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const ratings = document.querySelector('.rating');
const selected_rating = document.querySelector('.confirmation span')

let rating = 0;


ratings.addEventListener('click', function(e) {
    e.preventDefault();
    // check which list item is selected
    selected  = e.target;
    if (selected.tagName === 'LI') {
        // add active class to the selected list item
        selected.classList.add('active');
        rating = selected.dataset.rate
        // remove active class from the other list items
        for (i = 0; i < selected.parentNode.children.length; i++) {
            if (selected.parentNode.children[i] !== selected) {
                selected.parentNode.children[i].classList.remove('active');
            }
        }
         

    }
});

submit = document.querySelector('button');
submit.addEventListener('click', function(e) {
    e.preventDefault();
    // check if rating is > 0 
    if (rating > 0) {
        //hide box1
        box1.style.display = 'none';
        //update .confirmation span
        selected_rating.innerHTML = rating;
        //show box2
        box2.style.display = 'block';

    }


});
