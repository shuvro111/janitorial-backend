import Client from '../client/Client';
import Lead from '../lead/Lead';
import Stuff from '../stuff/Stuff';

//get all stats

export const getEntityCounts = async (req, res) => {
  try {
    const leads = await Lead.count();
    const verifiedLeads = await Lead.find({ isVerified: 'true' }).count();
    const clients = await Client.count();
    const stuffs = await Stuff.count();

    return res.json({
      status: 200,
      success: true,
      message: 'Lead Fetched Successfully',
      data: {
        leads,
        verifiedLeads,
        clients,
        stuffs,
      },
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//get client entity counts
export const getClientEntityCounts = async (req, res) => {
  try {
    const client = await Client.findOne({ email: req.query.email });
    const leads = await Lead.count({ campaignName: client.campaignName });

    return res.json({
      status: 200,
      success: true,
      message: 'Lead Fetched Successfully',
      data: {
        leads,
      },
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};
