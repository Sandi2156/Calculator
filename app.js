
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');


let screenShow = '';
let temp = 0,prevAns;
for (item of buttons)
{

    item.addEventListener('click', (e)=>{

        let buttonText = e.target.innerText;
        
        if(buttonText == 'c'){
            screenShow = '';
            screen.value = screenShow;
        }
        else if (buttonText == '='){
            screenShow = eval(screenShow);
            screen.value = screenShow;
            temp = 1;
            prevAns = screenShow;
        }
        else if(buttonText == 'Back'){
            screenShow = screenShow.substring(0,screenShow.length-1);
            screen.value = screenShow;
        }
        else if(buttonText == '00'){
            if(temp == 1){
                screenShow = '';
                screen.value = screenShow;
                temp = 0;
            }
            else{
            screenShow += buttonText;
            screen.value = screenShow;}
        }
        else if( buttonText == 'log' || buttonText == 'sin' || buttonText == 'cos' || buttonText == 'tan' || buttonText == 'cot'){
            
        }
        else if(buttonText == 'Ans'){
            if(temp == 1){
                screenShow = '';
                screen.value = screenShow;
                temp = 0;
            }
            if(prevAns < 0)
                prevAns = '('+prevAns+')';
            screenShow += prevAns;
            screen.value = screenShow;
        }
        else
        {
            if(temp == 1){
                screenShow = '';
                screen.value = screenShow;
                temp = 0;
            }
            screenShow += buttonText;
            screen.value = screenShow;
        }
    })
}