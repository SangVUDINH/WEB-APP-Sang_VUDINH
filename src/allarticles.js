import React, {Component} from 'react';
import axios from 'axios';
import Auth from './Auth';
import './articleCSS.css';

class AllArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles :[]
        };
    }

    componentWillMount(){
        axios.get('/articles',{headers: {
            Authorization: "Bearer " + Auth.getToken()
         }}).then((response) => {
            console.log(response.data);
            this.setState({
                articles: response.data
            })
            this.props.refreshPage();
        });
    }

    render(){
        let articles = this.state.articles.map((article)=>{
            return(
                <tr>
                    <h5 class="five">{article.name}</h5>
                    <p >{article.article}</p>
                </tr>
            )
        });
        return(<tbody> {articles} </tbody>);
        
    }
}

export default AllArticles;