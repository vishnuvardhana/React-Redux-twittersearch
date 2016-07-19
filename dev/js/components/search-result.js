import React, {Component} from 'react';
const styleSheet = {
  "textAlignClass":{
    "textAlign":"center",
    "marginTop":"50px"
  },
  "tweetPanelColour":{
    "background":"#E3F2FD",
    "padding":"10px"
  }
}
 export default class SearchResultsPage extends Component{
   printResult(){
     let props = this.props.SearchResults;
     let tweets = [];
     if(!props){
       return <h1>Search to get results</h1>
     }
     if(props.type==="LOADING_RESULT"){
       return <h1>Loading !!</h1>
     }
     if(props.type==="ERROR_STATE"){
       return <h1>Enter Valid Key Word</h1>
     }
     if(props.type==="SERVICE_ERROR"){
       return <h1>Error Occured !! Try Again</h1>
     }
     if(props.payload.statuses.length===0){
       return <h1>Empty Result Came From Twitter</h1>
     }
     tweets = props.payload.statuses;
     console.log(tweets);
     return <div>{this.props.SearchResults.payload.statuses.map((tweet,index)=>{
       return <div  key={index}><div style={styleSheet.tweetPanelColour}> <img src={tweet.user.profile_image_url}/><br/>{tweet.text} </div><div className="mui--divider-top"></div><br/></div>
     })}</div>
   }
   render(){

     return(<div style={styleSheet.textAlignClass}>{this.printResult()}</div>)
   }
 }
