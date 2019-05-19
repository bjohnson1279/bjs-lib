import CustomElement from './elements/CustomElement.js';
import DivElement from './elements/DivElement.js';
import SpanElement from './elements/SpanElement.js';
import FormElement from './elements/FormElement.js';
import TableElement from './elements/TableElement.js';
import TableRowElement from './elements/TableRowElement.js';
import TableCellElement from './elements/TableCellElement.js';
import InputElement from './elements/InputElement.js';
import ButtonElement from './elements/ButtonElement.js';

function $(x) { return document.getElementById(x); } 
// customElements.define('main-div', DivElement, { extends: 'div' });

const body = document.getElementsByTagName('body')[0];
console.log('body', body);
window.addEventListener('load', () => {
    // Load body content here
    const mainDiv = new DivElement('mainDiv');
    const mainDivBody = new DivElement('mainDivBody');
    const mainDivHeaderTxt = new SpanElement('headerTxt');
    const mainDivBodyTxt = new SpanElement('bodyTxt');
    const custom = new CustomElement('customElement');
    const mainDivForm = new FormElement('mainDivForm');
    const mainDivTable = new TableElement('mainDivTable');

    const mainDivTableHeaderRow = new TableRowElement('mainDivTableHeaderRow');
    const mainDivTableHeaderCell = new TableCellElement('mainDivTableHeaderCell')

    const mainDivTableFirstNameRow = new TableRowElement('mainDivTableFirstNameRow');
    const mainDivTableFirstNameTitle = new TableCellElement('mainDivTableFirstNameTitle')
    const mainDivTableFirstNameInputCell = new TableCellElement('mainDivTableFirstNameInputCell')
    const mainDivTableFirstNameInput = new InputElement('mainDivTableFirstNameInput')

    const mainDivTableLastNameRow = new TableRowElement('mainDivTableLastNameRow');
    const mainDivTableLastNameTitle = new TableCellElement('mainDivTableLastNameTitle');
    const mainDivTableLastNameInputCell = new TableCellElement('mainDivTableLastNameInputCell');
    const mainDivTableLastNameInput = new InputElement('mainDivTableLastNameInput');

    const mainDivTableEmailRow = new TableRowElement('mainDivTableEmailRow');
    const mainDivTableEmailTitle = new TableCellElement('mainDivTableEmailTitle');
    const mainDivTableEmailInputCell = new TableCellElement('mainDivTableEmailInputCell');
    const mainDivTableEmailInput = new InputElement('mainDivTableEmailInput', null, 'email');

    const mainDivFormSubmit = new ButtonElement('mainDivFormSubmit', 'submit', 'Submit');

    mainDivTableHeaderCell.setAttribute('colspan', 2);
    mainDivTableHeaderCell.setText('Form Table Header');
    mainDivTableHeaderCell.style.fontWeight = 'bold';

    mainDivTableFirstNameTitle.setText('First Name');
    mainDivTableFirstNameTitle.style.fontWeight = 'bold';
    mainDivTableFirstNameInputCell.appendChild(mainDivTableFirstNameInput);

    mainDivTableLastNameTitle.setText('Last Name');
    mainDivTableLastNameTitle.style.fontWeight = 'bold';
    mainDivTableLastNameInputCell.appendChild(mainDivTableLastNameInput);

    mainDivTableEmailTitle.setText('Email');
    mainDivTableEmailTitle.style.fontWeight = 'bold';
    mainDivTableEmailInputCell.appendChild(mainDivTableEmailInput);

    mainDivTableHeaderRow.appendChild(mainDivTableHeaderCell);

    mainDivTableFirstNameRow.appendChild(mainDivTableFirstNameTitle);
    mainDivTableFirstNameRow.appendChild(mainDivTableFirstNameInputCell);

    mainDivTableLastNameRow.appendChild(mainDivTableLastNameTitle);
    mainDivTableLastNameRow.appendChild(mainDivTableLastNameInputCell);

    mainDivTableEmailRow.appendChild(mainDivTableEmailTitle);
    mainDivTableEmailRow.appendChild(mainDivTableEmailInputCell);

    mainDivTable.appendChild(mainDivTableHeaderRow);
    mainDivTable.appendChild(mainDivTableFirstNameRow);
    mainDivTable.appendChild(mainDivTableLastNameRow);
    mainDivTable.appendChild(mainDivTableEmailRow);
    mainDivForm.appendChild(mainDivTable);
    mainDivForm.appendChild(mainDivFormSubmit);

    mainDivHeaderTxt.setText('Main Div Header');
    mainDivBodyTxt.setText('Main Div Body');
    mainDivBody.appendChild(mainDivBodyTxt);
    mainDivBody.appendChild(mainDivForm);
    mainDiv.appendChild(mainDivHeaderTxt);
    mainDiv.appendChild(mainDivBody);
    body.appendChild(mainDiv);

    mainDivForm.onsubmit = (e) => {
        e.preventDefault();
    }

    mainDivFormSubmit.onclick = (e) => {
        let formdata = new FormData(mainDivForm);
        console.log('form data:', formdata);
    };

    console.log('mainDiv', mainDiv);
    console.log('mainDivHeaderTxt', mainDivHeaderTxt);
    console.log('mainDivBody', mainDivBody);
    console.log('mainDivForm', mainDivForm);
    console.log('mainDivTable', mainDivTable);
    console.log('custom', custom);
});