document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  

  const addUserButton=document.getElementById('add-user-button')
  addUserButton.addEventListener('click',()=>{
    document.querySelector('.add-user-modal').classList.add('show')
   
    document.querySelector('.add-user-modal-block').classList.remove('dis-none')
  })

    document.querySelector('.add-user-modal-block').addEventListener('click',(e)=>{
    document.querySelector('.add-user-modal').classList.remove('show')
    e.target.classList.add('dis-none')
  })

  
}); 
