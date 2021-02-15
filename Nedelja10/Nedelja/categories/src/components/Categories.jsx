import { Link } from 'react-router-dom';

const Categories = ({ products }) => {

    let categories = Array(...new Set(products.map(product => product.category)))
    return (
        <>
            <h1>Categories</h1>
            {categories.map(category => {
                return(
                    <div key={category}><Link to={`categories/${category}`}>{category}</Link></div>
                )
            })
        }
        </>
    )
}

export default Categories
