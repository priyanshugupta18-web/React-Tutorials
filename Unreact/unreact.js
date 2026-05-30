const elementContainer = document.querySelector('#root');

const reactElement = {
    type:'a',
    props:{
        target:'_blank',
        href:'https://github.com/priyanshugupta18-web/'
    },
    children: 'This is the link for my GitHub account'
};

/*
Basic Render 

let unreactRender = (reactElement, elementContainer) => {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('target', '_blank');
    domElement.setAttribute('href', 'https://github.com/priyanshugupta18-web')

    elementContainer.appendChild(domElement)
}

unreactRender(reactElement, elementContainer);
*/

// Smart Render

let unreactRender = (reactElement, elementContainer) => {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    elementContainer.appendChild(domElement)
}

unreactRender(reactElement, elementContainer);
