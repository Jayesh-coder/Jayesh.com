import { useState,useEffect } from "react";

export const HaveFun = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoaded(true);
        });
    });

    return (
        <>
        <h2 style={{color:'pink', textAlign:'center', margin:'20px'}}>Have fun guyzzz... </h2>
        <div className={`fr-content ${isLoaded? "active":""}`}>
        <div style={styles.container}>
        
        <iframe
          src="https://snake.io/"
          title="External Webpage"
          style={styles.iframe}
        />
        {/* <YouTube videoId="W01L70IGBgE" /> */}
      </div>
      </div>
      
      </>
    );
  };
  
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      margin: '2rem',
    },
    iframe: {
      width: '100%',
      height: '100%',
      maxWidth: '800px',
      height: '30rem',
      border: 'none',
    },
  };
  
  export default HaveFun;
  