import Cookies from 'universal-cookie';


const Salg = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=8', { path: '/' });
  }
  
  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a href='/home' color='inherit'>Hjem</a>
        /
        <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a href='/yrkesfag?linjeId=8' color='text.primary'>Salg, service og reiseliv</a>
      </div>

      <button onClick={setMinLinje}>Dette er min linje!</button>

      <h1>Salg, service og reiseliv</h1>
    </div>
  );
}

export default Salg;