

export function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                display: "block",
                background: "url(/assets/images/nav-back.png)",
                backgroundSize: "cover"
            }}
            onClick={onClick}
        />
    );
}

export function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                display: "block",
                background: "url(/assets/images/nav-next.png)",
                backgroundSize: "cover"
            }}
            onClick={onClick}
        />
    );
}