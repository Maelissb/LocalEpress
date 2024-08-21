import Title from "../../title";
import Cards from "../content/Card/categorieCard";
import ProductList from "../content/Products/ProductList";

function Categorie(){
    return(
        <div>
            <Title/>
            <div>
                <ProductList />
            </div>
        </div>
    )
}

export default Categorie