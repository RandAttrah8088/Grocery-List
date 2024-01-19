import './Css/TodoItems.css'
import tick from './Assets/tick.png'
import x from './Assets/x.png'
import untick from './Assets/untick.png'

 const TodoItems = ({no,display,text,setTodos}) => {

  const delet =(no)=>{
    let data= (JSON.parse(localStorage.getItem("todos")));
    data=data.filter((todo)=>todo.no!=no);
    setTodos(data);

  }
  const toggle=(no)=>{
    let data= (JSON.parse(localStorage.getItem("todos")));
    for(let i=0;i<data.length;i++){
      if(data[i].no===no){
        if(data[i].display===""){
          data[i].display="line-through";
        }
        else {
          data[i].display="";
        }
        break;
      }
    }
    setTodos(data);
  }
  return (
    <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
           {display===""?<img src={untick} alt=""/>:<img src={tick} alt=""/>} 
            
            <div className="todoitems-text">{text}</div>
        </div>
        <img className='todoitems-cross'  onClick={()=> delet(no)} src={x} alt="" />

    </div>
  )
}
export default TodoItems