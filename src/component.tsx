import * as React from "react";

import * as classnames from "classnames";

export interface IUnstyledInputProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isBaseStylesDisabled?: boolean
}

export class UnstyledInput extends React.Component<IUnstyledInputProps> {
    render() {
        let { isBaseStylesDisabled, className, ...htmlProps } = this.props;
        className = classnames({ "sci-react-unstyled-input": isBaseStylesDisabled !== true }, className);

        return <input {...htmlProps} className={className} />;
    }
}