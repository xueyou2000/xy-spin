import React, { useState } from "react";
import Spin from "../src";
import "./index.scss";

export default function() {
    const [loading, setLoading] = useState(true);
    const [inline, setInline] = useState(true);

    return (
        <div className="spin-demo">
            <Spin spinning={loading} inline={inline} tips="加载中...">
                <div className="alert-box">
                    <span className="ant-alert-message">Alert message title</span>
                    <span className="ant-alert-description">
                        Further details about the context of this alert.
                        <br />
                        小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。
                        <br />
                        更多文本
                    </span>
                </div>
            </Spin>
            <br />
            <button onClick={() => setLoading((pre) => !pre)}>切换加载状态</button>
            <button onClick={() => setInline((pre) => !pre)}>切换内联状态</button>
        </div>
    );
}
