
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onChange }) => (
    <div>
        <label className={styles.label} htmlFor="search">
            Find contacts by name
        </label>
        <input
            id="search"
            type="text"
            value={filter}
            onChange={onChange}
            className={styles.input} /* Optional: style the input separately */
        />
    </div>
);

export default SearchBox;
