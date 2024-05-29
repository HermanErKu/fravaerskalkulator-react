import Cookies from 'universal-cookie';


const Frisør = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=2', { path: '/' });
  }
  
  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a href='/home' color='inherit'>Hjem</a>
        /
        <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a href='/yrkesfag?linjeId=2' color='text.primary'>Frisør, blomster, interiør og eksponeringsdesign</a>
      </div>
      
      <button onClick={setMinLinje}>Dette er min linje!</button>

      <h1>Frisør</h1>
    </div>
  );
}

export default Frisør;