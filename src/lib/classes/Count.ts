interface ICount {
  getCount(): number
  setCount(newCount: number): void
}

class CCount implements ICount {
  private count = 0
  constructor(initialCount: number) {
    this.count = initialCount
  }
  getCount(): number {
    return this.count
  }
  setCount(newCount: number): void {
    this.count = newCount
  }
}
