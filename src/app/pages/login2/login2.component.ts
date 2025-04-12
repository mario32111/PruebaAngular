import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AccountsService } from '../../services/accounts.service';
@Component({
  selector: 'app-login2',
  standalone: false,
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component implements OnInit {
  resultado!: string;
  miClase: string = "msg1";

  constructor(private acountsService: AccountsService) {
    this.formularioValidacion.get('rePassword')?.addValidators(this.passwordValidator());
  }


  alta() {
    const formData = this.formularioValidacion.value;
    const data = {
      parNom: formData.nombre,    // "nombre" del formulario → "parNom"
      parMail: formData.correo,   // "correo" del formulario → "parMail"
      parPass: formData.password  // "password" del formulario → "parPass"
    };

    this.acountsService.alta(data).subscribe((datos:any) => {
    });
  }

  ngOnInit() { }
  formularioValidacion = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rePassword: new FormControl('', [Validators.required])
  });

  cambiar() {
    this.miClase = "msg2";
  }

  submit() {
    if (this.formularioValidacion.valid)
      this.resultado = "Formulario Valido"
    else
      this.resultado = "Formulario Invalido"
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let password = this.formularioValidacion.get('password')?.value;
      const rePassword = control.value;
      if (password === rePassword) {
        return null;
      }
      else {
        return { 'passwordMissMatched': true };
      }
    }
  }
}
