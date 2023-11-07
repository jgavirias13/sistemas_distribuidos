import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = "http://localhost:8080/todos"

  constructor(private http: HttpClient) { }

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/`);
  }

  public addTodo(todo:Todo): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, todo);
  }

  public removeTodo(id:number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
