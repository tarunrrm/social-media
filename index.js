// side bar
const menuItem=document.querySelectorAll('.menu-item');
// messages
const messageNotification=document.querySelector('#message-notifications');
const messages=document.querySelector('.messages');
const message =messages.querySelectorAll('.message');
const messageSearch=document.querySelector('#message-search');

//remove active class for all items
const changeActiveItem=()=>{
  menuItem.forEach(item=>{
    item.classList.remove('active');
  })
}


menuItem.forEach(item =>{
  item.addEventListener('click',()=>{
    changeActiveItem();
    item.classList.add('active');
    if(item.id!='notifications'){
      document.querySelector('.notification-popup').style.display='none';
    }
    else{
      document.querySelector('.notification-popup').style.display='block';
      document.querySelector('#notifications .notification-count').style.display='none';

    }
  })
})
// --------------------messages---------------------------------
// search chats
const searchMessage=()=>{
  const val= messageSearch.value.toLowerCase();
  message.forEach(chat=>{
    console.log(val);
    let name=chat.querySelector('h5').textContent.toLowerCase();
    if(name.indexOf(val)!=-1){
      chat.style.display='flex';
    }
    else{
      chat.style.display='none';
    }
  })
}
//search chat
messageSearch.addEventListener('keyup',searchMessage);

//highlight when message is clicked
messageNotification.addEventListener('click',()=>{
  messages.style.boxShadow='0 0 1rem var(--color-primary)';
  messageNotification.querySelector('.notification-count').style.display='none';
  setTimeout(()=>{
    messages.style.boxShadow='none';
  },2000
  )
})