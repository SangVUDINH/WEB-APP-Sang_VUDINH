import React, {Component} from 'react';
import Axios from 'axios';
import Auth from './Auth';

class DeleteArticle  extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
    
        this.handleChangeArticle4 = this.handleChangeArticle4.bind(this);
        this.handleSubmitArticle4 = this.handleSubmitArticle4.bind(this);
      }
    
      handleChangeArticle4(event) {
          this.setState({[event.target.name]: event.target.value});
      }

      handleSubmitArticle4(event) {
          alert("delete")
        event.preventDefault();
        const {name} = this.state;
        // Send a post request
        Axios.post('/deletearticle',{name},{headers: {
          Authorization: "Bearer " + Auth.getToken()
       }}).then((result)=>{
            // access results
            console.log(result);
        });
      }
      render() {
        return (
            <div >
            <form onSubmit={this.handleSubmitArticle4}>
            <h5>Delete article</h5>
            <label>
              Name:
              <input type="text" value={this.state.name} onChange={this.handleChangeArticle4} name="name" required/>
            </label><br/>
            <input type="submit" value="Submit" />
            </form>
            </div>
        );
      }
}
export default DeleteArticle;