class XKeyboard extends HTMLElement {
	constructor() {
		super();
		this.style.display = 'flex';
		this.style.justifyContent = 'center';
		this.style.alignItems = 'center';
		this.keyboardPressEvent = new Event('x-keyboard-press', { bubbles: true, cancelable: false });
		let styles = document.createElement('style');
		styles.textContent = `
		.keyboard-panel {
			display: grid;
			width: 100%;
			grid-template-columns: 1fr 1fr 1fr;
			background: var(--background-0);
			grid-column-gap: 1rem;
			grid-row-gap: 1rem;
		}

		.keyboard-panel p {
			user-select: none;
			font-size: var(--x-lg);
			padding: 2rem;
			transition: box-shadow 0.5s ease-out;
		}

		.keyboard-panel p:hover {
			box-shadow: 0 0 12px -6px var(--blue) inset;
			transition: all 0.5s ease-in;
		}

		.keyboard-panel p:active {
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
		
			.keyboard-panel p {
				user-select: none;
				font-size: var(--x-lg);
				padding: 1rem;
				transition: box-shadow 0.5s ease-out;
			}
		
			.keyboard-panel p:hover {
				box-shadow: 0 0 12px -6px var(--blue) inset;
				transition: all 0.5s ease-in;
			}

			.keyboard-panel p:active {
				background: var(--background-1);
				text-shadow: 0 0 12px var(--blue);
				transition: all 0.05s ease-in;
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
	// character pressed is in target.textContent
	// document.addEventListener('x-keyboard-press', (event) => console.log(event.target.textContent));
})();
