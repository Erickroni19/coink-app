import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReferenceDataService } from '../../../core/services/reference-data.service';
import { DocumentType } from '../../../core/interfaces/reference-data.interface';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CustomLabelDirective } from '../../../core/directives/custom-label.directive';
import { UserInformationService } from '../../../core/services/user-information.service';
import { RegisterHeaderComponent } from '../../../shared/register-header/register-header.component';
import { UserInformation } from '../../../core/interfaces/user-information.interface';


@Component({
  selector: 'app-account-information-page',
  standalone: true,
  imports: [
    IonicModule,
    ReactiveFormsModule,
    CustomLabelDirective,
    RegisterHeaderComponent
  ],
  templateUrl: './account-information-page.component.html',
  styleUrls: ['./account-information-page.component.scss'],
})
export class AccountInformationPageComponent implements OnInit, OnDestroy{

  public documentType: DocumentType[] = [];
  public color:string = 'red';
  public genders: string[] = ['Masculino', 'Femenino', 'Otro']


   public registrationForm: FormGroup = this.fb.group({
      documentType: ['', Validators.required],
      documentNumber: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      documentIssueDate: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      pin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      confirmPin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    }, { validator: [this.isFieldOneEqualFieldTwo('email', 'confirmEmail', 'notEqual'),
       this.isFieldOneEqualFieldTwo('pin', 'confirmPin', 'PinNotEqual'),] });

  constructor(
    private referenceDataService: ReferenceDataService,
    private userInformationService: UserInformationService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.referenceDataService.getDocumentTypes().subscribe( respDocumentTypes => {
      this.documentType = respDocumentTypes;
    });

  }

  ngOnDestroy(): void {

  }

  goToFinishRegistration():void {
    this.router.navigateByUrl('register/finish')
    this.setUserInformation();
  }

  isFieldOneEqualFieldTwo( formControlName1: string, formControlName2: string, nameError: string) {

    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const fieldValue1 = formGroup.get(formControlName1)?.value;
      const fieldValue2 = formGroup.get(formControlName2)?.value;

      if ( fieldValue1 !== fieldValue2 ) {
        formGroup.get(formControlName2)?.setErrors({ [nameError]: true });
        return { notEqual: true }
      }

      formGroup.get(formControlName2)?.setErrors(null);
      return null;
    }
  }

  setUserInformation(): void{
    const userInfo:UserInformation  = {
      phoneNumber: this.userInformationService.phoneNumber,
      ...this.registrationForm.value
    }

    this.userInformationService.setUserInformation(userInfo);
  }

}
