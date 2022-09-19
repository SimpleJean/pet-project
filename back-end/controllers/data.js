import DataItem from '../models/data.js';

const getDashboardData = async (req, res) => {
  try {
    const dataItems = await DataItem.find({});
    res.status(200).json({ dataItems });
  } catch (error) {
    console.error(error);
  }
};

const staticDashboardData = async (req, res) => {
  try {
    res.status(200).json({ msg: 'static for dashboard' });
  } catch (error) {
    console.error(error);
  }
};

export { getDashboardData, staticDashboardData };
