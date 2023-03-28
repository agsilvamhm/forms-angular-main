import { ConsultaCepService } from './../service/consulta-cep.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router,
              private consulta: ConsultaCepService) { }

  ngOnInit(): void {
  }

  consultaCEP(ev: any, f: NgForm){
      const cep = ev.target.value;
      if (cep !== ''){
        return this.consulta.getConsultaCep(cep).subscribe(resultado => console.log(resultado));
      }
  }

  cadastrar(form: NgForm){
    if (form.valid){
      this.router.navigate(['./sucesso'])
    } else {
      alert('Formulário inválido')
    }
    // console.log(form.controls)
  }
}
