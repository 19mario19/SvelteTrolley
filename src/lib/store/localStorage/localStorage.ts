/**
 * Interface for a local storage utility.
 * @template T - The type of data stored in local storage.
 */
interface ILocalStorage<T> {
  /**
   * Sets the value in local storage under a given name.
   * @param {T} value - The value to be stored.
   * @returns {void}
   */
  set(value: T): void

  /**
   * Retrieves the value from local storage by name.
   * @returns {T | null} The retrieved value, or null if not found.
   */
  get(): T | null
}

/**
 * Class representing a local storage utility.
 * @template T - The type of data stored in local storage.
 */
class CLocalStorage<T> implements ILocalStorage<T> {
  /**
   * Creates an instance of CLocalStorage.
   * @param {string} initialName - The initial name to use for local storage.
   */
  constructor(private name: string) {}

  /**
   * Sets the value in local storage under the specified name.
   * @param {T} value - The value to be stored.
   * @returns {void}
   */
  set(value: T): void {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(this.name, JSON.stringify(value))
    }
  }

  /**
   * Retrieves the value from local storage by name.
   * @returns {T | null} The retrieved value, or null if not found.
   */
  get(): T | null {
    if (typeof localStorage !== "undefined") {
      const item = localStorage.getItem(this.name)
      return item ? JSON.parse(item) : null
    }
    return null
  }
}

export { CLocalStorage }
