export function deduplicate(arr) {
    let insieme = new Set(arr);
    return Array.from(insieme);
}
    