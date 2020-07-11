
export function ValidRollogin(){
	const activeSession = localStorage.getItem('key'); 
	const sesion = JSON.parse(activeSession)
	if (sesion != null) {
		if(sesion.data.admin){
			window.location.href="http://localhost:3000/admin";
		}else{
			window.location.href="http://localhost:3000/user";
		}
	}
}

export function Validlogin(){
	const activeSession = localStorage.getItem('key'); 
	const sesion = JSON.parse(activeSession)
	if (!sesion) {
		window.location.href="http://localhost:3000/login";
	}
}
