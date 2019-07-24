
module.exports = (x,y,callback)=>{


       

    if(x<=0 || y<=0){



        setTimeout(()=>
        callback(new Error("the dimension should be greater than 0"),null)
        
        ,2000)


    }
    else{
       console.log( "values" + x,y)
       setTimeout(()=>
       callback(null, {
       perimeter:()=>(2*(x+y)),
       area:()=> (x*y)

       })
       
       ,2000)
       console.log("else end")
    
    }
    



}









