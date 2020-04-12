export default function bomCalculationReducer(state = [], action) {
    switch (action.type) {
      case "CREATE_BOM":
        return [...state, { ...action.bom }];
      default:
        return state;
    }
  }