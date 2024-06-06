import React, { useEffect } from 'react';

function Form() {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script1.async = true;
    script1.charset = "utf-8";
    document.body.appendChild(script1);

    script1.onload = () => {
      window.hbspt.forms.create({
        region: "eu1",
        portalId: "25062945",
        formId: "9f8b622e-9d39-4de8-8825-138ac14c4709",
        target: '#hubspot-form'
      });
    };

    return () => {
      document.body.removeChild(script1);
    };
  }, []);

  return (
    <div id="hubspot-form"  className="container mx-auto flex flex-wrap  md:flex-nowrap  px-4 lg:px-12">
      {/* El formulario de HubSpot se insertará aquí */}
    </div>
  );
}

export default Form;
