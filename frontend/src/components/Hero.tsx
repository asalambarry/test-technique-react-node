
export default function Hero({ onOpenChat }: { onOpenChat: () => void }) {
    return (
        <section className="hero container" aria-label="Section héro">
            <h1>Soins connectés, IA au service des professionnels</h1>
            <p>Accélérez la prise en charge et simplifiez le quotidien grâce à l’IA.</p>
            <button className="primary" onClick={onOpenChat} aria-label="Discuter avec l’IA">
                Discuter avec l’IA
            </button>
        </section>
    );
}
