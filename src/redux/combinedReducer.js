import { combineReducers } from "redux";
import bomCalculationReducer from "../components/bomCalulation/bomCalculationReducer";
import rawMaterialCalReducer from "../components/rawMaterialCalculation/rawMaterialCalReducer";


const rootReducer = combineReducers({
    bomCalculationReducer,
    rawMaterialCalReducer
});

export default rootReducer;