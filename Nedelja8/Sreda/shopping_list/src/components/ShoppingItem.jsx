

const ShoppingItem = ({ shoppingItems }) => {
    return (
            shoppingItems.map(item => <div key={item.id}>
                                            <p>Name: {item.name}</p>
                                            <p>Price: {item.price}</p>
                                            <hr />
                                      </div>)
            )
}

export default ShoppingItem
