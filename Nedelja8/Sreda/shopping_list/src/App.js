
import ShoppingList from './components/ShoppingList';

const App = ( {shoppingItems, username }) => {
    return (
        <div className="App">
            <ShoppingList shoppingItems={shoppingItems} username={username}/>
        </div>
    );
}

export default App;
