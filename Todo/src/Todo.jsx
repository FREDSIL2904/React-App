import React, {
  useState,
  useEffect
} from 'react';
import './Todo.css';
import Icon from './assets/center.png';
function Todo() {
  const listaStorage = localStorage.getItem('Lista');
  const [lista,
    setLista] = useState(listaStorage ? JSON.parse(listaStorage): []);
  useEffect(()=> {
    localStorage.setItem('Lista', JSON.stringify(lista));
  }, [lista])
  const [novoItem,
    setNovoItem] = useState('');
  function AddItem(form) {
    form.preventDefault();
    if (!novoItem) {
      return;
    }
    setLista([...lista, {
      text: novoItem, isCompleted: false
    }]);
    setNovoItem("");
    document.getElementById('input-enter').focus;
  }
  function clicou(index) {
    const listaAux = [...lista];
    listaAux[index].isCompleted = !listaAux[index].isCompleted;
    setLista(listaAux);
  }
  function deleta(index) {
    const listaAux = [...lista];
    listaAux.splice(index, 1);
    setLista(listaAux);
  }
  function deletaTudo() {
    setLista([]);
  }
  return(
    <>
    <h3 className="my-5">Lista de tarefas</h3>
    <form onSubmit={AddItem}>
      <input id="input-enter" type="text" placeholder="Tenho que..." value={novoItem} onChange={(e)=> { setNovoItem(e.target.value)}} required />
      <button className="add" type="submit">adicionar</button>
  </form>
  <div className="ListaTarefa">
    {
    lista.length < 1
    ?
    <img className="img-center img-fluid" src={Icon} />:
  lista.map((item, index) =>(
    <div
      key={index}
      className=
      {item.isCompleted ? "ItemCompleto": "Item"}>
      <span onClick={() => { clicou(index)}}>{item.text}</span>
      <button onClick={() => { deleta(index)}}>Deletar</button>
    </div>
  ))
  }
  {
  lista.length > 0 &&

  <button onClick={() => { deletaTudo()}} className="mt-3 d-all">Deletar tudo</button>
  }
</div> 
</>
)
}
export default Todo

