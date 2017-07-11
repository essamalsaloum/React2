export default class HipGenerator {

	constructor(form) {
		this.form = form
	}

	async generate() {
		return {
			name: this.form.ownName.toUpperCase()
		}
	}

}