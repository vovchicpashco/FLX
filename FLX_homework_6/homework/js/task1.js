var a = (prompt('Please, enter "a"','')); 
var b = (prompt('Please, enter "b"',''));
var c = (prompt('Please, enter "c"',''));
var Discriminant = (b*b) - (4 * a * c);
var Solution = -b / (2 * a);
var x1 = ( -b + Math.sqrt(Discriminant) ) / (2 * a);
var x2 = ( -b - Math.sqrt(Discriminant) ) / (2 * a);

if (isNaN(parseInt(a)) || isNaN(parseInt(b)) || isNaN(parseInt(c))) {
        alert('Invalid input data');
      } else {
        if (Discriminant < 0) {
          alert('No Solution'+'; Discriminant = '+Discriminant);
          
        } else if (Discriminant === 0) {
          Solution = -b / (2 * a);
           alert('x = '+Solution+'; Discriminant = ' + Discriminant);
        } else {
            x1 = ( -b + Math.sqrt(Discriminant) ) / (2 * a),
            x2 = ( -b - Math.sqrt(Discriminant) ) / (2 * a);
           alert('x1 = '+x1+'; x2 = '+x2+'; Discriminant = '+Discriminant);
        }
      }
 



       