import React from "react";
import classNames from "classnames";
import { SpinProps } from "./interface";

export function Spin(props: SpinProps) {
    const { prefixCls = "xy-spin", className, style, children, inline = true, indicator, size = "default", spinning, tips } = props;
    const classString = classNames(`${prefixCls}`, className, {
        [`${prefixCls}-spinning`]: spinning,
        [`${prefixCls}-show-text`]: !!tips,
        [`${prefixCls}-size-${size}`]: true
    });

    function renderIndicator() {
        const indicatorClassName = `${prefixCls}-indicator`;

        if (React.isValidElement(indicator)) {
            return React.cloneElement(indicator as any, {
                className: indicatorClassName
            });
        }

        return (
            <span className={classNames(indicatorClassName, `${prefixCls}-indicator-spin`)}>
                <i />
                <i />
                <i />
                <i />
            </span>
        );
    }

    function renderSpin() {
        return (
            <div className={classString} style={style}>
                {renderIndicator()}
                {tips && <p className={`${prefixCls}-text`}>{tips}</p>}
            </div>
        );
    }

    if (!children) {
        return renderSpin();
    }

    return (
        <div className={classNames(`${prefixCls}-nested`, { spinning, inline })}>
            {renderSpin()}
            <div className={`${prefixCls}-container`}>{children}</div>
        </div>
    );
}

export default React.memo(Spin);
