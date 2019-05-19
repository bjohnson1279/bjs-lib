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
    const mainDivBody = new DivElement('mainDivBody');
    const mainDivHeaderTxt = new SpanElement('headerTxt');
    const mainDivBodyTxt = new SpanElement('bodyTxt');
    const custom = new CustomElement('customElement');

    mainDivHeaderTxt.setText('Main Div Header');
    mainDivBodyTxt.setText('Main Div Body');
    mainDivBody.appendChild(mainDivBodyTxt);
    mainDiv.appendChild(mainDivHeaderTxt);
    mainDiv.appendChild(mainDivBody);
    body.appendChild(mainDiv);
    console.log('mainDiv', mainDiv);
    console.log('mainDivHeaderTxt', mainDivHeaderTxt);
    console.log('mainDivBody', mainDivBody);
    console.log('custom', custom);
});