export const quadratic = (a, b, c) => {
    const bNeg = b * -1;
    const bSqrd = b * b;
    const ac4 = 4 * a * c;
    
    return [
	(bNeg + Math.sqrt(bSqrd - ac4)) / (a * 2),
	(bNeg - Math.sqrt(bSqrd - ac4)) / (a * 2),
    ];
};
