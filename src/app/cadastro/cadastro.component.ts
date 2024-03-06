import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private cepService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
     // if(form.valid) {
    //    this.router.navigate(['./sucesso']);
   //   } else {
    //    alert('formulario invalido')
    //  }
    console.log(form.controls)    
  }

  consultaCEP(event: any) {
    const cep = event.target.value;
    return this.cepService.getConsultaCep
  }
}
