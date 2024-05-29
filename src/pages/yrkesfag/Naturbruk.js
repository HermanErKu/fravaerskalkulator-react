import Cookies from 'universal-cookie';


const Naturbruk = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=6', { path: '/' });
  }
  
  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a href='/home' color='inherit'>Hjem</a>
        /
        <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a href='/yrkesfag?linjeId=6' color='text.primary'>Naturbruk</a>
      </div>

      <button onClick={setMinLinje}>Dette er min linje!</button>

      <h1>Naturbruk</h1>
    </div>
  );
}

export default Naturbruk;