import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];
  public title: string = 'minhas tarefas';

  /**
   *
   */
  constructor() {
    this.todos.push('passear com cachorro');
    this.todos.push('ir ao supermercado');
    this.todos.push('cortar o cabelo');
  }

  alterarTexto() {
    this.title = 'teste';
  }
}
