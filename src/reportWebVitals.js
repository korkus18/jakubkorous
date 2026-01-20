const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB, onINP }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
      onINP(onPerfEntry);
    });
  }
};

export const sendToAnalytics = (metric) => {
  const { name, value, id } = metric;
  
  if (window.gtag) {
    window.gtag('event', name, {
      value: Math.round(value),
      metric_id: id,
      metric_value: value,
      metric_delta: metric.delta,
    });
  }
};

export default reportWebVitals;
