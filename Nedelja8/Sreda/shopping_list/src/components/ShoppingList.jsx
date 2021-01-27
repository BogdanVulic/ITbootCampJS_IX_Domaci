import ShoppingItem from './ShoppingItem'

const ShoppingList = ({ shoppingItems, username }) => {
    return (
        <>
        <h1>Shopping list for {username}</h1>
        <div>
            <ShoppingItem shoppingItems={shoppingItems} />
        </div>
        </>
    )
}
export default ShoppingList