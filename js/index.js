const first = parseFloat(prompt("write 1 number"));
const second = parseFloat(prompt("write 2 number"));
function calculateSum() {
    return first + second;

};

function end() {
    if (isNaN(calculateSum())) {
        return calculateSum();

    } else {
        return ("NaN");
    }
};
alert(calculateSum().toFixed(2));