function boring( ){
    document.getElementById('main').style="background-color:white;"
    document.getElementById('modes').innerHTML="boring....."
}
function defult( ){
    document.getElementById('main').style="background-color: rgb(143, 223, 93)"
    document.getElementById('modes').innerHTML="defult"
}
function batman( ){
    
    document.getElementById('main').style="background-color:black;"
    document.getElementById('modes').innerHTML="batman"
    
    
}
function perimeter1( ) {

	let a1 = document.getElementById('a').value;
	let b1 = document.getElementById('b').value;
    let c1 = document.getElementById('c').value;

                
	const result = parseFloat (a1) + parseFloat(b1) + parseFloat(c1); 
				
	document.getElementById('result').innerHTML = result;
}

function area( ) {

	
	let base = document.getElementById('base').value;
    let hight = document.getElementById('hight').value;

                
	const result = 0.5 * parseFloat(base) * parseFloat(hight)
				
	document.getElementById('result2').innerHTML = result;


}


function volume( ) {

	let L = document.getElementById('L').value;
	let W = document.getElementById('W').value;
    let H = document.getElementById('H').value;

                
	const result = parseFloat (L) * parseFloat(W) * parseFloat(H); 
				
	document.getElementById('result3').innerHTML = result;}