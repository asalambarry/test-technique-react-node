export default function Footer() {
    return (
        <footer className="site-footer" aria-label="Pied de page">
            <div className="container footer-grid">
                <div>
                    <h4>Adresse</h4>
                    <p className="muted">TESSAN<br />10 Rue Pergolèse<br />75016 Paris</p>
                    <a href="#contact" className="link">Nous contacter</a>
                </div>

                <div>
                    <h4>Partenaires</h4>
                    <ul>
                        <li><a className="link" href="#">Pharmaciens</a></li>
                        <li><a className="link" href="#">Opticiens</a></li>
                        <li><a className="link" href="#">Infirmiers</a></li>
                        <li><a className="link" href="#">Collectivités</a></li>
                        <li><a className="link" href="#">Dirigeants</a></li>
                        <li><a className="link" href="#">EHPAD</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Solutions</h4>
                    <ul>
                        <li><a className="link" href="#">Nos solutions</a></li>
                        <li><a className="link" href="#">Cabine Premium</a></li>
                        <li><a className="link" href="#">Borne</a></li>
                        <li><a className="link" href="#">Console</a></li>
                        <li><a className="link" href="#">Mallette</a></li>
                        <li><a className="link" href="#">Tessan IA</a></li>
                        <li><a className="link" href="#">Téléexpertise dermatologique</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Médecins</h4>
                    <ul>
                        <li><a className="link" href="#">Médecins généralistes</a></li>
                        <li><a className="link" href="#">Ophtalmologues</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Patients</h4>
                    <ul>
                        <li><a className="link" href="#">Téléconsultation augmentée</a></li>
                        <li><a className="link" href="#">Tarifs et remboursements</a></li>
                        <li><a className="link" href="#">Dermatologie</a></li>
                    </ul>
                </div>

                <div>
                    <h4>Ressources</h4>
                    <ul>
                        <li><a className="link" href="#">Blog</a></li>
                        <li><a className="link" href="#">FAQ</a></li>
                        <li><a className="link" href="#">Qui sommes‑nous ?</a></li>
                        <li><a className="link" href="#">Carrières</a></li>
                    </ul>
                </div>
            </div>

            <div className="container footer-bottom">
                <span className="muted">© 2025 Tessan. Tous droits réservés.</span>
                <nav aria-label="Liens légaux">
                    <a className="link" href="#">Politique de confidentialité</a>
                    <a className="link" href="#">CGU</a>
                    <a className="link" href="#">Mentions légales</a>
                    <a className="link" href="#">Cookies</a>
                </nav>
            </div>
        </footer>
    );
}
