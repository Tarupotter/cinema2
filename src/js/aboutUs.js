const getAboutUSInfo = async () => {
  try {
    const res = await fetch('/database/aboutUs.json'); // Ensure this path is correct relative to server root
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching aboutUs.json:', error);
  }
};

getAboutUSInfo();
