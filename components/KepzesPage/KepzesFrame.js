export default function KepzesFrame({ url }) {
  return (
    <iframe
      style={{ border: 'none' }}
      width="100%"
      height="624"
      src={url}
      controls
      autoPlay
      allowFullScreen
    ></iframe>
  )
}
