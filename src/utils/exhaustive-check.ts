export default function exhaustiveCheck(value: never): never {
    throw new Error(`unreachable - ${value}`);
}
