export const isMobile = () => {
    if (typeof window === "undefined") return false;

    return (
        window.matchMedia("(max-width: 768px)").matches ||
        ("ontouchstart" in window && window.innerWidth <= 1024)
    );
};
