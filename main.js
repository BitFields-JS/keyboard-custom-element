class XKeyboard extends HTMLElement {
	constructor() {
		super();
		this.style.display = 'flex';
		this.style.justifyContent = 'center';
		this.style.alignItems = 'center';

		this.build();
		console.log('XKeyboard');
	}
	
	build() {
		let gridPanel = document.createElement('div');
		gridPanel.setAttribute('class', 'keyboard-panel');
		gridPanel.style.gridTemplateColumns = '1fr 1fr 1fr';
		gridPanel.style.columnGap  = '1rem';
		gridPanel.style.rowGap  = '1rem';

		let buttons = this.getAttribute('buttons').split(' ');
		for (let txt of buttons) {
			let btn = document.createElement('h1');
			btn.style.textAlign = 'center';
			btn.textContent = txt;
			gridPanel.appendChild(btn);
		}

		this.appendChild(gridPanel);

		console.log('XKeyboard:build');
	}
}



(function init() {
	window.customElements.define('x-keyboard', XKeyboard);
})();


/*
.keyboard-panel {
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 1fr 1fr;
	background: var(--background-0);
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
}

.keyboard-panel h1 {
	user-select: none;
	font-size: var(--xx-lg);
	padding: 2rem;
	transition: box-shadow 0.5s ease-out;
}

.keyboard-panel h1:hover {
	box-shadow: 0 0 12px -6px var(--blue) inset;
	transition: all 0.5s ease-in;
}

.keyboard-panel h1:active {
	background: var(--background-1);
	text-shadow: 0 0 12px var(--blue);
	transition: all 0.05s ease-in;
}

@media screen and (max-width: 600px) {
	.keyboard-panel {
		grid-template-columns: 1fr 1fr 1fr;
		background: var(--background-0);
		grid-column-gap: 0.25rem;
		grid-row-gap: 0.25rem;
	}

	.keyboard-panel h1 {
		user-select: none;
		font-size: var(--x-lg);
		padding: 1rem;
		transition: box-shadow 0.5s ease-out;
	}

	.keyboard-panel h1:hover {
		box-shadow: 0 0 12px -6px var(--blue) inset;
		transition: all 0.5s ease-in;
	}

	.keyboard-panel h1:active {
		background: var(--background-1);
		text-shadow: 0 0 12px var(--blue);
		transition: all 0.05s ease-in;
	}
}
*/
