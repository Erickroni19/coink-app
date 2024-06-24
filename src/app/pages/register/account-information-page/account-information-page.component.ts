import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegisterLayoutService } from '../../../core/services/register-layout.service';
import { ReferenceDataService } from '../../../core/services/reference-data.service';
import { DocumentType } from '../../../core/interfaces/reference-data.interface';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CustomLabelDirective } from '../../../core/directives/custom-label.directive';


@Component({
  selector: 'app-account-information-page',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CustomLabelDirective],
  templateUrl: './account-information-page.component.html',
  styleUrls: ['./account-information-page.component.scss'],
})
export class AccountInformationPageComponent implements OnInit{

  public documentType: DocumentType[] = [];
  public color:string = 'red';


   public registrationForm = this.fb.group({
      documentType: ['', Validators.required],
      documentNumber: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      documentIssueDate: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      pin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      confirmPin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    }, { validator: [this.isFieldOneEqualFieldTwo('email', 'confirmEmail')] });

  constructor(
    private router: Router,
    private referenceDataService: ReferenceDataService,
    private fb: FormBuilder,
    private registerLayoutService: RegisterLayoutService
  ) { }

  ngOnInit(): void {
    this.referenceDataService.getDocumentTypes().subscribe( respDocumentTypes => {
      this.documentType = respDocumentTypes;
    });
  }

  goToFinishRegistration():void {
    this.router.navigateByUrl('register/finish')
    this.setLayoutInfo();
  }

  setLayoutInfo():void {
   this.registerLayoutService.setTitleRoute({ route: 'account-information', title: 'FINALIZAR' })
  }

  // emailMatchValidator(form: FormGroup) {
  //   return form.get('email')?.value === form.get('confirmEmail')?.value ? null : { 'emailsEquals': true };
  // }

  isFieldOneEqualFieldTwo( formControlName1: string, formControlName2: string) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const fieldValue1 = formGroup.get(formControlName1)?.value;
      const fieldValue2 = formGroup.get(formControlName2)?.value;

      if ( fieldValue1 !== fieldValue2 ) {
        formGroup.get(formControlName2)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }

      formGroup.get(formControlName2)?.setErrors(null);
      return null;
    }
  }


}
