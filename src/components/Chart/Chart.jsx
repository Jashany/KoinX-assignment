// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import styles from './Chart.module.css';

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    // Create the script only once
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BITSTAMP:BTCUSD",
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
      }`;
      
    // Append the script to the container
    container.current.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      container.current.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className={styles.chart}>
      <div className="tradingview-widget-container" ref={container} style={{ height: "60%", width: "60%" }}>
        <div className="tradingview-widget-container__widget" style={{ height: "calc(60% - 32px)", width: "60%" }}></div>
        
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
