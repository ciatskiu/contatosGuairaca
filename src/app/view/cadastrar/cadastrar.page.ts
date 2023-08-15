import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/model/entities/Contato';
import { ContatoService } from 'src/app/model/services/contato.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  public nome! : string;
  public telefone! : number;
  public email! : string;
  public genero! : number;

  constructor(private alertController: AlertController,
    private router : Router, private contatoService : ContatoService) { }

  ngOnInit() {
  }

  cadastrar(){
    if(this.nome && this.telefone){
      let novo : Contato = new Contato(this.nome, this.telefone);
      novo.email = this.email;
      novo.genero = this.genero;
      this.contatoService.cadastrar(novo);
      this.router.navigate(["/home"]);
    }else{
      this.presentAlert("Erro", "Nome e Telefone são campos Obrigatórios!");
    }
  }

  async presentAlert(subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Contatos',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
