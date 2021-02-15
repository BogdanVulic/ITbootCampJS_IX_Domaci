import { useState, useEffect } from 'react';
import { getProducts } from './service';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Categories from './components/Categories';
import Home from './components/Home';
import Category from './components/Category';

const App = () => {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        getProducts().then(res => {
            setProducts(prev => [...prev, ...res.data])
        })
    }, [])

    return (
        <Router>
            <ul>
                <li><Link style={{padding:5}} to="/">Home</Link></li>
                <li><Link style={{padding:5}} to="/categories">Categories</Link></li>
            </ul>
            <Switch>
                <Route exact path="/">
                    <Home products={products}/>
                </Route>
                <Route exact path="/categories">
                    <Categories products={products}/>
                </Route>
                <Route exact path='/categories/:category'>
                    <Category products={products}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
