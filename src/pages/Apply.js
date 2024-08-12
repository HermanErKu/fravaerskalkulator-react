import { useNavigate} from "react-router-dom";


const Apply = () => {
  let navigate = useNavigate();

  return (
    <div style={{ position:"relative" }}>
      <div className="goBackButtonForm" style={{ position:"absolute", zIndex:9 }}>
        <button onClick={() => navigate(-1)}>Gå tilbake</button> 
      </div>

      <div className="iframeContainerForm" style={{ position:"absolute" }}>
        <iframe width="640px" height="480px" src="https://forms.office.com/e/aeQBmHmNr1?embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{ border: "none", width: "99vw", height: "97.3vh", maxWidth: "100%", maxHeight: "100%" }} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
      </div>
    </div>
  )
}

export default Apply;