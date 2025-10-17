
export default function Hero({ onOpenChat }: { onOpenChat: () => void }) {
    return (
        <div className="hero-bar">
        <section className="hero container" aria-label="Section héro">
            <div className="hero-content">
                <div className="hero-card div-block-6">
                    <div className="hero-row">
                        <div className="hero-text">
                            <div className="div-block-7">
                                <h1 className="hero-heading">Faciliter l’accès des patients aux soins médicaux de qualité</h1>
                            </div>
                            <div className="div-block-8">
                                <p className="hero-sub text-medium-medium">La téléconsultation augmentée permet aux patients de consulter un médecin à distance grâce à des dispositifs médicaux connectés et dans un lieu en présence d'un professionnel de santé</p>
                            </div>
                            <div className="div-block-9">
                                <a href="https://share.hsforms.com/1fSMbrDHaRtiL0EMZwLZOGQ46jsq" target="_blank" rel="noreferrer" className="div-block-4 w-inline-block btn btn-consult">
                                    <div className="div-block-3">
                                        <div className="text-regular-semi-bold button-text white">Demander une démo</div>
                                        <div className="code-embed w-embed">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path d="M3.75 12H20.25M20.25 12L13.5 5.25M20.25 12L13.5 18.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <button type="button" className="btn" onClick={onOpenChat} style={{ marginLeft: 8 }}>
                                    Essayer le chatbot
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hero-bottom">
                        <div className="solutions-block">
                            <div className="solutions-inline-title">Découvrez nos solutions</div>
                            <div className="div-block-12 solutions-links">
                            <a href="/pharmaciens" className="div-block-11 w-inline-block solution-link"><div className="div-block-10"><div className="text-block">Pharmaciens</div></div></a>
                            <a href="/medecins" className="div-block-13 w-inline-block solution-link"><div className="div-block-10"><div className="text-block">Médecins</div></div></a>
                            <a href="/opticiens-teleconsultation" className="div-block-14 w-inline-block solution-link"><div className="div-block-10"><div className="text-block">Opticiens</div></div></a>
                            </div>
                        </div>
                        {/* <a href="/demo" className="btn btn-consult" aria-label="Demander une démo (bas)">Demander une démo</a> */}
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}
