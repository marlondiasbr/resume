
// Circle
function Circle (r) {
	// propriedade privada
    var radius = r;
    // método para atribuir novo Raio 
    this.setRadius = function (newRadius) {
		if ( isNaN(newRadius) ) { 
			return false;
		} else {
			radius = newRadius;
			return true;
		}
    };     
    
	// método para recuperar Raio 
    this.getRadius = function() { return radius; };

	// método para cálculo da área
    this.area = function () { return Math.PI * radius * radius; };

	// método para cálculo do perimetro
    this.perimeter = function () { return 2 * Math.PI * radius; };     
}

//Circle.prototype.getArea = function (circle,radius) {
//	return Circle.area(radius);
//};
