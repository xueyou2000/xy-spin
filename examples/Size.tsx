import React from "react";
import Spin from "../src";
import "./index.scss";

export default function() {
    return (
        <div className="spin-demo">
            <Spin spinning={true} size="small" />
            <Spin spinning={true} />
            <Spin spinning={true} size="large" />
        </div>
    );
}
