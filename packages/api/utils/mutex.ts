export default class Mutex {
  private queue: (() => void)[] = []
  private isLocked = false

  async lock() {
    if (this.isLocked) {
      await new Promise<void>((resolve) => this.queue.push(resolve))
    }
    this.isLocked = true
  }

  unlock() {
    if (this.queue.length > 0) {
      const next = this.queue.shift()
      if (next) next()
    } else {
      this.isLocked = false
    }
  }
}
