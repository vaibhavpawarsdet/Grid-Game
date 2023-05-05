
window.onload = function () {
    shuffleArray();
    sort();

}
function shuffleArray() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('#storage');
    grid.innerHTML = '';

    array.forEach(item => {
        const imageDiv = document.createElement('div');
        imageDiv.id = `img${item}`;
        imageDiv.classList.add('img');
        grid.appendChild(imageDiv);
    })
}

function sort() {
    $(".sortable").sortable({
        connectWith: ".sortable",
        update: function (event, ui) {
            $("img > div").each(function (index, elem) {
                let countRight = index + 1;
                if ('img' + countRight == elem.id) {
                    countRight++;
                }
                if (countRight == 10) {
                    alert("complete");
                }
            });
        },
    });
}
