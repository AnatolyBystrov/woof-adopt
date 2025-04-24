import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {
  debounceTime,
  tap
} from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-adoption-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adoption-form.component.html',
  styleUrls: ['./adoption-form.component.css']
})
export class AdoptionFormComponent {
  fb = inject(FormBuilder);
  loading = false;
  submitted = false;

  colours = ['White', 'Black', 'Brown', 'Golden', 'Gray', 'Mixed'];

  form = this.fb.group({
    weight: [null, [Validators.required, Validators.min(1), Validators.max(100)]],
    colour: [null, [Validators.required]],
    firstAdoption: [false],
    age: [null, [Validators.required, Validators.min(0), Validators.max(20)]]
  });

  constructor() {
    this.form.get('firstAdoption')?.valueChanges
      .pipe(
        debounceTime(300),
        tap((isFirst) => {
          const ageControl = this.form.get('age');
          if (isFirst) {
            ageControl?.setValidators([Validators.required, Validators.min(0), Validators.max(8)]);
          } else {
            ageControl?.setValidators([Validators.required, Validators.min(0), Validators.max(20)]);
          }
          ageControl?.updateValueAndValidity();
        })
      )
      .subscribe();
  }

  submit() {
    if (this.form.invalid) return;

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.submitted = true;
      this.form.reset();
    }, 2000);
  }

  get weight() {
    return this.form.get('weight');
  }

  get colour() {
    return this.form.get('colour');
  }

  get age() {
    return this.form.get('age');
  }
}
