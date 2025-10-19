let todo =[];
let req = prompt("Enter your request");
while(true){
    if(req == "quit"){
        console.log("you quit");
    break;
}
if(req == "list"){
    console.log("__________________________________");
    for(i = 0; i < todo.length; i++){
        console.log(i, todo[i]);
    }
    console.log("__________________________________")
}else if(req == "add"){
    let task = prompt("Enter the task you want to add");
    todo.push(task);
    console.log("task added");
}else if(req == "delete"){
    let idx = prompt("Enter the index you want to delete");
    todo.splice(idx,1);
    console.log("task deleted");
}else{
    console.log("wrong request");
}
req = prompt("Enter your request");
}