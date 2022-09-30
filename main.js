const toggle_btn = document.getElementById("toggle");
const menu_list = document.getElementById('toggle_menu');

toggle_btn.addEventListener('click' , ()=>{
   
    menu_list.classList.toggle("active");
    console.log(menu_list.classList)
})