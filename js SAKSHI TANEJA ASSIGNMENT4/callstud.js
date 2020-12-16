var details= function(){
    console.log('I am',this.name)
}
var showMessage={
    greet:function(){
        return 'welcome'+this.name;
    }
}
var findTotal ={
    sum:function(x,y){
        console.log('Total Marks for',this.name)
        console.log('Sum',(x+y))
    
     }    
    }

  var showHobbies= function(...hobby){
      console.log('I am ',this.name);
      hobby.forEach(element => {
          console.log('my hobby is:',element);
          
      });
  }   
 
     

var student={
    name:'Raju',
    
    
}
var student1={
    name:'mohan',
}

details.call(student);
var message=showMessage.greet.call(student);
console.log(message);
findTotal.sum.call(student,90,80);
findTotal.sum.apply(student,[60,80]);
showHobbies.apply(student1,['reading','music','dancing']);
showHobbies.apply(student,['reading','watching tv','dancing']);


