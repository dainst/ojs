const ojsPattern = /http.*(\/journals).*/;
const ompPattern = /http.*(\/books).*/;

var relativePath = '';
var match = window.location.href.match(ojsPattern);

if (match !== null && match.length > 1) relativePath = match[1];
else {
	match = window.location.href.match(ompPattern);
	if (match !== null && match.length > 1) match[1];
}

function loadHTML() {
	fetch(relativePath + '/plugins/themes/dai/js/idai-world.html')
		.then(response => response.text())
		.then(text => {
			const navigationUserElement = document.getElementById('navigationUser');

			const idaiWorldNavDropdown = document.createElement('li');
			idaiWorldNavDropdown.innerHTML = text;
			idaiWorldNavDropdown.style.left = 0;
			idaiWorldNavDropdown.style.position = 'absolute';

			const griffinImage = document.createElement('img');
			griffinImage.style.height = '25px';
			griffinImage.src =
				relativePath + '/plugins/themes/dai/images/logo_griffin.png';

			const griffinIco = document.createElement('li');
			griffinIco.style.float = 'right';
			griffinIco.style.marginTop = '2px';
			griffinIco.appendChild(griffinImage);

			navigationUserElement.appendChild(griffinIco);
			navigationUserElement.appendChild(idaiWorldNavDropdown);

			document.getElementById('idai-world-logo').src =
				relativePath + '/plugins/themes/dai/images/logo_idai.png';
		});
}

loadHTML();
