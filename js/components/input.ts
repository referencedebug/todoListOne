import Component from "./baseComp";
import List from "./list";
export interface IInuptOptions {
    wrapperEl: HTMLElement;
    placeholderText: string;
    buttonText: string;
}

class Input extends Component {
    private options: IInuptOptions;
    constructor(options:IInuptOptions){
        super();
        this.options = options;
    }
    public bindEvent () {
        const oAddBtn: HTMLElement = document.querySelector('.btn-add');
        const oInput: HTMLElement = document.querySelector('.todo-input');
        oAddBtn.addEventListener('click', this.handleBtnClick.bind(this, oInput), false);
    }
    private handleBtnClick(inputDom:HTMLInputElement){  
        console.log('hello');
        const val: string = inputDom.value.trim();
        if(val.length){
            List.addItem(val);
            inputDom.value = '';
        }
    }
    public render(){
        const { placeholderText, buttonText } = this.options;
        this.options.wrapperEl.innerHTML += Component.inputView(placeholderText, buttonText);
    }

}
export default Input;