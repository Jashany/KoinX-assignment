import React from 'react';
import styles from './PerformanceBar.module.css'; // Assuming you have a CSS module for styles

const PerformanceBar = ({ low, high, current }) => {
    const range = high - low;
    const offset = current - low;
    const widthPercent = (offset / range) * 100;

    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.todaylow}>
                <p>
                    Today's Low
                </p>
                <p>
                    ${low}
                </p>
            </div>
            <div className={styles.progressBar}>
                <div className={styles.progressThumb} style={{ width: `${widthPercent}%` }} >
                    <p>
                    🢁
                    </p>
                    <p>
                        ${current}
                    </p>
                </div>
            </div>
            <div className={styles.todayhigh}>
                <p>
                    Today's High
                </p>
                <p>
                    ${high}
                </p>
            </div>
        </div>
    );
};

export default PerformanceBar;
