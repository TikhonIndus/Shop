import { useContext, useState, useEffect } from 'react'
import { AppContext } from './AppContext.js'
import { fetchBasket } from '../http/basketAPI.js'
import { Table, Spinner } from 'react-bootstrap'
import BasketItem from './BasketItem.js'
import { observer } from 'mobx-react-lite'

const BasketList = observer(() => {
    const { basket } = useContext(AppContext)
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        fetchBasket()
            .then(
                data => basket.products = data.products
            )
            .finally(
                () => setFetching(false)
            )
    }, [])

    if (fetching) {
        return <Spinner animation="border" />
    }

    return (
        <>
            {basket.count ? (
                <Table bordered hover size="sm" className="mt-3">
                    <thead>
                        <tr>
                            <th>Наименование</th>
                            <th>Количество</th>
                            <th>Цена</th>
                            <th>Сумма</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>
                    <tbody>
                        {basket.products.map(item => <BasketItem key={item.id} {...item} />)}
                        <tr>
                            <th colSpan="3">Итого</th>
                            <th>{basket.sum}</th>
                            <th>руб.</th>
                        </tr>
                    </tbody>
                </Table>
            ) : (
                <p>Ваша корзина пуста</p>
            )}
        </>
    )
})

export default BasketList