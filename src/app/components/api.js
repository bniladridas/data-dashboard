// api.js
export const fetchLiveData = async () => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // Mock data
    return {
      data1: [
        { name: 'Jan', value: Math.floor(Math.random() * 1000) },
        { name: 'Feb', value: Math.floor(Math.random() * 1000) },
        { name: 'Mar', value: Math.floor(Math.random() * 1000) },
        { name: 'Apr', value: Math.floor(Math.random() * 1000) },
        { name: 'May', value: Math.floor(Math.random() * 1000) },
        { name: 'Jun', value: Math.floor(Math.random() * 1000) },
      ],
      data2: [
        { name: 'Jan', value: Math.floor(Math.random() * 1000) },
        { name: 'Feb', value: Math.floor(Math.random() * 1000) },
        { name: 'Mar', value: Math.floor(Math.random() * 1000) },
        { name: 'Apr', value: Math.floor(Math.random() * 1000) },
        { name: 'May', value: Math.floor(Math.random() * 1000) },
        { name: 'Jun', value: Math.floor(Math.random() * 1000) },
      ],
    };
  };