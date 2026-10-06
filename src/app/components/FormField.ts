import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  standalone: true,
  template: `
    <label
      [class]="'block ' + (full ? 'col-span-full max-sm:col-span-1' : '') + ' [&>span]:mb-[7px] [&>span]:block [&>span]:text-[11px] [&>span]:font-semibold [&_input]:w-full [&_input]:rounded-sm [&_input]:border [&_input]:border-[#DCE3E5] [&_input]:bg-[#F4F7F5] [&_input]:px-3.5 [&_input]:py-3 [&_select]:w-full [&_select]:rounded-sm [&_select]:border [&_select]:border-[#DCE3E5] [&_select]:bg-[#F4F7F5] [&_select]:px-3.5 [&_select]:py-3 [&_textarea]:w-full [&_textarea]:rounded-sm [&_textarea]:border [&_textarea]:border-[#DCE3E5] [&_textarea]:bg-[#F4F7F5] [&_textarea]:px-3.5 [&_textarea]:py-3'"
      [attr.for]="elementId"
    >
      <span>
        {{ label }}
        @if (required) { * }
      </span>

      @if (options) {
        <select [id]="elementId" [required]="required">
          <option value="">Select an option</option>
          @for (option of options; track option) {
            <option [value]="option">{{ option }}</option>
          }
        </select>
      } @else if (type === 'textarea') {
        <textarea [id]="elementId" rows="4"></textarea>
      } @else {
        <input [id]="elementId" [type]="type" [required]="required" />
      }
    </label>
  `
})
export class FormField {
  @Input({ required: true }) label!: string;
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() options?: string[];
  @Input() full: boolean = false;

  get elementId(): string {
    return this.label.toLowerCase().replace(/\W/g, '-');
  }
}