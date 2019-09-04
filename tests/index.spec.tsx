import React from "react";
import { render } from "@testing-library/react";
import Spin from "../src";

describe("Spin", () => {
    test("render", () => {
        const wrapper = render(<Spin spinning={true} />);
        const spin = wrapper.container.querySelector(".xy-spin");
        expect(spin.classList.contains("xy-spin-spinning")).toBeTruthy();
        expect(spin.classList.contains("xy-spin-size-default")).toBeTruthy();
    });

    test("Customize Tips", () => {
        const wrapper = render(<Spin spinning={true} tips="加载中" />);
        const text = wrapper.getByText("加载中");
        expect(text.previousElementSibling.classList.contains("xy-spin-indicator")).toBeTruthy();
    });

    test("Customize Indicator", () => {
        const wrapper = render(<Spin spinning={true} indicator={<span>加载</span>} />);
        const myIndicator = wrapper.getByText("加载");
        expect(myIndicator.classList.contains("xy-spin-indicator")).toBeTruthy();
    });

    test("Wrap Content", () => {
        const wrapper = render(
            <Spin spinning={true} tips="加载中">
                <p>包裹的内容</p>
            </Spin>,
        );
        const content = wrapper.getByText("包裹的内容") as HTMLElement;
        expect(content.parentElement.classList.contains("xy-spin-container")).toBeTruthy();
        const nesteWrap = wrapper.container.querySelector(".xy-spin-nested");
        expect(nesteWrap.classList.contains("spinning")).toBeTruthy();
    });

    test("Inline Mode", () => {
        const wrapper = render(
            <Spin spinning={true} tips="加载中">
                包裹的内容
            </Spin>,
        );

        const nesteWrap = wrapper.container.querySelector(".xy-spin-nested");
        expect(nesteWrap.classList.contains("inline")).toBeTruthy();

        wrapper.rerender(
            <Spin spinning={true} tips="加载中" inline={false}>
                包裹的内容
            </Spin>,
        );
        expect(nesteWrap.classList.contains("inline")).toBeFalsy();
    });

    test("Size", () => {
        const wrapper = render(<Spin />);
        const spin = wrapper.container.querySelector(".xy-spin");
        expect(spin.classList.contains("xy-spin-size-default")).toBeTruthy();

        wrapper.rerender(<Spin size="large" />);
        expect(spin.classList.contains("xy-spin-size-large")).toBeTruthy();

        wrapper.rerender(<Spin size="small" />);
        expect(spin.classList.contains("xy-spin-size-small")).toBeTruthy();
    });
});
