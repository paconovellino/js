var edad = prompt("Cual es tu edad?");

if (Number(edad) < 18) {
	alert("Lo siento, eres demasiado joven para manejar este Tesla. Powering off");
} else if (Number(edad) > 18) {
	alert("Powering On. Disfruta el viaje!");
} else if (Number(edad) === 18) {
	alert("Felicidades en tu nueva experiencia de manejo. Disfruta el viaje!");
}