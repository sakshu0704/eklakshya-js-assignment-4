function Shape(length,width){
    this.length=length;
    this.width=width;
    this.area=function(){}
}

function Rectangle(length,width){
    Shape.call(this,length,width);
    this.area=function(){
       console.log('Area of rectangle:',length*width);
    }
    this.perimeter=function(){
        console.log('perimeter of rectangle:',2*(length+width));
    }
}

function Triangle(side1,side2,height,length){
  this.height=height;
  this.side1=side1;
  this.side2=side2;
  Rectangle.call(this,length);
  this.area=function(){
      console.log('Area of Triangle:',0.5*length*height);
  }
  this.perimeter=function(){
      console.log('perimeter of triangle:',side1+side2+length);
  }
}

var triangle=new Triangle(5,4,8,4);
triangle.area();
triangle.perimeter();
var rectangle=new Rectangle(5,6);
rectangle.area();
rectangle.perimeter();

  