export type ProductRowProps = {
    categoryHeader: {
        icon: string
        label: string
        onClick: () => void
    }
    product?: {
        onClick: () => void
    }
}
