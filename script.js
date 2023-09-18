function playGame(){
    let b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById('b1').value; 
    b2 = document.getElementById('b2').value; 
    b3 = document.getElementById('b3').value; 
    b4 = document.getElementById('b4').value; 
    b5 = document.getElementById('b5').value; 
    b6 = document.getElementById('b6').value; 
    b7 = document.getElementById('b7').value; 
    b8 = document.getElementById('b8').value; 
    b9 = document.getElementById('b9').value; 

    let b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;
    b1btn = document.getElementById('b1');
    b2btn = document.getElementById('b2');
    b3btn = document.getElementById('b3');
    b4btn = document.getElementById('b4');
    b5btn = document.getElementById('b5');
    b6btn = document.getElementById('b6');
    b7btn = document.getElementById('b7');
    b8btn = document.getElementById('b8');
    b9btn = document.getElementById('b9');

    //check if player X won
    //if yes, disable all other fields
    if(b1 === 'X' && b2 === 'X' && b3 === 'X'){
        document.getElementById('print').textContent = 'Player X won';
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = 'red';
        b2btn.style.color = 'red';
        b3btn.style.color = 'red';
    }
    else if(b1 === 'X' && b4 === 'X' && b7 === 'X'){
        document.getElementById('print').textContent = 'Player X won';
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = 'red';
        b4btn.style.color = 'red';
        b7btn.style.color = 'red';
    }
    else if(b7 === 'X' && b8 === 'X' && b9 === 'X'){
        document.getElementById('print').textContent = 'Player X won';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = 'red';
        b8btn.style.color = 'red';
        b9btn.style.color = 'red';
    }
    else if(b3 === 'X' && b6 === 'X' && b9 === 'X'){
        document.getElementById('print').textContent = 'Player X won';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = 'red';
        b6btn.style.color = 'red';
        b9btn.style.color = 'red';
    }
    else if(b1 === 'X' && b5 === 'X' && b9 === 'X'){
        document.getElementById('print').textContent = 'Player X won';
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = 'red';
        b5btn.style.color = 'red';
        b9btn.style.color = 'red';
    }
    else if(b3 === 'X' && b5 === 'X' && b7 === 'X'){
        document.getElementById('print').textContent = 'Player X won';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = 'red';
        b5btn.style.color = 'red';
        b7btn.style.color = 'red';
    }
    else if(b2 === 'X' && b5 === 'X' && b8 === 'X'){
        document.getElementById('print').textContent = 'Player X won';
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = 'red';
        b5btn.style.color = 'red';
        b8btn.style.color = 'red';
    }
    else if(b4 === 'X' && b5 === 'X' && b6 === 'X'){
        document.getElementById('print').textContent = 'Player X won';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = 'red';
        b5btn.style.color = 'red';
        b6btn.style.color = 'red';
    }

    //check if player O won
    //if yes, disable all other fields
    else if(b1 === 'O' && b2 === 'O' && b3 === 'O'){
        document.getElementById('print').textContent = 'Player O won';
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = 'red';
        b2btn.style.color = 'red';
        b3btn.style.color = 'red';
    }
    else if(b1 === 'O' && b4 === 'O' && b7 === 'O'){
        document.getElementById('print').textContent = 'Player O won';
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = 'red';
        b4btn.style.color = 'red';
        b7btn.style.color = 'red';
    }
    else if(b7 === 'O' && b8 === 'O' && b9 === 'O'){
        document.getElementById('print').textContent = 'Player O won';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = 'red';
        b8btn.style.color = 'red';
        b9btn.style.color = 'red';
    }
    else if(b3 === 'O' && b6 === 'O' && b9 === 'O'){
        document.getElementById('print').textContent = 'Player O won';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = 'red';
        b6btn.style.color = 'red';
        b9btn.style.color = 'red';
    }
    else if(b1 === 'O' && b5 === 'O' && b9 === 'O'){
        document.getElementById('print').textContent = 'Player O won';
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = 'red';
        b5btn.style.color = 'red';
        b9btn.style.color = 'red';
    }
    else if(b3 === 'O' && b5 === 'O' && b7 === 'O'){
        document.getElementById('print').textContent = 'Player O won';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = 'red';
        b5btn.style.color = 'red';
        b7btn.style.color = 'red';
    }
    else if(b2 === 'O' && b5 === 'O' && b8 === 'O'){
        document.getElementById('print').textContent = 'Player O won';
        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = 'red';
        b5btn.style.color = 'red';
        b8btn.style.color = 'red';
    }
    else if(b4 === 'O' && b5 === 'O' && b6 === 'O'){
        document.getElementById('print').textContent = 'Player O won';
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = 'red';
        b5btn.style.color = 'red';
        b6btn.style.color = 'red';
    }

    //check for Tie
    else if(
        (b1 === 'X' || b1 === 'O') &&
        (b2 === 'X' || b2 === 'O') &&
        (b3 === 'X' || b3 === 'O') &&
        (b4 === 'X' || b4 === 'O') &&
        (b5 === 'X' || b5 === 'O') &&
        (b6 === 'X' || b6 === 'O') &&
        (b7 === 'X' || b7 === 'O') &&
        (b8 === 'X' || b8 === 'O') &&
        (b9 === 'X' || b9 === 'O')
    ){
        document.getElementById('print').textContent = 'Match Tie';
    }

    //check whose turn next
    else{
        if(flag == 1){
            document.getElementById('print').textContent = 'Player X Turn';
        } else{
            document.getElementById('print').textContent = 'Player O Turn';
        }
    }
}

