const Contactus = () =>{
    return (
        <div>
            <h1>Contact Us</h1>
            <p>This is contact us page</p>
            <form>
                <input className="m-4 p-4 border" type="text" placeholder="Enter your name" />
                <input className="m-4 p-4 border" type="email" placeholder="Enter your email" />
                <textarea className="m-4 p-4 border" placeholder="Enter your message"></textarea>
                <button className="m-4 p-4 rounded-lg bg-yellow-300 shadow-md hover:shadow-2xl">Submit</button>
            </form>
        </div>
    )
}

export default Contactus;