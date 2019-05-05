export interface SpinProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 包裹内容
     */
    children?: React.ReactNode;
    /**
     * 是否内联模式
     * @description 默认为true
     */
    inline?: boolean;
    /**
     * 自定义加载指示符
     */
    indicator?: React.ReactNode;
    /**
     * 大小
     */
    size?: "small" | "default" | "large";
    /**
     * 是否加载中
     */
    spinning?: boolean;
    /**
     * 自定义描述
     */
    tips?: React.ReactNode;
}
