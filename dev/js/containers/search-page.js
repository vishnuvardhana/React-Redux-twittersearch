import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchTwitter} from '../actions/search-page-actions'
import SearchResultsPage from '../components/search-result'
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

 const styleSheet = {
   positionCenter:{
       "textAlign":"center",
   },
   navBarHeader:{
     "verticalAlign":"middle",
     "textAlign":"center",
     "color":"white",
     "fontSize":"20px",
     "fontWeight":"bold"

   }
 }

 class Appbar extends Component{
   render(){
     return (<div className="mui-appbar">
               <table width="100%">
               <tbody>
                 <tr style={styleSheet.navBarHeader}>
                   <td className="mui--appbar-height">React  Redux Twitter Search Example</td>
                 </tr>
                 </tbody>
               </table>
               </div>)
   }
 }


  class Searchbox extends Component {
    constructor(props) {
        super(props);
        this.focus = true,
        this.state = {
          value: "",
        };


        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event){

        this.setState({value: event.target.value});
      }
   render() {

     return (
       <div>
       <form style={styleSheet.positionCenter}>
         <legend>Enter Search Key </legend>
         <div className="mui-textfield">
           <input type="text" placeholder="Eg. India"  onChange={this.handleChange}/>
         </div>
         <button type="button" className="mui-btn mui-btn--raised" onClick={() => this.props.searchTwitter(this.state.value)} autoFocus={this.focus}>Search</button>
       </form>
     </div>

     );
   }
 }

 class SearchPageRender extends Component {
   render(){
     console.log(this.props.SearchResults);
     return(<div>
       <Appbar></Appbar>
       <br/>
       <div className="mui-container-fluid">
           <div className="mui-row">
             <div className="mui-col-md-2">
             </div>
             <div className="mui-col-md-8">
                 <Searchbox searchTwitter={this.props.searchTwitter}/>
             </div>
             <div className="mui-col-md-2">
            
             </div>
             <br/>
             <div className="mui-col-md-12">
              <SearchResultsPage SearchResults={this.props.SearchResults}/>
             </div>
       </div>
       </div>
     </div>)
   }
 }




// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        SearchResults: state.SearchResults
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({searchTwitter: searchTwitter}, dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(SearchPageRender);
