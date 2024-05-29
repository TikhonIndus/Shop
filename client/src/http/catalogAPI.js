export const fetchCategory = async (id) => {
    const { data } = await guestInstance.get(`category/getone/${id}`)
    return data
}

export const fetchBrand = async (id) => {
    const { data } = await guestInstance.get(`brand/getone/${id}`)
    return data
}

/*
 * Создание, обновление и удаление характеристик товара
 */
export const createProperty = async (productId, property) => {
    const { data } = await authInstance.post(`product/${productId}/property/create`, property)
    return data
}

export const updateProperty = async (productId, id, property) => {
    const { data } = await authInstance.put(`product/${productId}/property/update/${id}`, property)
    return data
}

export const deleteProperty = async (productId, id) => {
    const { data } = await authInstance.delete(`product/${productId}/property/delete/${id}`)
    return data
}