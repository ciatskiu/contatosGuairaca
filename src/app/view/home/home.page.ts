import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/model/entities/Contato';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nome! : string;
  public telefone! : number;
  public email! : string;
  public genero! : number;
  public listaDeContatos : Contato[] = [];

  constructor(private alertController: AlertController) {
    let c1 : Contato = new Contato("Carlos Eduardo", 991094415);
    c1.email = "ciatskiu@uniguairaca.edu.br";
    let c2 : Contato = new Contato("Jotair", 991094400);
    let c3 : Contato = new Contato("Matheus Souto", 991091112);
    let c4 : Contato = new Contato("Antonio Zampier", 991091234);
    this.listaDeContatos.push(c1);
    this.listaDeContatos.push(c2);
    this.listaDeContatos.push(c3);
    this.listaDeContatos.push(c4);
   }

  cadastrar(){
    if(this.nome && this.telefone){
        let novo : Contato = new Contato(this.nome, this.telefone);
        if(this.email){
          novo.email = this.email;
        }
        novo.genero = this.genero;
        this.listaDeContatos.push(novo);
    }else{
      this.presentAlert("Erro ao cadastrar!", "Todos os campos são Obrigatórios!");
    }
    this.nome = "";
    this.telefone = NaN;
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
