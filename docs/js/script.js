customElements.define('cm-header', class extends HTMLElement {
	constructor() {
		super();
		const h1 = this.getAttribute('h1');
		this.outerHTML = `
      <header>ヘッダー</header>
		`;
	}
});
customElements.define('cm-footer', class extends HTMLElement {
	constructor() {
		super();
		const h1 = this.getAttribute('h1');
		this.outerHTML = `
      <footer>フッター</footer>
		`;
	}
});