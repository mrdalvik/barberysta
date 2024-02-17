class ServiceLocator {
  readonly #serviceCollection

  constructor () {
    this.#serviceCollection = new Map()
  }

  has (serviceName: string): boolean {
    return this.#serviceCollection.has(serviceName)
  }

  get (serviceName: string): any {
    if (!this.has(serviceName)) {
      return null
    }

    return this.#serviceCollection.get(serviceName)
  }

  add (serviceName: string, service: any): this {
    this.#serviceCollection.set(serviceName, service)

    return this
  }
}

const serviceLocator = new ServiceLocator()

export {
  ServiceLocator,
  serviceLocator
}
