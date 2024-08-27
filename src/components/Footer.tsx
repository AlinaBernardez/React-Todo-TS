import { FilterValue } from "../types"
import { Filters } from "./Filters"

interface Props {
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({ activeCount = 0, completedCount = 0, filterSelected, handleFilterChange }) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong><span> pending </span>
            </span>
            <span className="todo-count">
                <strong>{completedCount}</strong> completed
            </span>
            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
        </footer>
    )
}