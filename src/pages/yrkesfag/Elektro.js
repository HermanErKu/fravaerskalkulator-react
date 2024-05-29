import Cookies from 'universal-cookie';


const Elektro = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=1', { path: '/' });
  }
  
  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a href='/home' color='inherit'>Hjem</a>
        /
        <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a href='/yrkesfag?linjeId=1' color='text.primary'>Elektro og datateknologi</a>
      </div>

      <button onClick={setMinLinje}>Dette er min linje!</button>

      <h1>Elektro</h1>
    </div>
  );
}

export default Elektro;