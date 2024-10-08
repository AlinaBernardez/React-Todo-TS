import { FilterValue } from "../types"
import { Filters } from "./Filters"

interface Props {
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    onClearCompleted: () => void
    handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({ activeCount = 0, completedCount = 0, filterSelected, handleFilterChange, onClearCompleted }) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <p><strong>{activeCount}</strong> pending</p>
                <p><strong>{completedCount}</strong> completed</p>
            </span>
            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
            {
                completedCount > 0 && (
                    <button className="clear-completed" onClick={onClearCompleted}>Delete completed</button>
                )
            }
        </footer>
    )
}