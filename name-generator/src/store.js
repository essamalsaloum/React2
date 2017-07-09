class Store {

	//------
	// State

	state = {
		counter: 1
	}

	get(key) {
		return this.state[key]
	}

	setState(updates) {
		Object.assign(this.state, updates)
		this.notify()
	}

	//------
	// Subscriptions

	handlers = new Set()

	subscribe(handler) {
		this.handlers.add(handler)
	}

	unsubscribe(handler) {
		this.handlers.delete(handler)
	}

	notify() {
		for (const handler of this.handlers) {
			handler(this.state)
		}
	}

}

export default new Store()