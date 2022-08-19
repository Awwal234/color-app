const box = document.getElementById('box');
const inp = document.getElementById('inp');

inp.addEventListener('keyup', () => {
	const bg = inp.value;
	box.style.background = bg;
});
