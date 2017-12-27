export default function handleDragLeave(e) {

    e.preventDefault();
    var path = e.target.childNodes[3];

    if (path.style.fill !== 'none' && path.classList.contains('svg-highlight') === false) {
        path.style.stroke = '#fff';
        path.style.fill = 'black';
        path.style.strokeWidth = '2';
    }

    if (path.classList.contains('svg-highlight') === true && path.style.fill !== 'none' ) {

        path.style.fill = '';
    }

    return false
};