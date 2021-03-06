import { useGif } from '../useGif';

const Random = () => {

  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1> Random Gif </h1>
      <img width="500" src={gif} alt="Random" />
      <button onClick={fetchGif} >Click for new Gif</button>
    </div>
  );
};

export default Random;
