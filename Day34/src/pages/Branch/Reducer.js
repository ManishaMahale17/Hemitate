import * as constants from '../Branch/Type'



const initialState = {
    loading:false,
    branches: [], 
    branch: {},
    singleBranch: null,
    error:null
}

export default function BranchReducer(state = initialState,action){
    switch (action.type) 
    {
        //GET OPERATION

        case constants.GET_BRANCHES_SUCCESS:
            {
            const data=action.payload;
            return {...state, branches:[...data]}
            }

            
          case constants.GET_BRANCHES_ERROR:{
            return {...state, error:action.payload}
            
        }
        case constants.GET_BRANCHES_REQUEST:
            {
                const data=action.payload;
                return {...state, branches:[...data]}
        
            }


    //get single branch
            
    case constants.GET_SINGLE_BRANCH_REQUEST:
    return { ...state, loading: true };

    case constants.GET_SINGLE_BRANCH_SUCCESS:
    return {
        ...state,
        singleBranch: action.payload,
        loading: false,
        error: null
    };

    case constants.GET_SINGLE_BRANCH_ERROR:
    return { ...state, error: action.payload, loading: false };


             //delete Operation
         case constants.DELETE_BRANCH_REQUEST:
            {
            return{...state, loading:true}
        }
      
        case constants.DELETE_BRANCH_SUCCESS:
            {
            const data=action.payload;
            return{...state, branches:[...data]}
        }

         case constants.DELETE_BRANCH_ERROR:{
            return {...state,error:action.payload}
         }

       //add operation
         case constants.POST_BRANCH_REQUEST:
            {
            return{...state, loading:true}
        }
      

        case constants.POST_BRANCH_SUCCESS:
            {
            const data=action.payload;
            return{...state, branches:[...data]}
        }

         case constants.POST_BRANCH_ERROR:{
            return {...state,error:action.payload}
         }


         //put method
         case constants.PUT_BRANCH_REQUEST:
            {
                return { ...state, loading: true };
            }
    
         case constants.PUT_BRANCH_SUCCESS:
            {
                const data = action.payload;
                return { ...state, branches: [...data], loading: false };
            }
    
         case constants.PUT_BRANCH_ERROR:
            {
                return { ...state, error: action.payload, loading: false };
            }

        default:{
            return state;
        }
    }
}
