import './Avatar.css';

interface Props{
 src: string;
}

export default function Avatar({ src }: Props) {
  return (
    <div className='avatar'>
      <img src={src} alt="user avatar" />
    </div>
  );
}
