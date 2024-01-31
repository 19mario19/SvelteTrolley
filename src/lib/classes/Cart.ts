import { EPayment, type CartItem, type Cart } from "$lib/types/types"

interface ICart {
  set(newList: Cart): void
  update(): void
  addItem(cartItem: CartItem): void
  removeItem(cartItem: CartItem): void
  changeQuantity(newQuantity: number, cartItem: CartItem): void
  formatList(): void
  changePayment(newPayment: EPayment): void
  getTotal(): void
  getNumberProducts(): number
}

/**
 * Represents a shopping cart.
 */
class CCart implements ICart {
  private cartList: Cart

  /**
   * Creates a new instance of the CCart class.
   * @param initialCartList - The initial list of items in the shopping cart.
   */
  constructor(initialCartList: Cart) {
    this.cartList = initialCartList
  }

  update(): void {
    this.formatList()
    this.getTotal()
  }

  /**
   * Sets the cart list with another list of items.
   * @param newList - The new list of items to set as the cart list.
   */
  set(newList: Cart): void {
    this.cartList = newList
    this.update()
  }

  /**
   * Adds an item to the shopping cart.
   * @param cartItem - The item to add to the cart.
   */
  addItem(cartItem: CartItem): void {
    if (cartItem) {
      this.cartList = {
        ...this.cartList,
        products: [cartItem, ...this.cartList.products],
      }
      this.update()
    }
  }

  /**
   * Removes an item from the shopping cart.
   * @param cartItem - The item to remove from the cart.
   */
  removeItem(cartItem: CartItem): void {
    this.cartList = {
      ...this.cartList,
      products: [...this.cartList.products].filter(
        (cart) => cart.id !== cartItem.id,
      ),
    }
    this.update()
  }

  /**
   * Changes the quantity of an item in the shopping cart.
   * @param newQuantity - The new quantity of the item.
   * @param cartItem - The item whose quantity needs to be changed.
   */
  changeQuantity(newQuantity: number, cartItem: CartItem): void {
    const updatedProducts = this.cartList.products.map((product) => {
      if (product.id === cartItem.id) {
        return {
          ...product,
          quantity: newQuantity,
        }
      }
      return product
    })
    this.cartList = {
      ...this.cartList,
      products: updatedProducts,
    }
    this.update()
  }

  /**
   * Formats the list of items in the shopping cart.
   */
  formatList(): void {
    const formattedProducts: CartItem[] = []
    const productMap: Map<string | number, CartItem> = new Map()

    // Combine identical items and update quantities
    this.cartList.products.forEach((product) => {
      const productId = product.id.toString() // Convert ID to string for consistency
      if (productMap.has(productId)) {
        // Update quantity if item already exists
        const existingProduct = productMap.get(productId)
        if (existingProduct) {
          existingProduct.quantity =
            (existingProduct.quantity || 0) + (product.quantity || 0)
        }
      } else {
        // Add new item to the map
        productMap.set(productId, {
          ...product,
          quantity: product.quantity || 0,
        })
      }
    })

    // Convert map values back to array
    productMap.forEach((value) => {
      formattedProducts.push(value)
    })

    // Update cart list with formatted products
    this.cartList = {
      ...this.cartList,
      products: formattedProducts,
    }
  }

  /**
   * Changes the payment method for the shopping cart.
   * @param newPayment - The new payment method.
   */
  changePayment(newPayment: EPayment): void {
    this.cartList = { ...this.cartList, payment: newPayment }
  }

  /**
   * Calculates the total cost of items in the shopping cart.
   */
  getTotal(): void {
    let total = 0
    this.cartList.products.forEach((product) => {
      total += (product.price || 0) * (product.quantity || 0)
    })
    this.cartList.total = total // Assign total to the total property
  }

  /**
   * Retrieves the current list of items in the shopping cart.
   * @returns The current list of items in the shopping cart.
   */
  getCartList(): Cart {
    this.update()
    return this.cartList
  }

  /**
   * Retrieves the number of products in the shopping cart.
   * @returns The number of products in the shopping cart.
   */
  getNumberProducts(): number {
    return this.cartList.products.length
  }
}

export { CCart }
