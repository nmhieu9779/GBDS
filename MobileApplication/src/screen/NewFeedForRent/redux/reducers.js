import * as actions from "@src/redux/actions"

initStateNewFeedForRent = {
  loading: false,
  refreshing: false,
  response: null,
  success: false,
  loadMore: false
}

const newFeedForRent = (state = initStateNewFeedForRent, action) => {
  switch (action.type) {
    case actions.ACTION_FETCH_POST_FOR_RENT:
      return {
        ...state,
        loading: !action.params.loadMore,
        refreshing: true,
        success: false,
        loadMore: action.params.loadMore
      }
    case actions.ACTION_FETCH_POST_FOR_RENT_SUCCESS:
      return {
        loading: false,
        refreshing: false,
        response: action.response,
        success: true,
        loadMore: false
      }
    case actions.ACTION_FETCH_POST_FOR_RENT_SUCCESS:
      return {
        loading: false,
        refreshing: false,
        response: action.error,
        success: false,
        loadMore: false
      }
    case actions.ACTION_FETCH_MORE_POST_FOR_RENT_SUCCESS:
      let newData = state.response.content.content.concat(action.response.content.content)
      return {
        loading: false,
        refreshing: false,
        response: {...action.response, content: {...action.response.content, content: newData}},
        success: true,
        loadMore: false
      }
    default:
      return state
  }
}

export default newFeedForRent
