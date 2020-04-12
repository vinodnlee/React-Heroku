export default function rawMaterialCalReducer(state = [], action) {
    switch (action.type) {
      case "ADD_RAW_MATERIAL":
        return [...state, { ...action.calRawMaterial}];
      default:
        return state;
    }
  }