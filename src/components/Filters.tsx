import { FILTER_BUTTONS } from "../consts"
import { FilterValue } from "../types"

interface Props {
    filterSelected: FilterValue
    onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {

    return (
        <ul className="filters">
            {Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => (
                <li key={key}>
                    <a 
                        className={`${filterSelected === key ? 'selected' : ''}`}
                        href={href}
                        onClick={(event) => {
                            event.preventDefault()
                            onFilterChange(key as FilterValue)
                        }}
                    >
                        {literal}
                    </a>
                </li>
            ))}
        </ul>
    )
}