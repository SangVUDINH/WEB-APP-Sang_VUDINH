import React, {Component} from 'react';
import Axios from 'axios';
import Auth from './Auth';
import './articleCSS.css';


class AddArticle  extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', article:''};
    
        this.handleChangeArticle = this.handleChangeArticle.bind(this);
        this.handleSubmitArticle = this.handleSubmitArticle.bind(this);
      }
    
      handleChangeArticle(event) {
          this.setState({[event.target.name]: event.target.value});
      }

      handleSubmitArticle(event) {
        event.preventDefault();
        const {name, article} = this.state;
        
        // Send a post request
        
        Axios.post('/addarticle',{name,article},{headers: {
          Authorization: "Bearer " + Auth.getToken()
       }}).then((result)=>{
            // access results
            console.log(result);
           
            
        }).then(
          (response) =>{
            console.log(response.data);
            
            // redirect signed in user to dashboard
          },
          (error)=>{
            console.log(error);
            document.location.reload(true);          }
        );
        
      }
    
      render() {
        return (
            <div id="addArticle">
            <form onSubmit={this.handleSubmitArticle}>
            <h5>Write your article</h5>
            <label>
              Name:
              <input type="text" value={this.state.name} onChange={this.handleChangeArticle} name="name" required/>
            </label><br/>
            <label>
            Article: 
            <textarea rows="5" cols="30" value={this.state.article} onChange={this.handleChangeArticle} name="article" required></textarea>
            </label><br/>
            
            <input type="submit" value="Submit" />
            
            </form>
            
            </div>
        );
      }
}

export default AddArticle;