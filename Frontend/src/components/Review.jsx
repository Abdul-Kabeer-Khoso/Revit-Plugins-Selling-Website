const Review = ({ review }) => {
    return <div className="bg-amber-100 w-[80vw] md:w-170 p-5 rounded-lg my-5 shadow-md">
        <p className="text-sm md:text-lg">"{review}"</p>
    </div>
}

export default Review;