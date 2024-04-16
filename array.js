//forEach
/*const name=["ram","shyam","zxc","mnbvc"];
const myfunction=(element,index)=>{
    console.log(element ,"index is" ,index);
}
name.forEach(myfunction);*/

//sort using comparator
const num=[23,89,1,9];
num.sort((p,q)=>
{
    return p-q;
})
console.log(num);










//1st way of array intialisation using []
/*let mixed=['yuvraj',23,true,'singh'];
mixed[4]="fg";

console.log(mixed[4]);*/

//2nd way of array intialisation
//const mixed=new Array(7,9,'hi',true);


//console.log(mixed);
//console.log(mixed.length);

// methods and functions in arrays
/*const students=['ram','shyam','shiv','ritesh','elizer'];


const num=[87,81,289];
num.sort();
console.log(num);*/

//splice function
/*students.splice(2,0,"yuvraj","rohit");
console.log(students);*/



//sort function
//students.sort();
//includes function
/*const hm=students.includes("ram");
console.log(hm);*/


//indexof
/*const hm=students.indexOf("shyam");
console.log(hm);*/


/*for(let i=0;i<students.length;i++)
{
    console.log(students[i])
}
*/
/*students.push('yuvraj');
students[0]="rohit";
students[1]="chombs";
students.pop();
//console.log(students);
//console.log(students.length);*/

//for in loop
/*for(let i in students)
{
    console.log(students[i]);
}*/