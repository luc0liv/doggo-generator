import loadGifImage from './img/load.gif';

const LoaderContent: React.FC = () => {
  return(
    <div>
      <h1>Carregando...</h1>
      <img src={loadGifImage} width="100px" alt="Dog Loader" />
    </div>
  )
}

export default LoaderContent;