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


  
//   setTimeout(function(){
//     console.log("start...");
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((json) => {
//     console.log("end...");
//     console.log(json);
//     let html=""
//     for (const user of json){
//       html=html+ `<tr>
   
//           <td>${user.id}</td>
//           <td>${user.name}</td>
//           <td>${user.email}</td>
//           <td>${user.address.city}</td>
//           <td> <i class="material-icons red-text m-l-2 m-r-2">delete</i>
//             <i class="material-icons orange-text m-l-2 m-r-2">edit</i></td>
//         </tr>`}
//         document.querySelector('.desktop-user').innerHTML=html
//   });
//   },5000)
 }); 

