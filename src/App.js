import React,{useState} from 'react'
import items from './data'
import Menu from './components/Menu'
import Categories from './components/Categories'
const allcategorys= ['all',...new Set(items.map(item=>item.category))] ;


function App() {
  const [menuItem,setMenuItem]=useState(items);
  const [categorys,setcategorys]=useState(allcategorys)
  const filterItem = (category)=>{
    if(category==='all'){
      setMenuItem(items);
      return
    }
    const newItem  = items.filter(item=> item.category===category)
    setMenuItem(newItem)
  }

  return (
    <main>
      <section className='menu section'>
          <div className='title'>
            <h2>美食美客菜单</h2>
            <div className='underline'></div>
          </div>
          <Categories categorys={categorys} filterItem={filterItem}></Categories>
          <Menu menuItem={menuItem}></Menu>
      </section>
    </main>
  );
}

export default App;
