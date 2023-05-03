import { useEffect, useState } from "react";

function useMobileView(maxWidth: number) {
    const [state, setState] = useState<boolean>(
        visualViewport!.width <= maxWidth
    );

    const onResize = () => setState(visualViewport!.width <= maxWidth);

    useEffect(() => {
        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    });

    return state;
}

export default useMobileView;
