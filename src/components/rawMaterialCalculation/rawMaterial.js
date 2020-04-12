import React ,{Component}from 'react';

class RawMaterial extends Component {
 constructor(props){
    super(props);
    this.state={
        materialName:"",
        materialFormula:""
    }
 }
 handleSubmit=(event)=>{
  event.preventDefault();
  
 }
 render(){
     return(
         <div className="container" style={{"padding-top":30}}>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label forName="exampleInputEmail1">Material Name</label>
                <input type="input" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="form-group">
                <label forName="exampleInputPassword1">Material Forumla</label>
                <textarea  className="form-control" id="exampleInputPassword1"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>       
            </form>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Material Nam</th>
                    <th scope="col">Material Formula</th>
                    <th scope="col">Delete Formula</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    </tbody>
            </table>
         </div>
        
        );
 }
}

export default RawMaterial;