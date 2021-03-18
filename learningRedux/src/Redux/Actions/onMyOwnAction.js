export const INCREMENT = "INCREMENT";

// The function, submitValue, is an 'action creator'
// The return value is an 'action'
export function myOwnAction(value) {
  
  return {
    type: INCREMENT,
    payload: {
      onMyOwnValue: value,
    },
  };
}
