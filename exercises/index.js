let lights = document.getElementsByClassName('content')
for(i=0;i<lights.length;i++)
{
	lights[i].onclick = () => {
			event.target.classList.remove('off')
			turnOff(event.target)
	}	
}

turnOff = (element) => {
	parent = element.parentElement;
	i = parent.firstElementChild;
	while(i){
		if(i != event.target)
			i.classList.add('off')
		i = i.nextElementSibling
	}
}