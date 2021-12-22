export const TOKEN = "Produto";

export function saveProducts(product) {
    let haveProduct = localStorage.getItem(TOKEN)

    if (!haveProduct) {
      haveProduct = []
    } else {
      haveProduct = JSON.parse(haveProduct)
    }

    haveProduct.push(product)
    localStorage.setItem(TOKEN, JSON.stringify(haveProduct))
}