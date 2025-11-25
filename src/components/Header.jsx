export default function Header({title}) {
    
    return (
        <>
        <header>
            <h1>{title}</h1>
            <nav>
                <a href="/index.html">Pagina principal</a> &nbsp;
                <a href="/projectes.html">Projectes</a> &nbsp; 
                <a href="/newsLetter.html">Newsletter</a> &nbsp;
                <a href="/contacte.html">Contacte</a>   &nbsp;
            </nav>
            
        </header>
        </>
    )
}