import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { ReactivesComponent } from './pages/reactives/reactives.component';
import { TopFormComponent } from './pages/templates/top-form/top-form.component';
import { GroupFormComponent } from './pages/templates/group-form/group-form.component';
import { TemplateDataBindComponent } from './pages/templates/template-data-bind/template-data-bind.component';
import { CardComponent } from './widgets/card/card.component';
import { FormItemComponent } from './widgets/form-item/form-item.component';
import { SingleErrorComponent } from './widgets/single-error/single-error.component';
import { MultiErrorComponent } from './widgets/multi-error/multi-error.component';
import { PhoneValidatorDirective } from './validators/phone-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    ReactivesComponent,
    TopFormComponent,
    GroupFormComponent,
    TemplateDataBindComponent,
    CardComponent,
    FormItemComponent,
    SingleErrorComponent,
    MultiErrorComponent,
    PhoneValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
