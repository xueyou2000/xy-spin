import React from "react";
import Spin from "../src";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    return (
        <div style={{ fontSize: "28px", color: "#1890ff" }}>
            <Spin spinning={true} indicator={<FontAwesomeIcon icon={faSpinner} spin={true} />} />
        </div>
    );
}
