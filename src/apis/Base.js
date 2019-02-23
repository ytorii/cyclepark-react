import client from './client'

const endpoints = {
  all: ""
}

export default class Base {
  constructor() {
    this.endpoints = endpoints
    this.client = client
  }

  all = () => {
    const url = this.endpoints.all
    return this.client.get(url).json()
  }
}
