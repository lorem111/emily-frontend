import React, { useEffect } from 'react';

const SakuraComponent = () => {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL + '/sakura.js';
    script.async = true;
    script.onload = () => {
        // Initialize Sakura
        if(window.Sakura){
            new window.Sakura('body', {
                colors: [
                    {
                        gradientColorStart: 'rgba(255, 183, 197, 0.9)',
                        gradientColorEnd: 'rgba(255, 197, 208, 0.9)',
                        gradientColorDegree: 120,
                    },
                    {
                        gradientColorStart: 'rgba(255,189,189)',
                        gradientColorEnd: 'rgba(227,170,181)',
                        gradientColorDegree: 120,
                    },
                    {
                        gradientColorStart: 'rgba(212,152,163)',
                        gradientColorEnd: 'rgba(242,185,196)',
                        gradientColorDegree: 120,
                    },
                ],
                delay: 200,
            });
        }
    };
    
    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    }

  }, []);

  return (
    <div className="sakura-component">
      {/* Your component contents go here */}
    </div>
  );
}

export default SakuraComponent;
