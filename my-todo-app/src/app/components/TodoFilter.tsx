import styles from "../page.module.css";

type FilterType = "all" | "active" | "completed";


interface TodoFilterProps{
    currentFilter : FilterType;
    setFilter: (filter: FilterType) => void;
}

export const TodoFilter = ({currentFilter, setFilter}: TodoFilterProps) =>{
    return (
        <div className= {styles.tabs}>
                    <button className={currentFilter == "all" ? styles.activeTab: styles.tab } onClick={() => setFilter('all')}>Все</button>
                    <button className={currentFilter == "active" ? styles.activeTab: styles.tab } onClick={() => setFilter('active')}>Активные</button>
                     <button className={currentFilter == "completed" ? styles.activeTab: styles.tab } onClick={() => setFilter('completed')}>Выполненные</button>
                </div>
    )
}
 