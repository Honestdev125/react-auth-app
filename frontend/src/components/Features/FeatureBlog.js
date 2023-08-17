const FeatureBlog = ({img, title, content}) => {
  return (
    <div>
      <img src={img} alt={img} />
      <p className="my-[17px] text-[22px]">
        {title}
      </p>
      <p className="font-normal text-blog text-xl">
        { content }
      </p>
    </div>
    )
}

export default FeatureBlog
