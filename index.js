// console.log("hello node")

var rect = {

    perimeter:(x,y) => (2*(x+y)),
    area: (x,y) => (x*y) 
}


function AreaOfRectangle (l,b){
console.log("we are finding area of rectangle length of :  "+l +" and bredth of :"+b )

if(l<=0 || b<=0){
    console.log("the dimension should be greater than 0")
}
else{
    console.log("the area of rectangle is : " + rect.area(l,b))

}

console.log("perimeter of rectangle  " + rect.perimeter(l,b))

}


AreaOfRectangle(5,4);
AreaOfRectangle(2,2);
AreaOfRectangle(0,0);

