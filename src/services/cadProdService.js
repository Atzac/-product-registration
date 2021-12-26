export const TOKEN = "Produto";

export function ErrorValidation(errors) {
    this.errors = errors
}

export function Validation(product) {
  const errors = []

  if (!product.nome) {
    errors.push("Verifique o campo de nome")
  } else if (!product.id) {
    errors.push("Verifique o campo de ID")
  } else if (!product.preco || product.preco == 0) {
    errors.push("Verifique o campo de Preço")
  } else if (!product.fornecedor) {
    errors.push("Verifique o campo de Fornecedor")
  } else if (!product.desc) {
    errors.push("Verifique o campo de Descrição")
  }

  if (errors.length > 0) {
    throw new ErrorValidation(errors)
  }

}

export function saveProducts(product) {
    Validation(product)


    let haveProduct = localStorage.getItem(TOKEN)

    if (!haveProduct) {
      haveProduct = []
    } else {
      haveProduct = JSON.parse(haveProduct)
    }

    haveProduct.push(product)
    localStorage.setItem(TOKEN, JSON.stringify(haveProduct))
}

export function getProducts() {
  let product = localStorage.getItem(TOKEN)
  return (
    JSON.parse(product)
  )
}

export function delProduct() {
  localStorage.removeItem(TOKEN)
}