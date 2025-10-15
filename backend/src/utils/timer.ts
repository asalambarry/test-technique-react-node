export const withLatency = async <T>(fn: () => Promise<T>) => {
    const start = Date.now();
    try {
        const res = await fn();
        return { res, ms: Date.now() - start };
    } catch (e) {
        const ms = Date.now() - start;
        throw Object.assign(e as Error, { latencyMs: ms });
    }
};
