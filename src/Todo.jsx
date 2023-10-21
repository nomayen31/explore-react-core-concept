function Todo({task, isDone}){
  if (isDone) {
   return(
      <li> finish:  {task}</li>
   )
  }else{
   return(
      <li>Work on :{task}</li>
   )
  }
}

export default Todo;