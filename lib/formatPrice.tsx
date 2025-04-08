export function formatPrice(price: number, currency: 'MXN' | 'USD' | 'EUR' = 'MXN') {
    const priceFormated = new Intl.NumberFormat('es-MX', {  // Cambié 'es-ES' por 'es-MX' para ajustarlo a México
        style: "currency",
        currency: currency
    })

    const finalPrice = priceFormated.format(price)

    return finalPrice 
}