//reset game
function resetGame(){
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

//check turn of player and accordingly put X or O
flag = 1;
function inputB1(){
    if(flag === 1){
        document.getElementById('b1').value = 'X';
        document.getElementById('b1').disabled = true;
        flag = 0;
    } else{
        document.getElementById('b1').value = 'O';
        document.getElementById('b1').disabled = true;
        flag = 1;
    }
}

function inputB2(){
    if(flag === 1){
        document.getElementById('b2').value = 'X';
        document.getElementById('b2').disabled = true;
        flag = 0;
    } else{
        document.getElementById('b2').value = 'O';
        document.getElementById('b2').disabled = true;
        flag = 1;
    }
}

function inputB3(){
    if(flag === 1){
        document.getElementById('b3').value = 'X';
        document.getElementById('b3').disabled = true;
        flag = 0;
    } else{
        document.getElementById('b3').value = 'O';
        document.getElementById('b3').disabled = true;
        flag = 1;
    }
}

function inputB4(){
    if(flag === 1){
        document.getElementById('b4').value = 'X';
        document.getElementById('b4').disabled = true;
        flag = 0;
    } else{
        document.getElementById('b4').value = 'O';
        document.getElementById('b4').disabled = true;
        flag = 1;
    }
}

function inputB5(){
    if(flag === 1){
        document.getElementById('b5').value = 'X';
        document.getElementById('b5').disabled = true;
        flag = 0;
    } else{
        document.getElementById('b5').value = 'O';
        document.getElementById('b5').disabled = true;
        flag = 1;
    }
}

function inputB6(){
    if(flag === 1){
        document.getElementById('b6').value = 'X';
        document.getElementById('b6').disabled = true;
        flag = 0;
    } else{
        document.getElementById('b6').value = 'O';
        document.getElementById('b6').disabled = true;
        flag = 1;
    }
}

function inputB7(){
    if(flag === 1){
        document.getElementById('b7').value = 'X';
        document.getElementById('b7').disabled = true;
        flag = 0;
    } else{
        document.getElementById('b7').value = 'O';
        document.getElementById('b7').disabled = true;
        flag = 1;
    }
}

function inputB8(){
    if(flag === 1){
        document.getElementById('b8').value = 'X';
        document.getElementById('b8').disabled = true;
        flag = 0;
    } else{
        document.getElementById('b8').value = 'O';
        document.getElementById('b8').disabled = true;
        flag = 1;
    }
}

function inputB9(){
    if(flag === 1){
        document.getElementById('b9').value = 'X';
        document.getElementById('b9').disabled = true;
        flag = 0;
    } else{
        document.getElementById('b9').value = 'O';
        document.getElementById('b9').disabled = true;
        flag = 1;
    }
}
