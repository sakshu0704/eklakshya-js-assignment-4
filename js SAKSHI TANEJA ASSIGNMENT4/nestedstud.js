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
var findAvg={
    avg:function(x,y){
        console.log('total avg for',this.name)
        console.log('Avg',(x+y)/2)
    }
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
findAvg.avg.call(student,90,80);
findAvg.avg.apply(student,[90,64]);
findTotal.sum.call(student1,90,80);
findTotal.sum.apply(student1,[60,80]);
findAvg.avg.call(student1,90,80);
findAvg.avg.apply(student1,[90,64]);




