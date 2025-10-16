import { useEffect } from "react";

const useBackgroundColor = (color) => {
    useEffect(() => {
        const currentBackground = document.body.style.background;
        document.body.style.background = color;

        return () => {
            document.body.style.background = currentBackground;
        }
    })
}

export default useBackgroundColor 