
import {TodoItemWrapper} from "./TodoStyles"

function Todoitem (props) {
    return (
        <div>
        <TodoItemWrapper>
            <div>{props.task}</div>
            <div className="btnWrapper">
            <button>del</button>
            <button>edit</button>
            <button>save</button>
            </div>
            </TodoItemWrapper>
        </div>
    );
}
export default Todoitem;