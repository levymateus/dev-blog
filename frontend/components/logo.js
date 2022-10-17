import Image from "./image"

function Logo({ title, url, caption, alternativeText }) {
  return <div className="flex" >
    <Image
      url={url}
      caption={caption}
      alt={alternativeText}
      width={24}
      height={24}
    />
    <h3>{title}</h3>
  </div>
}

Logo.displayName = 'Logo'

export default Logo