import React, { useRef } from 'react';
import { IKContext, IKUpload } from 'imagekitio-react';

const urlEndpoint = import.meta.env.VITE_IMAGE_KIT;
const publicKey = import.meta.env.VITE_IMAGE_PUBLIC_KEY; 
const authenticator =  async () => {
    try {
        const response = await fetch('https://chatai-production-658f.up.railway.app/api/upload');

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};

const Upload=({setImg}) =>{
  const ikUploadRef = useRef(null);
    const onError = err => {
        console.log("Error", err);
      };
      
      const onSuccess = res => {
        console.log("Success", res);
        setImg((prev)=>({...prev,isLoading:false,dbData:res}))
      };
      
      const onUploadProgress = progress => {
        console.log("Progress", progress);
      };
      
      const onUploadStart = evt => {
        const file = evt.target.files[0];
        const reader = new FileReader();
        
        reader.onloadend = ()=>{
          setImg((prev)=>({...prev,isLoading:true,aiData:{
            inlineData: {
              data: reader.result.split(",")[1],
              mimeType:file.type,
            },
          }}));
        }
        reader.readAsDataURL(file);
      };

  return (
    <div className="App">
      <IKContext
        urlEndpoint={urlEndpoint}
        publicKey={publicKey}
        authenticator={authenticator}
      >
        <IKUpload
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
          useUniqueFileName={true}
          onUploadProgress={onUploadProgress}
          onUploadStart={onUploadStart}
          style={{display:"none"}}
          ref={ikUploadRef}
        />
        <label htmlFor="" onClick={()=>ikUploadRef.current.click()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
</svg>
    </label>
      </IKContext>
      {/* ...other SDK components added previously */}
    </div>
  );
}

export default Upload;
