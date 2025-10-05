'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook to use Web Workers for offloading CPU-intensive tasks
 * @param workerPath - Path to the worker file
 * @returns Object with functions to interact with the worker
 */
export function useWorker(workerPath: string) {
  const [worker, setWorker] = useState<Worker | null>(null);
  const [isSupported, setIsSupported] = useState<boolean>(false);
  
  useEffect(() => {
    // Check if Web Workers are supported
    if (typeof window !== 'undefined' && 'Worker' in window) {
      setIsSupported(true);
      const newWorker = new Worker(workerPath);
      setWorker(newWorker);
      
      return () => {
        newWorker.terminate();
      };
    } else {
      console.warn('Web Workers are not supported in this browser');
      setIsSupported(false);
    }
  }, [workerPath]);
  
  /**
   * Send a message to the worker
   * @param type - Message type
   * @param data - Message data
   */
  const sendMessage = (type: string, data: any) => {
    if (!worker || !isSupported) {
      console.warn('Worker not available, processing on main thread instead');
      // Fallback to processing on main thread
      return Promise.resolve(null);
    }
    
    return new Promise((resolve) => {
      const messageHandler = (e: MessageEvent) => {
        if (e.data.type === `${type}Complete` || e.data.type === 'error') {
          worker.removeEventListener('message', messageHandler);
          resolve(e.data.data);
        }
      };
      
      worker.addEventListener('message', messageHandler);
      worker.postMessage({ type, data });
    });
  };
  
  return {
    isSupported,
    sendMessage,
  };
}