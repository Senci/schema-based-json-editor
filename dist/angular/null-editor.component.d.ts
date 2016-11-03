import { EventEmitter } from "@angular/core";
import * as common from "../common";
export declare class NullEditorComponent {
    schema: common.NullSchema;
    initialValue: null;
    title?: string;
    updateValue: EventEmitter<{}>;
    theme: common.Theme;
    icon: common.Icon;
    locale: common.Locale;
    onDelete: EventEmitter<{}>;
    readonly?: boolean;
    required?: boolean;
    hasDeleteButton: boolean;
    value?: null;
    ngOnInit(): void;
    toggleOptional(): void;
}
