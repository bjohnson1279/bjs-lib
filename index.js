import CustomElement from './elements/CustomElement.js';
import DivElement from './elements/DivElement.js';
import SpanElement from './elements/SpanElement.js';

function $(x) { return document.getElementById(x); } 
// customElements.define('main-div', DivElement, { extends: 'div' });

const body = document.getElementsByTagName('body')[0];
console.log('body', body);
window.addEventListener('load', () => {
    // Load body content here
    console.log('inside body.onload');

    const mainDiv = new DivElement('mainDiv');
    const mainDivHeaderTxt = new SpanElement('headerTxt')
    const custom = new CustomElement('customElement');

    mainDivHeaderTxt.setText('Main Div');
    mainDiv.appendChild(mainDivHeaderTxt);
    body.appendChild(mainDiv);
    console.log('mainDiv', mainDiv);
    console.log('mainDivHeaderTxt', mainDivHeaderTxt);
    console.log('custom', custom);
});