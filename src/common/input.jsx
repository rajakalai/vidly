import React from 'react';
// import { useFormContext } from "react-hook-form";

// export default function Test({label,name,onChange}) {
//     const methods = useFormContext();
//     return (
//         <div className="form-group">
//             <label htmlFor={name}>{label}</label>
//                 <input name={name}
//                 className="form-control"                             
//                 defaultValue="raja"
//                 onChange={onChange}
//             ref={methods.register({required : true, minLength:2})}                   
//         />
//         </div>
//     )
    
//     //return <input name="bill" ref={methods.register} />;
//   }
const Input = ({name, label, type, id, onChange, error,value}) => {
    //console.log("ref", register)
    //const methods = useFormContext();
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input name={name}
                    onChange={onChange}
                    id={id} 
                    className="form-control" 
                    type={type}

                    //ref={methods.register}                   
            />
          {error && <div className="alert alert-danger">{error}</div>} 
         </div>
     );
}
 
export default Input;