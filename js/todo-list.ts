import Input, { IInuptOptions } from './components/input';
import List, { IListOptions } from './components/list';
import { Itodo } from './typing';
class TodoList {
    private list: List;
    private input: Input;
    private el: HTMLElement;
    private todoData: Itodo[];
    private todoWrapper: HTMLElement;
    constructor(el: HTMLElement, todoData: Itodo[]){
        this.el = el;
        this.todoData = todoData;
        this.todoWrapper = document.createElement('div');
    }
    public init () {
        this.createComponents();
        this.render();
        this.bindEvent();
    }
    private createComponents () {
        this.input = new Input(<IInuptOptions>{
            wrapperEl: this.todoWrapper,
            placeholderText: '请输入',
            buttonText: '增加'
        });
        this.list = new List(<IListOptions>{
            wrapperEl: this.todoWrapper,
            todoData: this.todoData
        });
    }

    private render(){
        this.input.render();
        this.list.render();
        this.el.appendChild(this.todoWrapper);
    }
    private bindEvent(){
        this.input.bindEvent();
        this.list.bindEvent();
    }
}

export default TodoList;