import React, { useEffect, useRef, memo } from 'react';
import styles from './Chart.module.css';

function TradingViewWidget({coin}) {
  const container = useRef();

  useEffect(() => {
    const scriptId = "tradingview-widget-script"; // Unique identifier for the script
    let existingScript = document.getElementById(scriptId);

    // Remove existing script if it's there
    if (existingScript) {
      container.current.removeChild(existingScript);
    }

    const script = document.createElement("script");
    script.id = scriptId; // Assign the unique identifier to the script element
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "autosize": true,
      "symbol": `CRYPTO:${coin?.symbol}USD`,
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "2",
      "locale": "en",
      "enable_publishing": false,
      "hide_top_toolbar": true,
      "withdateranges": true,
      "range": "YTD",
      "allow_symbol_change": true,
      "save_image": false,
      "calendar": false,
      "hide_volume": true,
      "support_host": "https://www.tradingview.com"
    });

    // Append the script to the container
    container.current.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted or dependency changes
    return () => {
      let scriptToRemove = document.getElementById(scriptId);
      if (container.current && scriptToRemove) {
        container.current.removeChild(scriptToRemove);
      }
    };
  }, [coin?.symbol]); // Depend on coin.symbol to re-run effect

  return (
    <div className={styles.chart}>
      <div className="tradingview-widget-container" ref={container} style={{ height: "60%", width: "60%" }}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
