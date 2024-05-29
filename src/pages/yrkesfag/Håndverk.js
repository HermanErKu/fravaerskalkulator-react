import Cookies from 'universal-cookie';


const Håndverk = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=3', { path: '/' });
  }
  
  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a href='/home' color='inherit'>Hjem</a>
        /
        <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a href='/yrkesfag?linjeId=3' color='text.primary'>Håndverk, design og produktutvikling</a>
      </div>

      <button onClick={setMinLinje}>Dette er min linje!</button>

      <h1>Håndverk</h1>
    </div>
  );
}

export default Håndverk;