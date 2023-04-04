let array=[];

if(localStorage.array != null){
    array=JSON.parse(localStorage.array);
  }
 
let userName;
let Password;
let userEmail;
let phonenumber;

let DataCollected=document.getElementById("form");

DataCollected.addEventListener("submit",function(event){
event.preventDefault();

  userName=event.target.username.value;
  Password=event.target.password.value;
  userEmail=event.target.email.value;
  phonenumber=event.target.phonenumber.value;
 
  if( validateName() &&  validatePassword() && validateEmail() && validateNumber()){
		array.push(userName, Password, userEmail, phonenumber);
		localStorage.setItem('array',JSON.stringify(array) );
		DataCollected.reset(); 
  }

 
  
});

function validateName() {
	let Name = userName.toLowerCase();
	if (Name == "") {
	  alert("Name Is Required");
	  return false;

	}else if(Name.includes(" ")){
		alert("No Spaces Allowed");
		return false;	
	} else if(array.includes(userName)){

		alert("Username already exists.Try Again");
		return false;
	}
	
return true;

  }
  

  function validatePassword(){
	let password = Password;
			const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
			if (!passwordRegex.test(password)) {
				   alert("Password must contain at least 8 characters, 1 number, 1 uppercase letter, and 1 special character");
				   return false;
				 }
		return true;
	}   

	function validateEmail(){
		let iChars = "!#$%^&*()+=-[]\\\';,/{}|\":<>?";
		let Email = userEmail.toLowerCase();
		 if(!Email.includes("@")  || !Email.includes(".com") ){
			alert("Please enter a valid Email ex.(email@gmail.com)");
			return false;
		}

		
		for (let i = 0; i < Email.length; i++) {
			if (iChars.indexOf(Email.charAt(i)) != -1) {
			alert ("The Email has special characters. \nThese are not allowed.\n");
			return false;
				}
			}
			return true;
		}   

		function validateNumber(){
			let iChars = "!#$%^&*()+=-[]\\\';,/{}|\":<>?@.";
			let Number = phonenumber;
  
			 if( !(Number.includes("07"))    || !(Number.length ==10)  ){
				alert("Please enter a valid number ex. 0799855850");
				return false;
			}
			
			for (let i = 0; i < Number.length; i++) {
				if (iChars.indexOf(Number.charAt(i)) != -1) {
				alert ("The Number has special characters. \nThese are not allowed.\n");
				return false;
					}
				}
		return true;
			}   

