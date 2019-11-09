import CustomElement from './elements/CustomElement.js';
import DivElement from './elements/DivElement.js';
import SpanElement from './elements/SpanElement.js';
import FormElement from './elements/FormElement.js';
import TableElement from './elements/TableElement.js';
import TableRowElement from './elements/TableRowElement.js';
import TableCellElement from './elements/TableCellElement.js';
import InputElement from './elements/InputElement.js';
import SelectElement from './elements/SelectElement.js';
import OptionElement from './elements/OptionElement.js';
import ButtonElement from './elements/ButtonElement.js';
import XHR from './xhr/xhr.js';
import { STATES, CANADA_PROVINCES, MEXICO_PROVINCES } from './exports/states.js';

function $(x) { return document.querySelector(x); } 

const body = document.getElementsByTagName('body')[0];

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

    const mainDivTableAddressRow = new TableRowElement('mainDivTableAddressRow');
    const mainDivTableAddressTitle = new TableCellElement('mainDivTableAddressTitle');
    const mainDivTableAddressInputCell = new TableCellElement('mainDivTableAddressInputCell');
    const mainDivTableAddressInput = new InputElement('mainDivTableAddressInput');

    const mainDivTableCityRow = new TableRowElement('mainDivTableCityRow');
    const mainDivTableCityTitle = new TableCellElement('mainDivTableCityTitle');
    const mainDivTableCityInputCell = new TableCellElement('mainDivTableCityInputCell');
    const mainDivTableCityInput = new InputElement('mainDivTableCityInput');

    const mainDivTableStateRow = new TableRowElement('mainDivTableStateRow');
    const mainDivTableStateTitle = new TableCellElement('mainDivTableStateTitle');
    const mainDivTableStateSelectCell = new TableCellElement('mainDivTableStateSelectCell');
    const mainDivTableStateSelect = new SelectElement('mainDivTableStateSelect');
    mainDivTableStateSelect.appendChild(new OptionElement('', ''));

    Object.keys(STATES).forEach(abbr => {
        mainDivTableStateSelect.appendChild(new OptionElement(abbr, STATES[abbr]));
    });

    const mainDivTableZipRow = new TableRowElement('mainDivTableZipRow');
    const mainDivTableZipTitle = new TableCellElement('mainDivTableZipTitle');
    const mainDivTableZipInputCell = new TableCellElement('mainDivTableZipInputCell');
    const mainDivTableZipInput = new InputElement('mainDivTableZipInput');

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

    mainDivTableAddressTitle.setText('Address');
    mainDivTableAddressTitle.style.fontWeight = 'bold';
    mainDivTableAddressInputCell.appendChild(mainDivTableAddressInput);

    mainDivTableCityTitle.setText('City');
    mainDivTableCityTitle.style.fontWeight = 'bold';
    mainDivTableCityInputCell.appendChild(mainDivTableCityInput);

    mainDivTableStateTitle.setText('State');
    mainDivTableStateTitle.style.fontWeight = 'bold';
    mainDivTableStateSelectCell.appendChild(mainDivTableStateSelect);

    mainDivTableZipTitle.setText('Zip');
    mainDivTableZipTitle.style.fontWeight = 'bold';
    mainDivTableZipInputCell.appendChild(mainDivTableZipInput);

    mainDivTableHeaderRow.appendChild(mainDivTableHeaderCell);

    mainDivTableFirstNameRow.appendChild(mainDivTableFirstNameTitle);
    mainDivTableFirstNameRow.appendChild(mainDivTableFirstNameInputCell);

    mainDivTableLastNameRow.appendChild(mainDivTableLastNameTitle);
    mainDivTableLastNameRow.appendChild(mainDivTableLastNameInputCell);

    mainDivTableEmailRow.appendChild(mainDivTableEmailTitle);
    mainDivTableEmailRow.appendChild(mainDivTableEmailInputCell);

    mainDivTableAddressRow.appendChild(mainDivTableAddressTitle);
    mainDivTableAddressRow.appendChild(mainDivTableAddressInputCell);

    mainDivTableCityRow.appendChild(mainDivTableCityTitle);
    mainDivTableCityRow.appendChild(mainDivTableCityInputCell);

    mainDivTableStateRow.appendChild(mainDivTableStateTitle);
    mainDivTableStateRow.appendChild(mainDivTableStateSelectCell);

    mainDivTableZipRow.appendChild(mainDivTableZipTitle);
    mainDivTableZipRow.appendChild(mainDivTableZipInputCell);

    mainDivTable.appendChild(mainDivTableHeaderRow);
    mainDivTable.appendChild(mainDivTableFirstNameRow);
    mainDivTable.appendChild(mainDivTableLastNameRow);
    mainDivTable.appendChild(mainDivTableEmailRow);
    mainDivTable.appendChild(mainDivTableAddressRow);
    mainDivTable.appendChild(mainDivTableCityRow);
    mainDivTable.appendChild(mainDivTableStateRow);
    mainDivTable.appendChild(mainDivTableZipRow);
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
        // TODO : serialize form data inputs to JSON format
        console.log('onclick');
        console.log({ mainDivForm });
        const elements = mainDivForm.elements;
        console.log({ elements });
        const formdata = new FormData(mainDivForm);

        const entries = formdata.entries();
        for (entry of entries) {
            console.log({ entry });
        }

        const keys = formdata.keys();
        for (key of keys) {
            console.log({ key });
        }

        const values = formdata.values();
        for (value of values) {
            console.log({ values });
        }

        console.log({ formdata });
        // console.log({ entries });
        // console.log({ keys });
        // console.log({ values });
        formdata.forEach(el => console.log({ el }));
    };

    const xhr = new XHR('GET', 'json');
    xhr.setUrl('./exports/states.json');
    xhr.exec();
    console.log({ xhr });
});
