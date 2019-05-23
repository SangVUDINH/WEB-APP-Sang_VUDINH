import React, {Component} from 'react';
import axios from 'axios';
import Auth from './Auth';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products :[]
        };
    }

    componentWillMount(){
        axios.get('/products',{headers: {
            Authorization: "Bearer " + Auth.getToken()
         }}).then((response) => {
           
            console.log(response.data);
            //console.log(getUserId());
            this.setState({
                products: response.data
            })
        });
    }

    render(){
        let products = this.state.products.map((product)=>{
            return(
                <div>
                        {product.name}
                         <br/>
                        <img class="itemShop" height='300px' width='500px'  src={product.image}/> 
                        <br/>
                        TOP: {product.price}
                </div>

            )
        });
        return(<tbody> {products} </tbody>);
        
    }
}

export default Shop;