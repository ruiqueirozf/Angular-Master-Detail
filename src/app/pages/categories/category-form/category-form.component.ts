import { Component, Injector, InjectionToken } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';
import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent extends BaseResourceFormComponent<Category> {

  constructor(
    protected categoryService: CategoryService,
    protected injector: Injector,
    protected toastr: ToastrService
    ) { super(toastr, injector, new Category(), categoryService, Category.fromJson) }

    protected buildResourceForm() {
      this.resourceForm = this.formBuilder.group({
        id: [null],
        name: [null, [Validators.required, Validators.minLength(2)]],
        description: [null]
      });
    }

}
