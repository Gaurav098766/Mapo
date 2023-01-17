// Make a network request to fetch some json and print the result.
import axios from 'axios';
 
 
const url = "https://jsonplaceholder.typicode.com/todos/2";

interface Todo{
    id: number;
    title:string;
    completed:boolean;
}

axios.get(url).then(response=>{
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed=todo.completed;

    logtodo(id,title,completed);

 })

 const logtodo = (id:number,title:string,completed:boolean)=>{
    console.log(`
    The Todo with ID: ${id}
    has a title of :${title}
    Is it finished? ${completed}
    `)
 }