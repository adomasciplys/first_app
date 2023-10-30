const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Adomas' Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" className="new_blog">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;