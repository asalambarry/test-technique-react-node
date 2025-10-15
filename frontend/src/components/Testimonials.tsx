import { useMemo, useState } from 'react';

type Testimonial = { author: string; text: string };

export default function Testimonials() {
    const slides = useMemo<Testimonial[]>(() => [
        {
            author: 'Christiane H.',
            text:
                "J'ai effectué 4 consultations, dont une avec une spécialiste en dermatologie. J'ai trouvé cela top : cela évite d'attendre des jours, voire des semaines, pour un rendez-vous, tout en étant soigné tout aussi efficacement.",
        },
        {
            author: 'Lau B.',
            text:
                "La téléconsultation s'est très bien passée : c'est rassurant, rapide et très professionnel. La pharmacienne a été très réactive et à l'écoute, et elle a tout préparé pour la téléconsultation. Je recommande cette pharmacie ainsi que ce moyen de se faire soigner rapidement. De plus, on peut obtenir les médicaments immédiatement, ce qui est un avantage non négligeable.",
        },
        {
            author: 'Pastore M.',
            text:
                "Suite à un déménagement et à l'impossibilité de consulter notre médecin traitant qui était en vacances, la téléconsultation a été très utile pour ma fille. C'était rapide, avec un médecin à l'écoute et agréable, et la prescription a été envoyée immédiatement. Ce fut une très bonne expérience pour nous. À renouveler si nécessaire.",
        },
    ], []);

    const [index, setIndex] = useState(0);
    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
    const next = () => setIndex((i) => (i + 1) % slides.length);

    return (
        <section id="testimonials" className="section container" aria-label="Témoignages">
            <h2>Tessan entreprise de téléconsultation augmentée depuis 2018</h2>

            <div
                className="carousel"
                role="region"
                aria-roledescription="carousel"
                aria-label="Témoignages"
            >
                <div
                    className="slides"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {slides.map((s, i) => (
                        <div
                            key={i}
                            className="slide"
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`Témoignage ${i + 1} sur ${slides.length}`}
                            aria-hidden={i !== index}
                        >
                            <blockquote>
                                <p>{s.text}</p>
                                <footer>— <cite>{s.author}</cite></footer>
                            </blockquote>
                        </div>
                    ))}
                </div>

                <button className="nav prev" onClick={prev} aria-label="Précédent">‹</button>
                <button className="nav next" onClick={next} aria-label="Suivant">›</button>

                <div className="dots" role="tablist" aria-label="Aller au témoignage">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`dot${i === index ? ' active' : ''}`}
                            aria-label={`Témoignage ${i + 1}`}
                            aria-selected={i === index}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
