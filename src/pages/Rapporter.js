import { useNavigate} from "react-router-dom";


const Rapporter = () => {
  let navigate = useNavigate();

  return (
    <div style={{ position:"relative" }}>
      <div className="goBackButtonForm" style={{ position:"absolute", zIndex:9 }}>
        <button onClick={() => navigate(-1)}>Gå tilbake</button> 
      </div>

      <div className="iframeContainerForm" style={{ position:"absolute" }}>
        <iframe width="640px" height="480px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=LuWpUhjZHUCq-w3BSsCOF_c_fKxKR8ZGrnzgIV_fdY1UNzFMOUo1M0M2U1E3T0NCNkc1VVlaMTU0Ri4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{ border: "none", width: "99vw", height: "97.3vh", maxWidth: "100%", maxHeight: "100%" }} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
      </div>
    </div>
  )
}

export default Rapporter;