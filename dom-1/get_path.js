const __getChildNumber = function(element) {
    for ( i = 0; i < element.parentNode.children.length; ++i ) {
        if ( element.parentNode.children[i] === element ) return i + 1;
    }
}

const getPath = function (element) {
    let classSelector = element.nodeName;
    if ( element.classList.length > 0 ) {
        classSelector += `.${element.classList.toString().replace(/ /g, '.')}`;
    }

    if (element.id) {
        return '#' + element.id;
    } else if ( document.querySelectorAll(classSelector).length === 1 ) {
        return classSelector;
    } else {
        let parent = element.parentNode;
        let selector = '>' + element.nodeName + ':nth-child(' + __getChildNumber(element) + ')';
        return getPath(parent) + selector;
    }
}
