const dialog=document.querySelector('#booking');
const form=document.querySelector('#booking-form');
const status=document.querySelector('#form-status');
document.querySelectorAll('[data-book],[data-service]').forEach(button=>button.addEventListener('click',()=>{form.elements.service.value=button.dataset.service||'Нужна консультация';status.textContent='';dialog.showModal();document.body.classList.add('modal-open')}));
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
dialog.addEventListener('click',event=>{const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close()});
form.addEventListener('submit',event=>{event.preventDefault();status.textContent='Форма заполнена корректно. Это демонстрация: данные никуда не отправлены. Для приёма заявок нужно подключить контакты мастерской.'});
document.querySelector('#year').textContent=new Date().getFullYear();
