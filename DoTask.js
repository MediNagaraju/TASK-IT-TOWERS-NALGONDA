document.addEventListener('DOMContentLoaded',()=>{
    const taskInput=document.getElementById('taskInput') 
    const addTaskButton=document.getElementById('addTaskButton')
    const taskList=document.getElementById('taskList')

    function addTask(){
        const inputText=taskInput.value.trim()
        if(inputText !==''){

            const li=document.createElement('li')

            const span=document.createElement('span')
            span.textContent=inputText;


            const actions=document.createElement('div')
            actions.className='actions'

            const EditButton=document.createElement('button')
            EditButton.className='edit-btn'
            EditButton.textContent='Edit'
            EditButton.addEventListener('click',()=>editTask(li))

            const CompleteButton=document.createElement('button')
            CompleteButton.className='complete-btn'
            CompleteButton.textContent='Complete'
            CompleteButton.addEventListener('click',()=>toggleCompleteTask(li))


            const DeleteButton=document.createElement('button')
            DeleteButton.textContent='Delete'
            DeleteButton.addEventListener('click',()=>removeTask(li))

            actions.appendChild(EditButton)
            actions.appendChild(CompleteButton)
            actions.appendChild(DeleteButton)

            li.appendChild(span)
            li.appendChild(actions)
            

            taskList.appendChild(li)
            taskInput.value='';
        }
    }

    function editTask(taskElement){
        const span=taskElement.querySelector('span')
        const NewTaskText=prompt("Enter to chane Task",span.textContent)
        if(NewTaskText !== null && NewTaskText.trim() !== ''){
        span.textContent=NewTaskText.trim()
    }
    }
    function toggleCompleteTask(taskElement){
        taskElement.classList.toggle('completed')
    }

    function removeTask(taskElement){
        taskList.removeChild(taskElement)
    }


    addTaskButton.addEventListener('click',addTask)
})