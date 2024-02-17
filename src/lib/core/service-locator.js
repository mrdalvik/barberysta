class ServiceLocator {
    #serviceCollection;

	constructor() {
		this.#serviceCollection = new Map();
	}

	has(serviceName) {
		return this.#serviceCollection.has(serviceName);
	}

	get(serviceName) {
		if (!this.has(serviceName)) {
			return null;
		}

		return this.#serviceCollection.get(serviceName);
	}

	add(serviceName, service) {
		this.#serviceCollection.set(serviceName, service);

		return this;
	}
}

const serviceLocator = new ServiceLocator();

export {
	ServiceLocator,
	serviceLocator,
}