import { BsRssFill } from 'react-icons/bs'

const CardIcon = ({ url }: { url?: string }) => {
  return url ? <img src={url} alt="" /> : <BsRssFill className="rss" />
}

export default CardIcon
