import logo from "../../assets/logo.png";

const AboutSection = () => {
    return (
        <div className="bg-black mt-32 flex flex-row justify-between px-52 pt-16 pb-16">
            <div>
           
            <img src={logo} alt="" className="w-32" />
            <p className="text-white text-4xl font-bold pt-6">Get the Swiggy App Now!</p>
            <p className="text-white text-lg font-semibold pt-3">For Best Offers and Discount Curated specially for you.</p>
            </div>

            <div>
            </div>
        </div>
    )
}

export default AboutSection;