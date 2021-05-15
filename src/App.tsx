import { useEffect } from 'react';
import { useState } from 'react';

import api from './services/api';
import LoaderContent from './loaderContent';
import { useCallback } from 'react';

const App: React.FC = () => {
  const [ photo, setPhoto ] = useState<string>('');
  const [ isLoad, setIsLoad ] = useState<boolean>(false);

  useEffect(() => {
    setIsLoad(true)
    api.get('').then(
      response => {
        setPhoto(response.data.message);
        setIsLoad(false)
      }
    )
  }, [])

  const handleSortImage: any = useCallback(() => {
    setIsLoad(true)
    console.log(photo)
    api.get('').then(
      response => {
        setPhoto(response.data.message);
        setIsLoad(false);
      }
    )
  }, [photo])

  return (
    <div>
      <div>
        <h1>Hello Gama!</h1>
        <h4>Veja estas imagens</h4>
        <button onClick={ handleSortImage }>Clique aqui!</button>
      </div>
      { isLoad && <LoaderContent/>}

      <img src={photo} alt="Dog" />
    </div>
  );
}

export default App;

//FC = functional component