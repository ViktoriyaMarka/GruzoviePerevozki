let avia = document.getElementsByClassName('services_item')

avia.foreach(function (item) {
    item.setAttribute('onmouseover', ChangeCircle(item))
    alert(item);
})

function ChangeCircle(x) {
    x.children[0].style.background = rgba(255, 255, 255, 1);
    x.children[1].style.background = rgba(0, 0, 0, 1);
}