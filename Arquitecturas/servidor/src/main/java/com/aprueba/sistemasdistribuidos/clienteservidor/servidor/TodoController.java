package com.aprueba.sistemasdistribuidos.clienteservidor.servidor;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController()
@RequestMapping("/todos")
public class TodoController {
    private final List<Todo> todos;
    private int incrementalIds;

    public TodoController() {
        this.todos = new ArrayList<>();
        incrementalIds = 0;
    }

    @GetMapping("/")
    public List<Todo> getTodos() {
        return this.todos;
    }

    @PostMapping("/")
    public void addTodo(@RequestBody Todo todo) {
        todo.setId(incrementalIds);
        incrementalIds++;
        todos.add(todo);
    }

    @DeleteMapping("/{id}")
    public void removeTodo(@PathVariable int id){
        todos.removeIf(t -> t.getId() == id);
    }
}
