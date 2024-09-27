import Title from "../../title";
import ProductList from "../content/Products/ProductList";
import "../../../styles/_categoriePage.sass"
import Panier from "../content/panier/panier";

function Categorie(){
    return(
        <div>
            <Title/>
            <div className="categorie-container">
                <div className="left-column">
                    <ProductList />
                </div>
                <div className="right-column">
                    <Panier />
                </div>
            </div>
        </div>
    )
}

export default Categorie