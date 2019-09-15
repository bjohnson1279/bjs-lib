export const areaPolygon = (length, width) => {
    if (isNumeric(length)
         && isNumeric(width)
    ) {
        return length * width;
    }
    return false;
};

export const areaSquare = (length) => { 
    if (isNumeric(length)) {
        return length * length;
    }
    return false;
};

export const perimeterRectangle = (length, width) => {
    if (isNumeric(length)
         && isNumeric(width)
    ) {
        return (length * 2) + (width * 2);
    }
    return false;
};

export const perimeterSquare = (length) => {
    if (isNumeric(length)) {
        return length * 4;
    }
    return false;
};

export const volumeCube = (length) => {
    if (isNumeric(length)) {
        return length * length * length;
    }
    return false;
};

export const volumeRectangle = (length, width, height) => {
    if (isNumeric(length)
        && isNumeric(width)
        && isNumeric(height)
    ) {
        return length * width * height;
    }
    return false;
};

export const volumeSphere = (radius) => {
    if (isNumeric(radius)) {
        return (radius * Math.pi); // TODO : get volume calculation
    }
    return false;
}

export const volumeCone = (radius, height) => {
    if (isNumeric(radius) && isNumeric(height)) {
        return (radius * Math.pi); // TODO : get height calculation
    }
    return false;
}

export const volumeCylinder = (radius, height) => {
    if (isNumeric(radius) && isNumeric(height)) {
        return (radius * Math.pi); // TODO : get height calculation
    }
    return false;
}

export const circumference = (radius) => {
    if (isNumeric(radius)) {
        return radius * Math.PI;
    }
    return false;
};

const isNumeric = (value) => {
    if (Number.isNaN(value)) {
        throw new Exception(`Invalid value ${value}.  Numeric values only.`);
    }
    return true;
}
