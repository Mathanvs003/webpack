import maddy from './god.jpg';

export function logoimage(){
    console.log("snskdn")
    const Imge=document.createElement('img')
   
    Imge.src=maddy;

    const bo=document.querySelector('body');
    if(bo){
        bo.append(Imge)
    } else{
        console.log("error")
    }
    
    
}
