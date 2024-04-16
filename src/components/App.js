import React,{useEffect,useState} from "react";
import "./todo.css";
import { Button, Card, Form } from 'react-bootstrap';
import Playertab from "./Playertab";



function Todo({ todo, index, markTodo, removeTodo, func}) {
  return (
    <div
      className="todo"

    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() =>{markTodo(index);}} >✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}


const getlocalitem = () =>{
  const item = localStorage.getItem('list')
  if (item){
    return JSON.parse(item)
  }
  else{
    return [];
  }
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Task</b></Form.Label>
      <Form.Control type="text" className="input mb-3" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </Form.Group>
    <Button variant="primary mb-3" type="submit">
      Add task
    </Button>
  </Form>
  );
}

function App(props) {
  function updatecounters(){
    if (xp > 400) {
        setlevel(level+Math.floor(xp/400));// if xp is 1000, two levels up
        setXp(xp%400);// what is left when increasing levels
     }
    
    }
    function giveExp(number){
      setCredits(credits+100);
      setXp(xp+50);
      setWidth((xp/400)*100 + '%')
      setskillpoints(skillpoints+25)
      updatecounters();//update

  }
  const [todos, setTodos] = React.useState(getlocalitem());

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    giveExp()
    props.func(level,displayname,credits,skillpoints,IntelligenceLvl,AgilityLvl,DisciplineLvl,EmotionsLvl,StrengthLvl,Ixp,Axp,Dxp,Exp,Sxp,Squantity,Vquantity,Wquantity,width)
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(todos));

  },[todos])
  const [displayname,setDisplayname]=useState(props.user)
 
 
  
  const [level,setlevel]=useState(props.level);
  const [xp,setXp]=useState(props.xp);
  const [credits,setCredits]=useState(props.credits);
  const [skillpoints,setskillpoints]=useState(props.skillpoints);
  const [IntelligenceLvl,setIlvl]=useState(props.skillIlvl);
  const [Ixp,setIXp]=useState(props.Ixp);
  const [Squantity,setSquantity]=useState(props.Squantity);
  const [Vquantity,setVquantity]=useState(props.Vquantity);
  const [Wquantity,setWquantity]=useState(props.Wquantity);
  const [AgilityLvl,setAlvl]=useState(props.skillAlvl);
  const [Axp,setAXp]=useState(props.Axp);
  const [DisciplineLvl,setDlvl]=useState(props.skillDlvl);
  const [Dxp,setDXp]=useState(props.Dxp);
  const [EmotionsLvl,setElvl]=useState(props.skillElvl);
  const [Exp,setEXp]=useState(props.Exp);
  const [StrengthLvl,setSlvl]=useState(props.skillSlvl);
  const [Sxp,setSXp]=useState(props.Sxp);
  const [width,setWidth] = useState(props.width);
  
  return (
    <>
    <Playertab xp={xp} user={displayname} level={level} width={width} credits={credits} skillpoints={skillpoints}/>
    <div className="app ">
      <div className="container ">
        <div className="card ">
        <div className="card-body">
        <h1 className="text-center mb-5">Task to do</h1>
        <FormTodo addTodo={addTodo} />
        <div className="mt-5">
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;