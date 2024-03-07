"use client"
import React, { useState, useEffect, useRef, memo } from 'react';
import { useRouter } from 'next/navigation';

function TradingViewWidget() {
  const container = useRef(null);
  const router = useRouter();
  const [symbol, setSymbol] = useState('BITSTAMP:BTCUSD'); 

  useEffect( () => {
      const fetchSymbol = async () => {
        try {
          const res = await fetch(`/api/token/${router.query.id}`);
          const data = await res.json()
    
          if(router.query?.id){
            setSymbol(data.symbol);
          }
        } catch ( error) {
          console.error('Error fetching symbol:', error.message);
        }
      };
       fetchSymbol();
    }, [router.query?.id]
  );



  useEffect(
    () => {
      if(!symbol){
        return;
      }

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;

      script.innerHTML = `
        {
          "symbols": [
            [
              "${symbol}|1D"
            ]
          ],
          "chartOnly": false,
          "width": 550,
          "height": 400,
          "locale": "en",
          "colorTheme": "light",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "percent-only",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "5d|5",
            "1w|15",
            "1m|30",
            "3m|60",
            "6m|120",
            "12m|1D",
            "all|1M"
          ],
          "lineColor": "rgba(41, 98, 255, 1)",
          "topColor": "rgba(187, 217, 251, 1)",
          "bottomColor": "rgba(255, 255, 255, 1)"
        }`;

        if(container.current){
          container.current.appendChild(script);
        }

      return () => {
        if(container.current && container.current.removeChild){
          container.current.removeChild(script);
        }
      };
    }, [symbol]
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
