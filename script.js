
// Circle
function Circle (radius) {
	// propriedade
    this.radius = radius;
    // método para cálculo da área
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    // método para cálculo do perimetro
    this.perimeter = function () {
        return 2 * Math.PI * this.radius; 
    };     
}

//Circle.prototype.getArea = function (circle,radius) {
//	return Circle.area(radius);
//};
