import axios from 'axios';
let twitterSearchUrl ="https://nodetwitterservice.herokuapp.com/getTweets";
//let twitterSearchUrl ="http://localhost:5000/getTweets";


export const searchTwitter = (key) => {
return dispatch =>{
    if(!key){
          return(dispatch({
            type: 'ERROR_STATE',
            payload: {}
          }))

    }else{

      axios.get(twitterSearchUrl+"?q="+key).then((response)=>{
          dispatch({
              type: 'SEARCH_RESULT_RECEIVED',
              payload: response.data
            })
      },()=>{
        dispatch({
            type: 'SERVICE_ERROR',
            payload: {}
          })
      })

    }

      dispatch({
        type: 'LOADING_RESULT',
        payload: {}
      })
    }

};
