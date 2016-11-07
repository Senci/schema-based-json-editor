import * as React from "react";
import * as common from "../common";
import { TitleEditor } from "./title-editor";

export class StringEditor extends React.Component<common.Props<common.StringSchema, string>, {}> {
    private value?: string;
    private errorMessage: string;
    constructor(props: common.Props<common.ArraySchema, string>) {
        super(props);
        this.value = common.getDefaultValue(this.props.required, this.props.schema, this.props.initialValue) as string;
        this.validate();
    }
    componentDidMount() {
        this.props.updateValue(this.value);
    }
    render() {
        let control: JSX.Element | null = null;
        if (this.value !== undefined) {
            if (this.props.schema.enum === undefined || this.props.readonly || this.props.schema.readonly) {
                if (this.props.schema.format === "textarea") {
                    control = (
                        <textarea className={this.props.theme.formControl}
                            onChange={this.onChange}
                            defaultValue={this.value}
                            rows={5}
                            readOnly={this.props.readonly || this.props.schema.readonly} >
                        </textarea>
                    );
                } else {
                    control = (
                        <input className={this.props.theme.formControl}
                            type={this.props.schema.format}
                            onChange={this.onChange}
                            defaultValue={this.value}
                            readOnly={this.props.readonly || this.props.schema.readonly} />
                    );
                }
            } else {
                const options = this.props.schema.enum.map((e, i) => <option key={i} value={e} >{e}</option>);
                control = (
                    <select className={this.props.theme.formControl}
                        onChange={this.onChange}
                        defaultValue={this.value}>
                        {options}
                    </select>
                );
            }
        }

        let errorDescription: JSX.Element | null = null;
        if (this.errorMessage) {
            errorDescription = <p className={this.props.theme.help}>{this.errorMessage}</p>;
        }
        let optionalCheckbox: JSX.Element | null = null;
        if (!this.props.required) {
            optionalCheckbox = (
                <div className={this.props.theme.optionalCheckbox}>
                    <label>
                        <input type="checkbox" onChange={this.toggleOptional} checked={this.value === undefined} />
                        is undefined
                    </label>
                </div>
            );
        }
        return (
            <div className={this.errorMessage ? this.props.theme.errorRow : this.props.theme.row}>
                <TitleEditor {...this.props} />
                {optionalCheckbox}
                {control}
                <p className={this.props.theme.help}>{this.props.schema.description}</p>
                {errorDescription}
            </div>
        );
    }
    private onChange = (e: React.FormEvent<{ value: string }>) => {
        this.value = e.currentTarget.value;
        this.validate();
        this.setState({ value: this.value });
        this.props.updateValue(this.value);
    }
    private validate() {
        this.errorMessage = common.getErrorMessageOfString(this.value, this.props.schema, this.props.locale);
    }
    private toggleOptional = () => {
        this.value = common.toggleOptional(this.value, this.props.schema, this.props.initialValue) as string | undefined;
        this.validate();
        this.setState({ value: this.value });
        this.props.updateValue(this.value);
    }
}
