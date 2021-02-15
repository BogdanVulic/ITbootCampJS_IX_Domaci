import Product from './Product';

const Home = ({ products }) => {
    return (
        <div>
            <h1>Home</h1>
            {products.map(product => <Product key={product.id} product={product}/>)}
        </div>
    )
}

export default Home
