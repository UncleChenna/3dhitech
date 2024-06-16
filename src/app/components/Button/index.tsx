
interface IButton {
    children: string,
    type?: "primary" | "secondary",
    action?: () => void,
    disabled?: boolean
}

const CustomButton = ( {children, type, action, disabled }: IButton) => {
    return (
        <button disabled={disabled} onClick={action} className={`${ type === "secondary" ? "" : "bg-primary text-white rounded-md" } px-4 py-1.5`}>
            { children }
        </button>
    )
}

export default CustomButton