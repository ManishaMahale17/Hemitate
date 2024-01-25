import * as actionType from './Type';
import { Get, Delete,Post,Put} from '../../service/HttpService';
import { urls } from '../../utils/urls';


   export  function getBranchesRequest() {
    return ({
        type: actionType.GET_BRANCHES_REQUEST,

    })
}

 export function getBranchesSuccess(data) {
    return ({
        type: actionType.GET_BRANCHES_SUCCESS,
        payload: data
    })
}


  export function getBranchesError(error) {
    return ({
        type: actionType.GET_BRANCHES_ERROR,
        payload: error
    })
}



//Get operation
export function getBranches() {
    return (dispatch) => {
        dispatch(getBranchesRequest)
        Get(`${urls.Branches}`)
            .then((response) => {
                console.log(response.data);
                dispatch(getBranchesSuccess(response.data))
            }).catch((error) => {
                console.log(error);
                dispatch(getBranchesError(error.response))

            });
    }
}





//=================================Delete operation===============================//


export function deleteBatchesRequest(){
    return{
        type:actionType.DELETE_BRANCH_REQUEST,
    }
}

 export function deleteBranchesSuccess(data) {
    return ({
        type: actionType.DELETE_BRANCH_SUCCESS,
        payload: data
    })
}

 export function deleteBranchesError(error) {
    return ({
        type: actionType.DELETE_BRANCH_ERROR,
        payload:error
    })
}

export function deleteBranches(id) {
    return (dispatch) => {
        if (window.confirm("Are you sure you want to delete?")) {
            Delete(`${urls.Branches}/${id}`)
                .then((response) => {
                    window.alert("data deleted successfully")
                    console.log(response.data);
                    // dispatch(deleteBranchesSuccess(response.data))
                     getBranches()
                }).catch((error) => {
                    console.log(error);
                    dispatch(deleteBranchesError(error.response))
                })
        }
    }
}


//add operation============================================================================



export function addBranchesRequest() {
    return {
        type: actionType.POST_BRANCH_REQUEST
    };
}

export function addBranchesSuccess(data) {
    return {
        type: actionType.POST_BRANCH_SUCCESS,
        payload: data
    };
}

export function addBranchesError(error) {
    return {
        type: actionType.POST_BRANCH_ERROR,
        payload: error
    };
}

export function addBranch(branchData) {
    return (dispatch) => {
        dispatch(addBranchesRequest());
        Post(urls.Branches, branchData)
            .then((response) => {
                dispatch(addBranchesSuccess(response.data));
                // dispatch(getTrainers());
                window.alert("Branch Added Successfully!");
            })
            .catch((error) => {
                dispatch(addBranchesError(error.response));
          });
    };
}



//single get 
export function getSingleBranchRequest() {
    return {
        type:  actionType.GET_SINGLE_BRANCH_REQUEST,
    };
}

export function getSingleBranchSuccess(data) {
    return {
        type: actionType.GET_SINGLE_BRANCH_SUCCESS,
        payload: data,
    };
}

export function getSingleBranchError(error) {
    return {
        type: actionType.GET_SINGLE_BRANCH_ERROR,
        payload: error,
    };
}


export function getSingleBranch(branchId) {
    return (dispatch) => {
        dispatch(getSingleBranchRequest());
        Get(`${urls.Branches}/${branchId}`)
            .then((response) => {
                dispatch(getSingleBranchSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getSingleBranchError(error.response));
            });
    };
}


//put operation
export function editBranchRequest() {
    return {
        type: actionType.PUT_BRANCH_REQUEST
    };
}

export function editBranchSuccess(data) {
    return {
        type: actionType.PUT_BRANCH_SUCCESS,
        payload: data
    };
}

export function editBranchError(error) {
    return {
        type: actionType.PUT_BRANCH_ERROR,
        payload: error
    };
}


export function editBranch(editBranchData, id) {
    return (dispatch) => {
        // Fetch the single branch data
        dispatch(getSingleBranch(id));
        dispatch(editBranchRequest());
        Put(`${urls.Branches}/${id}`, editBranchData)
            .then((response) => {
            dispatch(editBranchSuccess(response.data));
            
            window.alert("Branch Updated Successfully!");
            })
            .catch((error) => {
                dispatch(editBranchError(error.response));
            });
    };
}






