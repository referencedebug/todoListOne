import { Itodo } from "../typing";

abstract class Component {
   protected static inputView (placeholderText: string, buttonText: string){
    return `
        <div>
            <input type="text" class="todo-input" placeholder="${placeholderText}" />
            <button class="btn-add">${ buttonText }</button>
        </div>
    `
   }
   protected static listView (data: Itodo[]): string{
    return  `
        <div class="todo-list">
            ${
                data.length ?
                data.map((todo: Itodo) => {
                    return Component.todoView(todo)
                }).join('')
                : '当前没有数据'
            }
        </div>
    `
   }
   protected static todoView(todo:Itodo): string {
       const { id, content, completed } =  todo;
       return `
            <div class="todo-item">
                <input type="checkbox" data-id="${ id }" ${ completed ? 'checked' : ''} />
                <span style="text-decoration: ${ completed ? 'line-through' : '' }">${content}</span>
                <button data-id="${ id }">删除</button>
            </div>
       `
   }
}
export default Component;