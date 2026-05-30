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

/*
More or less, this is the way in which react renders the jsx syntax...basically the jsx is converted into tree like structure by the bundlers like bable which is later processed by react in this manner under the hood
*/
