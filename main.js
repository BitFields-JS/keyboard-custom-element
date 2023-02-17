class XKeyboard extends HTMLElement {
	constructor() {
		super();
		this.style.display = 'flex';
		this.style.justifyContent = 'center';
		this.style.alignItems = 'center';
		this.keyboardPressEvent = new Event('x-keyboard-press', { bubbles: true, cancelable: false });
		let styles = document.createElement('style');
		// default styles
		styles.textContent = `
		x-keyboard { color: #00ffaa; ; text-shadow: 0 0 1rem #00ffaa; }
		x-keyboard[locked] { color: #ff0000; text-shadow: 0 0 1rem #ff2222; }
		x-keyboard[rounded] p { border-radius: 50%; }

		.keyboard-panel {
			display: grid;
			padding: 1rem;
			grid-template-columns: 1fr 1fr 1fr;
			grid-column-gap: 0.125rem;
			grid-row-gap: 0.125rem;
		}
		
		.keyboard-panel p {
			display: flex;
			align-items: center;
			justify-content: center;
			user-select: none;
			font-size: 200%;
			padding: 1rem;
			width: 5vw;
			height: 5vw;
			box-shadow: 0 0 3px #222222 inset;
			border-radius: 20%;
			transition: all 0.25s ease-out;
		}

		x-keyboard .keyboard-panel p:hover {
			box-shadow: 0 0 6px #00ff00 inset;
			transition: all 0.25s ease-in;
		}
		
		x-keyboard[locked] .keyboard-panel p:hover {
			box-shadow: 0 0 6px  #ff0000 inset;
		}

		x-keyboard .keyboard-panel p:active {
			color: #aaffaa;
			text-shadow: 0 0 0.25rem #00ff00;
			transition: all 0.05s ease-in;
		}
		
		x-keyboard[locked] .keyboard-panel p:active {
			color: #ffaaaa;
			text-shadow: 0 0 0.25rem #ff0000;
			transition: all 0.05s ease-in;
		}

		@media screen and (max-width: 768px) {
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


// Example
// (function main() {
// 	let output = document.getElementById('output');
// 	output.style.fontSize = '2rem';

// 	let text = [];

// 	document.addEventListener('x-keyboard-press', (event) => {
// 		if (event.target.parentNode.parentNode.id === 'keyboard-0') {
// 			text.push(event.target.textContent);
// 			output.textContent = text;
// 		}

// 		console.log(text.join(''));

// 		if (text.join('') === '#2002*') {
// 			console.log('UNLOCKED');
// 			document.getElementById('keyboard-0').removeAttribute('locked');
// 			text = [];
// 			output.textContent = '';
// 		}
// 		if (text.join('') === '*1001#') {
// 			console.log('LOCKED');
// 			document.getElementById('keyboard-0').setAttribute('locked', true);
// 			text = [];
// 			output.textContent = '';
// 		}
// 	})
// })();
