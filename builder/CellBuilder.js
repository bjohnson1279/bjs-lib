import TableCellElement from ('../elements/TableCellElement.js');

export class CellBuilder extends TableCellElement {
    constructor() {
        //
    }

    set cellHeight(height) {
        this.height = height;
    }

    set cellWidth(width) {
        this.width = width;
    }
}
