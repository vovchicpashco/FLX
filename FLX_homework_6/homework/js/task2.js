var cash = parseFloat(prompt('Enter amount of cash', ''));
var discount = parseFloat(prompt('Enter your discount', ''));
var price = 0;
var saved = (discount * cash  / 100).toFixed(2);
if (cash <= 0 || cash > 9999999) {
    alert('invalid data');
} else if (isNaN(cash)) {
    alert('invalid data');
} else if (discount <= 0 || discount > 99) {
    alert('invalid data');
} else {
    price = (cash - saved).toFixed(2);
    alert(
        `Price without discount: ${cash}
Discount: ${discount} % 
Price: ${price} 
Saved: ${saved}`);
}