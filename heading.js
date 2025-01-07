import './heading.css'
function bye(){
    const h=document.createElement('h1');
    h.innerHTML="welcome to my fantasy world";
    h.classList.add('header');
    const body=document.querySelector('body');
    body.append(h);
}
export default bye