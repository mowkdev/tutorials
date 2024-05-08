import styles from './AppHeader.module.scss';

export default function AppHeader() {
  return (
    <header className={styles["app-header"]}>
      <h1>React Todo App</h1>
    </header>
  );
}