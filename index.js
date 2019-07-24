// console.log("hello node")

var rect = require("./rectangle");


function AreaOfRectangle (l,b){
console.log("we are finding area of rectangle length of :  " +  l +" and bredth of :"+b )
rect(l,b ,(err,rectangle)=>{
if(err){
console.log(err.message)
}
else{
    console.log(rectangle.area())
}
})

}


AreaOfRectangle(5,4);

// AreaOfRectangle(2,2);

AreaOfRectangle(0,0);

