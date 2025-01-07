import './egbutton.css'

  class button {

    render() {

        const butt = document.createElement("button");

        butt.innerText = "Click";

        butt.classList.add('green'); // Use classList.add to add the class
 
        const body = document.querySelector('body');

        if (body) {

            body.append(butt); // Append the button to the body

        } else {

            console.error('Body element not found.');

        }

    }

}

 
export default button;