import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as common from "../common";

@Component({
    selector: "editor",
    template: `
    <object-editor *ngIf="schema.type === 'object'"
        [schema]="schema"
        [initialValue]="initialValue"
        [title]="title"
        [theme]="theme"
        [locale]="locale"
        [icon]="icon"
        [required]="required"
        (updateValue)="updateValue.emit($event)"
        (onDelete)="onDelete.emit()"
        [hasDeleteButton]="hasDeleteButton">
    </object-editor>
    <array-editor *ngIf="schema.type === 'array'"
        [schema]="schema"
        [initialValue]="initialValue"
        [title]="title"
        [theme]="theme"
        [locale]="locale"
        [icon]="icon"
        [required]="required"
        (updateValue)="updateValue.emit($event)"
        (onDelete)="onDelete.emit()"
        [hasDeleteButton]="hasDeleteButton">
    </array-editor>
    <number-editor *ngIf="schema.type === 'number' || schema.type === 'integer'"
        [schema]="schema"
        [initialValue]="initialValue"
        [title]="title"
        [theme]="theme"
        [locale]="locale"
        [icon]="icon"
        [required]="required"
        (updateValue)="updateValue.emit($event)"
        (onDelete)="onDelete.emit()"
        [hasDeleteButton]="hasDeleteButton">
    </number-editor>
    <boolean-editor *ngIf="schema.type === 'boolean'"
        [schema]="schema"
        [initialValue]="initialValue"
        [title]="title"
        [theme]="theme"
        [locale]="locale"
        [icon]="icon"
        [required]="required"
        (updateValue)="updateValue.emit($event)"
        (onDelete)="onDelete.emit()"
        [hasDeleteButton]="hasDeleteButton">
    </boolean-editor>
    <null-editor *ngIf="schema.type === 'null'"
        [schema]="schema"
        [initialValue]="initialValue"
        [title]="title"
        [theme]="theme"
        [locale]="locale"
        [icon]="icon"
        [required]="required"
        (updateValue)="updateValue.emit($event)"
        (onDelete)="onDelete.emit()"
        [hasDeleteButton]="hasDeleteButton">
    </null-editor>
    <string-editor *ngIf="schema.type === 'string'"
        [schema]="schema"
        [initialValue]="initialValue"
        [title]="title"
        [theme]="theme"
        [locale]="locale"
        [icon]="icon"
        [required]="required"
        (updateValue)="updateValue.emit($event)"
        (onDelete)="onDelete.emit()"
        [hasDeleteButton]="hasDeleteButton">
    </string-editor>
    `,
})
export class EditorComponent {
    @Input()
    schema: common.ArraySchema;
    @Input()
    initialValue: common.ValueType[];
    @Input()
    title?: string;
    @Output()
    updateValue = new EventEmitter();
    @Input()
    theme: common.Theme;
    @Input()
    icon: common.Icon;
    @Input()
    locale: common.Locale;
    @Output()
    onDelete = new EventEmitter();
    @Input()
    readonly?: boolean;
    @Input()
    required?: boolean;
    @Input()
    hasDeleteButton: boolean;
}
