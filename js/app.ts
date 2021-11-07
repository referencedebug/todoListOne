import TodoList from './todo-list';
import { Itodo } from './typing';
;((doc:Document) => {
    const oRoot = doc.getElementById('root');
    const todoData: Itodo[] = [
        { id: 1, content: '123', completed: true },
        { id: 2, content: '456', completed: true },
        { id: 3, content: '1789', completed: false },
    ];
    const init = () => {
        const todoList:TodoList = new TodoList(oRoot, todoData);
        todoList.init();
    };
    init();
})(document);