class XKeyboard extends HTMLElement {
	constructor() {
		super();
		this.style.display = 'flex';
		this.style.justifyContent = 'center';
		this.style.alignItems = 'center';
		this.keyboardPressEvent = new Event('x-keyboard-press', { bubbles: true, cancelable: false });
		let styles = document.createElement('style');
		styles.textContent = `
		x-keyboard[locked] {
			color: #ff5500;
		}

		x-keyboard {
			color: #00ffaa;
		}

		.keyboard-panel {
			display: grid;
			padding: 2rem;
			grid-template-columns: 1fr 1fr 1fr;
			grid-column-gap: 0.25rem;
			grid-row-gap: 0.25rem;
			background: #000000;

		}
		
		.keyboard-panel p {
			user-select: none;
			font-size: 2rem;
			padding: 2rem;
			width: 5vw;
			height: 5vw;
			border-radius: ${this.hasAttribute('round') ? '50%' : '0%'  };
			background: #000000;
		}

		.keyboard-panel p:hover {
			background: #000000;
			transition: all 0.25s ease-in;
		}

		.keyboard-panel p:active {
			color: #ffffff;
			text-shadow: 0 0 12px #112211;
			transition: all 0.05s ease-in;
		}

		@media screen and (max-width: 600px) {
			.keyboard-panel {
				grid-column-gap: 0.1rem;
				grid-row-gap: 0.1rem;
			}
		
			.keyboard-panel p {
				font-size: 2rem;
				width: 64px;
				height: 64px;
				padding: 1rem;
			}
		}`;
		this.appendChild(styles);
		this.build();
	}

	build() {
		let gridPanel = document.createElement('div');
		gridPanel.setAttribute('class', 'keyboard-panel');
		gridPanel.style.gridTemplateColumns = '1fr 1fr 1fr';
		gridPanel.style.columnGap = '1rem';
		gridPanel.style.rowGap = '1rem';

		let buttons = this.getAttribute('buttons').split(' ');
		for (let txt of buttons) {
			let btn = document.createElement('p');
			btn.style.textAlign = 'center';
			btn.textContent = txt;
			btn.onclick = (event) => btn.dispatchEvent(this.keyboardPressEvent);

			gridPanel.appendChild(btn);
		}

		this.appendChild(gridPanel);
	}
}



(function init() {
	window.customElements.define('x-keyboard', XKeyboard);
})();


// function example() {
// 	// character pressed is in target.textContent
// 	document.addEventListener('x-keyboard-press', (event) => console.log(event.target.textContent));
// 	setInterval(() => {
// 		let kbd0 = document.getElementById('keyboard-0');
// 		if (kbd0.hasAttribute('locked')) {
// 			kbd0.removeAttribute('locked');
// 		} else {
// 			kbd0.setAttribute('locked', true);
// 		}
// 	}, 5000);
// }
