import { useEffect } from 'react';
import { useState } from 'react';

import api from '../../services/api';
import LoaderContent from '../../loaderContent';
import { useCallback } from 'react';

import Container from '../pages/App/style';

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
    <Container>
      <div className="content">
        <h1>Hello Gama!</h1>
        <h4>Veja estas imagens</h4>
        <button onClick={ handleSortImage }>Clique aqui!</button>
      </div>
      { isLoad ? <LoaderContent/> : (<img src={photo} width="500px" height="auto" alt="Dog" />)}

    </Container>
  );
}

export default App;

//FC = functional component