import Cookies from 'universal-cookie';


const Helse = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=4', { path: '/' });
  }
  
  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a href='/home' color='inherit'>Hjem</a>
        /
        <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a href='/yrkesfag?linjeId=4' color='text.primary'>Helse- og oppvekstfag</a>
      </div>

      <button onClick={setMinLinje}>Dette er min linje!</button>

      <h1>Helse</h1>
    </div>
  );
}

export default Helse;