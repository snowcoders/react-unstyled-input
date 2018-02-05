import * as React from "react";

export interface IUnstyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isBaseStylesDisabled?: boolean
}

export class UnstyledInput extends React.Component<IUnstyledInputProps> {
    render() {
        let { isBaseStylesDisabled, className, ...htmlProps } = this.props;

        let classNameArray = [];
        if (isBaseStylesDisabled !== true) {
            classNameArray.push("sci-react-unstyled-input");
        }
        if (className) {
            classNameArray.push(className);
        }

        return <input {...htmlProps} className={classNameArray.join(" ")} />;
    }
}