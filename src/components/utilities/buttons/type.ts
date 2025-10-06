export type IconButtonProps = {
    label?: string
    noLabel: boolean,
    icon: string   
    className?: string,
    onClick: () => void
}

export type NormalButtonProps = Omit<Omit<IconButtonProps, "icon">, "noLabel">
