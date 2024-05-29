import Cookies from 'universal-cookie';


const TIF = () => {
  const cookies = new Cookies();
  
  const setMinLinje = () => {
    cookies.set('linjeCookie', '/yrkesfag?linjeId=9', { path: '/' });
  }

  return (
    <div>
      <div className='breadCrumbsContainer'>
        <a href='/home' color='inherit'>Hjem</a>
        /
        <a href='/yrkesfag' color='text.primary'>Yrkesfag</a>
        /
        <a href='/yrkesfag?linjeId=9' color='text.primary'>Teknologi- og industrifag</a>
      </div>

      <button onClick={setMinLinje}>Dette er min linje!</button>

      <h1>TIF</h1>
    </div>
  );
}

export default TIF;