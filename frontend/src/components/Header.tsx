import { useState } from 'react';

export default function Header({ onOpenChat }: { onOpenChat: () => void }) {
    const [partnersOpen, setPartnersOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [patientsOpen, setPatientsOpen] = useState(false);
    const [doctorsOpen, setDoctorsOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    return (
        <div className="header-bar">
            <header className="container header" aria-label="En-tête">
                <div className="header-left">
                    <a href="#" className="brand" aria-label="Accueil Tessan">
                        <span className="brand-logo" aria-hidden="true">▢</span>
                        <span className="brand-text">TESSAN</span>
                    </a>
                    <div className="lang-switch" role="group" aria-label="Langue">
                        <button className="lang active" aria-pressed="true">FR</button>
                        <button className="lang">EN</button>
                    </div>
                    <nav aria-label="Navigation principale" className="main-nav">
                    <div className={`dropdown ${partnersOpen ? 'open' : ''}`}>
                        <button
                            className="drop-trigger"
                            aria-haspopup="true"
                            aria-expanded={partnersOpen}
                            onClick={() => {
                                setPartnersOpen(v => !v);
                                setSolutionsOpen(false);
                                setDoctorsOpen(false);
                                setPatientsOpen(false);
                                setResourcesOpen(false);
                            }}
                        >
                            Partenaires
                            <svg className="chevron" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                        </button>
                        <div className="drop-menu" role="menu" aria-label="Partenaires">
                            <div className="drop-grid">
                                <a role="menuitem" href="#pharmaciens" className="drop-card"><span>Pharmaciens</span></a>
                                <a role="menuitem" href="#opticiens" className="drop-card"><span>Opticiens</span></a>
                                <a role="menuitem" href="#infirmiers" className="drop-card"><span>Infirmiers</span></a>
                                <a role="menuitem" href="#collectivites" className="drop-card"><span>Collectivités</span></a>
                                <a role="menuitem" href="#dirigeants" className="drop-card"><span>Dirigeants</span></a>
                                <a role="menuitem" href="#ehpad" className="drop-card"><span>EHPAD</span></a>
                            </div>
                        </div>
                    </div>
                    <div className={`dropdown ${solutionsOpen ? 'open' : ''}`}>
                        <button
                            className="drop-trigger"
                            aria-haspopup="true"
                            aria-expanded={solutionsOpen}
                            onClick={() => {
                                setSolutionsOpen(v => !v);
                                setPartnersOpen(false);
                                setDoctorsOpen(false);
                                setPatientsOpen(false);
                                setResourcesOpen(false);
                            }}
                        >
                            Solutions
                            <svg className="chevron" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                        </button>
                        <div className="drop-menu" role="menu" aria-label="Solutions">
                            <div className="drop-columns">
                                <div className="drop-section">
                                    <div className="drop-section-title">Nos services</div>
                                    <div className="drop-grid">
                                        <a role="menuitem" href="#tessan-ia" className="drop-card"><span>Tessan IA</span></a>
                                        <a role="menuitem" href="#tessan-ia-officine" className="drop-card"><span>Tessan IA - Officine</span></a>
                                        <a role="menuitem" href="#tessan-ia-teleconsultation" className="drop-card"><span>Tessan IA - Téléconsultation</span></a>
                                        <a role="menuitem" href="#teleexpertise-dermatologique" className="drop-card"><span>La téléexpertise dermatologique</span></a>
                                    </div>
                                </div>
                                <div className="drop-section">
                                    <div className="drop-section-title">Nos dispositifs</div>
                                    <div className="drop-grid">
                                        <a role="menuitem" href="#nos-solutions" className="drop-card"><span>Nos solutions</span></a>
                                        <a role="menuitem" href="#cabine-premium" className="drop-card"><span>La cabine Premium</span></a>
                                        <a role="menuitem" href="#cabine-slim" className="drop-card"><span>La cabine Slim</span></a>
                                        <a role="menuitem" href="#borne" className="drop-card"><span>La borne</span></a>
                                        <a role="menuitem" href="#console" className="drop-card"><span>La console</span></a>
                                        <a role="menuitem" href="#mallette" className="drop-card"><span>La mallette</span></a>
                                        <a role="menuitem" href="#table-teleophtalmologique" className="drop-card"><span>La table de<br/>téléophtalmologique</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className={`dropdown ${doctorsOpen ? 'open' : ''}`}>
                            <button
                                className="drop-trigger"
                                aria-haspopup="true"
                                aria-expanded={doctorsOpen}
                                onClick={() => {
                                    setDoctorsOpen(v => !v);
                                    setPartnersOpen(false);
                                    setSolutionsOpen(false);
                                    setPatientsOpen(false);
                                setResourcesOpen(false);
                                }}
                            >
                                Médecins
                                <svg className="chevron" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                            </button>
                            <div className="drop-menu" role="menu" aria-label="Médecins">
                                <div className="drop-columns">
                                    <div className="drop-section">
                                        <div className="drop-section-title">Nos médecins</div>
                                        <div className="drop-grid">
                                            <a role="menuitem" href="#medecins-generalistes" className="drop-card"><span>Médecins généralistes</span></a>
                                        </div>
                                    </div>
                                    <div className="drop-section">
                                        <div className="drop-section-title">Nos spécialistes</div>
                                        <div className="drop-grid">
                                            <a role="menuitem" href="#ophtalmologues" className="drop-card"><span>Ophtalmologues</span></a>
                                            <a role="menuitem" href="#dermatologues" className="drop-card"><span>Dermatologues</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`dropdown ${patientsOpen ? 'open' : ''}`}>
                            <button
                                className="drop-trigger"
                                aria-haspopup="true"
                                aria-expanded={patientsOpen}
                                onClick={() => {
                                    setPatientsOpen(v => !v);
                                    setPartnersOpen(false);
                                    setSolutionsOpen(false);
                                    setDoctorsOpen(false);
                                setResourcesOpen(false);
                                }}
                            >
                                Patients
                                <svg className="chevron" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                            </button>
                            <div className="drop-menu" role="menu" aria-label="Patients">
                                <div className="drop-columns">
                                    <div className="drop-section">
                                        <div className="drop-section-title">En savoir plus</div>
                                        <div className="drop-list">
                                            <a role="menuitem" href="#ophtalmologie" className="drop-card"><span>Ophtalmologie</span></a>
                                            <a role="menuitem" href="#pneumologie" className="drop-card"><span>Pneumologie</span></a>
                                            <a role="menuitem" href="#geriatrie" className="drop-card"><span>Gériatrie</span></a>
                                        </div>
                                    </div>
                                    <div className="drop-section">
                                        <div className="drop-section-title">Nos spécialités médicales</div>
                                        <div className="drop-list">
                                            <a role="menuitem" href="#medecine-generale" className="drop-card"><span>Médecine générale</span></a>
                                            <a role="menuitem" href="#dermatologie" className="drop-card"><span>Dermatologie</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`dropdown ${resourcesOpen ? 'open' : ''}`}>
                            <button
                                className="drop-trigger"
                                aria-haspopup="true"
                                aria-expanded={resourcesOpen}
                                onClick={() => {
                                    setResourcesOpen(v => !v);
                                    setPartnersOpen(false);
                                    setSolutionsOpen(false);
                                    setDoctorsOpen(false);
                                    setPatientsOpen(false);
                                }}
                            >
                                Ressources
                                <svg className="chevron" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                            </button>
                            <div className="drop-menu" role="menu" aria-label="Ressources">
                                <div className="drop-columns">
                                    <div className="drop-section">
                                        <div className="drop-section-title">Ressources</div>
                                        <div className="drop-grid">
                                            <a role="menuitem" href="#blog" className="drop-card"><span>Blog</span></a>
                                            <a role="menuitem" href="#faq" className="drop-card"><span>FAQ</span></a>
                                        </div>
                                    </div>
                                    <div className="drop-section">
                                        <div className="drop-section-title">À propos de Tessan</div>
                                        <div className="drop-grid">
                                            <a role="menuitem" href="#qui-sommes-nous" className="drop-card"><span>Qui sommes-nous ?</span></a>
                                            <a role="menuitem" href="#carrieres" className="drop-card"><span>Carrières</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: 8 }}>
                                    <a role="menuitem" href="#nous-contacter" className="btn btn-contact">Contactez nous</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="header-right">
                    <button className="btn btn-ghost" aria-label="Compte patient">
                        Compte patient
                    </button>
                    <button className="btn btn-consult" aria-label="Où se consulter">
                        <svg className="icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                            <path fill="currentColor" d="M8 1.333a6.667 6.667 0 1 0 0 13.334A6.667 6.667 0 0 0 8 1.333Zm0 12A5.333 5.333 0 1 1 8 2.667a5.333 5.333 0 0 1 0 10.666Zm.667-7.333a.667.667 0 0 0-1.334 0v2H5.333a.667.667 0 1 0 0 1.333h2v2a.667.667 0 1 0 1.334 0v-2h2a.667.667 0 1 0 0-1.333H8.667v-2Z"/>
                        </svg>
                        Où se consulter
                    </button>
                </div>
            </header>
        </div>
    );
}
