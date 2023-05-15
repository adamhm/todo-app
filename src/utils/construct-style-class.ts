export default function constructStyleClass<T extends object>(
    styleObj: T,
    ...classes: (keyof T | Partial<{ [prop in keyof T]: boolean }>)[]
) {
    const styleClasses: string[] = [];

    classes.forEach((c) => {
        if (typeof c !== "object") {
            styleClasses.push(styleObj[c] as string);
        } else {
            Object.keys(c).forEach((key) => {
                if (c[key as keyof T]) {
                    styleClasses.push(key);
                }
            });
        }
    });

    return styleClasses.join(" ");
}
