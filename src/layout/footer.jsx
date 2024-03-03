function Footer() {
    return <footer className="page-footer black accent-1">
        <div class="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Made by Soldatova Anastasia
                <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
            </div>
        </div>
    </footer>
}
export { Footer }