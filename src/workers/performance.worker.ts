// This is a TypeScript worker file that will be compiled to JS
// Worker responsible for data processing, analytics, and other CPU-intensive tasks

interface WorkerMessage {
  type: string;
  data: any;
}

self.addEventListener('message', (event: MessageEvent<WorkerMessage>) => {
  const { type, data } = event.data;
  
  switch (type) {
    case 'processImages':
      // Example: Process image data
      const result = processImageData(data);
      self.postMessage({ type: 'imageProcessingComplete', data: result });
      break;
      
    case 'calculateMetrics':
      // Example: Calculate performance metrics
      const metrics = calculateMetrics(data);
      self.postMessage({ type: 'metricsCalculated', data: metrics });
      break;
      
    default:
      self.postMessage({ type: 'error', data: 'Unknown message type' });
      break;
  }
});

// Example function to process image data
function processImageData(data: any) {
  // This would normally be CPU-intensive work
  // For example: image filtering, analysis, etc.
  console.log('Processing image data in worker');
  
  // Simulate processing time
  const startTime = Date.now();
  
  // Sample image processing
  const processed = {
    width: data.width,
    height: data.height,
    processed: true,
    processingTime: Date.now() - startTime,
  };
  
  return processed;
}

// Example function to calculate metrics
function calculateMetrics(data: any) {
  // Simulate performance calculations
  console.log('Calculating metrics in worker');
  
  // Simulate processing time
  const metrics = {
    totalTime: data.timestamps.reduce((acc: number, curr: number) => acc + curr, 0),
    averageTime: data.timestamps.reduce((acc: number, curr: number) => acc + curr, 0) / data.timestamps.length,
    maxTime: Math.max(...data.timestamps),
    minTime: Math.min(...data.timestamps),
  };
  
  return metrics;
}