import { useParams } from "react-router-dom"
import Product from "./Product"
import Single from "./Single"

const Category = ({ products }) => {
    let { category } = useParams();
    let productFiltered = products.filter(product => product.category === category);
    return (
        <div>
            {productFiltered.map(product => productFiltered.length === 1 ? <Single key={product.id} product={product} /> : <Product key={product.id} product={product} />)}
        </div>
    )
}
export default Category