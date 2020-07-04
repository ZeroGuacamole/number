const numberSuffix = {
	"3": "K",
	"4": "K",
	"5": "K",
	"6": "M",
	"7": "M",
	"8": "M",
	"9": "B",
};

export const number = (val = 0) => {
	const toNumber = +val;

	if (isNaN(val) && !isFinite(val))
		return new Error(`Val is not a valid number. val=${JSON.stringify(val)}`);

	return parser(toNumber);
};

const parser = (number) => {
	const strNumber = String(Math.round(number));
	const numberLength = strNumber.length - 1;
	const rest = numberLength % 3;

	if (number <= 1000) return strNumber;

	const parsedNumber = !rest
		? (number / 10 ** numberLength).toFixed(1)
		: strNumber.slice(0, rest + 1);

	return `${parsedNumber}${numberSuffix[numberLength]}`;
};
