import ribbon from "./../assets/ribbon.png"

const HomeHero = () => {
    return <div className=" p-5">
        <div className="flex-col justify-center items-center mt-8 p-5">
            <p className="text-2xl md:text-4xl font-bold text-center uppercase ">Smarter Revit Structural Design Starts Here.</p>
            <p className="mt-2 lg:mt-0 text-xl md:text-2xl font-semibold text-center">Built on 25 years of hands-on global project delivery. Made for Revit. Made for engineers.</p>
        </div>
        <br></br>
        <div className="border-l-2 pl-2">
            <p className="text-xl font-semibold">HamStruc Revit Plugin — Covering All Structural Elements in Single Plugin</p>
            <p className="text-xl">Our plugins are developed by a professional with over two decades of hands-on experience delivering complex international projects. This deep industry
                insight shapes every feature, ensuring tools that solve real-world challenges, streamline workflows, and elevate the precision of your BIM process.
                Designed for architects, engineers, and construction teams who demand efficiency and reliability, our plugins transform Revit into a more powerful,
                intuitive, and productive environment. <br></br>
                Each tool is engineered to save hours of manual work, reduce costly design errors, and enhance coordination across disciplines. From smarter
                automation to cleaner documentation and faster modeling, our plugins pay for themselves by boosting productivity, improving accuracy, and
                empowering teams to deliver higher-quality results with confidence.</p>
        </div>
        <div className="my-13 shadow-2xl">
            <img src={ribbon} alt="Ribbon Image" />
        </div>
    </div>
}

export default HomeHero;