import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'minhas tarefas';

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
      // title: ['insira sua tarefa', Validators.required]
    });
    // this.todos.push(
    //   new Todo(1, 'passear com cachorro', false)
    // );
    // this.todos.push(
    //   new Todo(2, 'ir ao supermercado', false)
    // );
    // this.todos.push(
    //   new Todo(3, 'cortar o cabelo', true)
    // );

    this.load();
  }

  alterarTexto() {
    this.title = 'teste';
  }

  add() {
    //this.form.value => { title: 'titulo' }
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  clear() {
    this.form.reset();
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    this.save();
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.save();
  }
  
  markAsUndone(todo: Todo) {
    todo.done = false;
    this.save();
  }

  save() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }

  load() {
    const data: string|null = localStorage.getItem('todos');
    if (data) {
      this.todos = JSON.parse(data);
    }
    else {
      this.todos = [];
    }
  }
}
