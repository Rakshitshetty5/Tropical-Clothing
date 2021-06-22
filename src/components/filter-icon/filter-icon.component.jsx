import sprite from '../../assets/sprite.svg'

import './filter-icon.styles.scss'

const FilterIcon = ({ ...props }) => (
    <div className="filter-icon" { ...props }>
        <svg className="filter-icon__svg">
            <use href={sprite + "#icon-funnel"} />
        </svg>
    </div>
)

export default FilterIcon