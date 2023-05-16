export default function constructStyleClass<T extends object>(
    styleObj: T,
    ...classes: (keyof T | { [K in keyof T]?: boolean })[]
) {
    const styleClasses = new Set<string>();

    classes.forEach((c) => {
        if (typeof c !== "object") {
            styleClasses.add(styleObj[c] as string);
        } else {
            Object.keys(c)
                .filter((key) => c[key as keyof T])
                .forEach((key) =>
                    styleClasses.add(styleObj[key as keyof T] as string)
                );
        }
    });

    return Array.from(styleClasses).join(" ");
}
