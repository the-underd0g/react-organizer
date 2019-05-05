import { addNewTask, updateTask } from "./server";

(async function(){
    await addNewTask({name:"Spec task",isComplete:false,id:"TEST-1"});
    console.log("Added new task");
    await updateTask("TEST-1", {
        name:"Spec Task Updated",
        isComplete: true
    });
    console.log("updated Task");

})();