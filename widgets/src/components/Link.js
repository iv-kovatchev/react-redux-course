const Link = ({ href, className, children }) => {
    const onClick = (e) => {
        if(e.ctrlKey || e.metaKey)
            return;

        e.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a
            onClick={onClick}
            href={href}
            className={className}>{children}
        </a>
    )
}

export default Link;