class Toggle {
  private toggle
  constructor(initialValue: boolean) {
    this.toggle = initialValue
  }

  getToggle() {
    return this.toggle
  }
  switch() {
    this.toggle = !this.toggle
  }
  disable() {
    this.toggle = false
  }
  enable() {
    this.toggle = true
  }
}

export { Toggle }
