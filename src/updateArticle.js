import React, {Component} from 'react';
import Axios from 'axios';
import Auth from './Auth';
import './articleCSS.css';

class UpdateArticle  extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', article:''};
    
        this.handleChangeArticle3 = this.handleChangeArticle3.bind(this);
        this.handleSubmitArticle3 = this.handleSubmitArticle3.bind(this);
      }
    
      handleChangeArticle3(event) {
          this.setState({[event.target.name]: event.target.value});
      }

      handleSubmitArticle3(event) {
        alert("update")
        
        event.preventDefault();
        const {name, article} = this.state;
        
        // Send a post request
        
        Axios.post('/updatearticle',{name,article},{headers: {
          Authorization: "Bearer " + Auth.getToken()
       }}).then((result)=>{
            // access results
            console.log(result);
            
            
        }).then(
          (response) =>{
            console.log(response.data);
          }
        );
      }
    
      render() {
        return (
            <div id="updateArticle" >
            <form onSubmit={this.handleSubmitArticle3}>
            <h5>Update article</h5>
            <label>
              Name:
              <input type="text" value={this.state.name} onChange={this.handleChangeArticle3} name="name" required/>
            </label><br/>
            <label>
            Article: 
            <textarea rows="5" cols="30" value={this.state.article} onChange={this.handleChangeArticle3} name="article" required></textarea>
            </label><br/>
            
            <input type="submit" value="Submit" />
            
            </form>
            
            </div>
        );
      }
}

export default UpdateArticle;