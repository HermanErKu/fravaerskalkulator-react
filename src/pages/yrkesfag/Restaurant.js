import Cookies from 'universal-cookie';


const Restaurant = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=7', { path: '/' });
  }
  
  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a href='/home' color='inherit'>Hjem</a>
        /
        <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a href='/yrkesfag?linjeId=7' color='text.primary'>Restaurant- og matfag</a>
      </div>

      <button onClick={setMinLinje}>Dette er min linje!</button>

      <h1>Restaurant</h1>
    </div>
  );
}

export default Restaurant;