import React from "react";
import { ButtonProps } from "antd";
import { ButtonType } from "antd/lib/button/button";
export declare const ExtendButtonTypes: ["danger", "secondary"];
export declare type IExtendButtonType = typeof ExtendButtonTypes[number];
export declare type TLegacyButton = ButtonType | IExtendButtonType;
export interface IButtonProps extends Omit<ButtonProps, 'type'> {
    type?: TLegacyButton;
    uppercase?: boolean;
}
declare const ButtonComponent: React.FC<IButtonProps>;
export default ButtonComponent;
