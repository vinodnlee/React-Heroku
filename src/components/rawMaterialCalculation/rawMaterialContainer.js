import React from "react";
import { connect } from "react-redux";
import {}


import  RawMaterial from './rawMaterial'
const mapStateToProps = ({rawMaterialCalReducer}, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps,mapDispatchToProps)(RawMaterial)