import { Itodo } from '../typing';
import Component from './baseComp';

export interface IListOptions {
    wrapperEl: HTMLElement;
    todoData: Itodo[];
}
class List  extends Component {
    private static todoData: Itodo[];
    private wrapperEl: HTMLElement;

    constructor(options:IListOptions){
        super();
        this.wrapperEl = options.wrapperEl;
        List.todoData = options.todoData;
    }
    public static addItem (val: string){
        const oTodoList = document.querySelector('.todo-list');
        const _item = {
            id: new Date().getTime(),
            content: val,
            completed: false
        }
        if(List.todoData.length === 0){
            oTodoList.innerHTML = '';
        }
        List.todoData.push(_item);
        document.querySelector('.todo-list').innerHTML += Component.todoView(_item);
    }
    public bindEvent () {
        const oTodoList = document.querySelector('.todo-list');
        oTodoList.addEventListener('click', this.handleListClick.bind(this), false);
    }

    private handleListClick(e: MouseEvent){
        const tar = e.target as HTMLElement;
        const tagName = tar.tagName.toLowerCase();
        const oTodoItem = document.getElementsByClassName('todo-item');
        if(tagName === 'input' || tagName === 'button'){
            const id:number = parseInt(tar.dataset.id);
            switch(tagName){
                case 'input':
                    this._handleCheckBoxClick(id, oTodoItem);
                    break;
                case 'button':
                    this._handleButtonClick(id,oTodoItem);
            }
        }
    }
    private _handleCheckBoxClick(id:number, oTodoItem: HTMLCollection){
        List.todoData = List.todoData.map((item, index) => {
            if(item.id === id) {
                item.completed = !item.completed;
                oTodoItem[index].querySelector('span').style.textDecoration = item.completed ? 'line-through' : '';
            }
            return item;
        })
    }
    private _handleButtonClick(id: number, oTodoItem: HTMLCollection) {
        const oList = document.querySelector('.todo-list');

        List.todoData = List.todoData.filter((item, index) => {
            if(item.id  !== id){
                return item;
            }else if(List.todoData.length){
                oTodoItem[index].remove();
            }
        });
        if(List.todoData.length === 0){
            oList.innerHTML +=  '没有更多数据';
        }

    }
    public render(){
        this.wrapperEl.innerHTML += Component.listView(List.todoData);
    }
}

export default List;