function nuevoAjax(){
var xmlhttp=false;
 try {
  xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
 } catch (e) {
  try {
   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (E) {
   xmlhttp = false;
  }
 }

if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
  xmlhttp = new XMLHttpRequest();
}
return xmlhttp;
}

function enviarMail(){
	c = document.getElementById('resultado_mensaje');
	
	//variable=documenet.nombre_del_form.nombre_del_control.value
	emis=document.enviar_email.nombre.value;
	dest=document.enviar_email.email.value;
	men=document.enviar_email.mensaje.value;
	
	ajax=nuevoAjax();
	c.innerHTML = '<p style="text-align:center;"><img src="esperando.gif"/></p>'; 
	ajax.open("POST", "envia_mail.php",true);
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			c.innerHTML = ajax.responseText
		}
		borrarCampos()
	}
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("nombre="+emis+"&email="+dest+"&mensaje="+men)
}

function borrarCampos(){
	document.enviar_email.nombre.value="";
	document.enviar_email.email.value="";
	document.enviar_email.mensaje.value="";
}