import Client from '../client/Client';
import Lead from './Lead';

//create lead
export const createLead = async (req, res) => {
  try {
    const lead = new Lead(req.body);
    lead.save();

    return res.json({
      status: 200,
      success: true,
      message: 'Lead Created Successfully',
      data: lead,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//get all leads
export const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    if (!leads) {
      return res.json({
        status: 404,
        success: false,
        message: 'No Lead Available',
      });
    }
    return res.json({
      status: 200,
      success: true,
      message: 'All Leads Fetched Successfully',
      data: leads,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//get verified leads
export const getVerifiedLeads = async (req, res) => {
  try {
    const leads = await Lead.find({ isVerified: 'true' }).sort({
      createdAt: -1,
    });
    if (!leads) {
      return res.json({
        status: 404,
        success: false,
        message: 'No Lead Available',
      });
    }
    return res.json({
      status: 200,
      success: true,
      message: 'All Leads Fetched Successfully',
      data: leads,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//get lead by id
export const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.query.id);
    if (!lead) {
      return res.json({
        status: 404,
        success: false,
        message: 'Lead Not Found',
      });
    }
    return res.json({
      status: 200,
      success: true,
      message: 'Lead Fetched Successfully',
      data: lead,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//get leads by agent name
export const getLeadsByAgent = async (req, res) => {
  try {
    const lead = await Lead.findOne({
      agentName: req.query.agentName,
    });
    if (!lead) {
      return res.json({
        status: 404,
        success: false,
        message: 'Lead Not Found',
      });
    }
    return res.json({
      status: 200,
      success: true,
      message: 'Lead Fetched Successfully',
      data: lead,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//get leads by email
export const getLeadsByEmail = async (req, res) => {
  try {
    const user = await Client.findOne({ email: req.query.email });
    const lead = await Lead.find({
      campaignName: user.campaignName,
    });
    if (!lead) {
      return res.json({
        status: 404,
        success: false,
        message: 'Lead Not Found',
      });
    }
    return res.json({
      status: 200,
      success: true,
      message: 'Lead Fetched Successfully',
      data: lead,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//get leads by campaign name
export const getLeadsByCampaign = async (req, res) => {
  console.log(req.query.campaignName);
  try {
    const lead = await Lead.find({
      campaignName: req.query.campaignName,
    });
    if (!lead) {
      return res.json({
        status: 404,
        success: false,
        message: 'Lead Not Found',
      });
    }
    return res.json({
      status: 200,
      success: true,
      message: 'Lead Fetched Successfully',
      data: lead,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//get leads by daterange

/* Three things:

To use dates in your queries, you need to wrap the strings in ISODate
Dates need to be in Y-M-D format
I’m guessing you probably want to also include data from the last day of April. In this case you should bring the end date forward by one day.
Putting these together, the query you likely want is:

{createdAt:{$gte:ISODate("2021-01-01"),$lt:ISODate("2020-05-01"}} */

export const getLeadsByDaterange = async (req, res) => {
  try {
    const lead = await Lead.findOne({
      createdAt: {
        $gte: ISODate(req.query.startingDate),
        $lt: ISODate(req.query.endingDate),
      },
    });
    if (!lead) {
      return res.json({
        status: 404,
        success: false,
        message: 'Lead Not Found',
      });
    }
    return res.json({
      status: 200,
      success: true,
      message: 'Lead Fetched Successfully',
      data: lead,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//update lead
export const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.body.id);
    if (!lead) {
      return res.json({
        status: 404,
        success: false,
        message: 'Lead Not Found',
      });
    }

    const updatedLead = await Lead.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
    });

    return res.json({
      status: 200,
      success: true,
      message: 'Lead Updated Successfully',
      data: updatedLead,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//verify lead
export const verifyLead = async (req, res) => {
  try {
    console.log(req.body.id);
    const lead = await Lead.findById(req.body.id);
    if (!lead) {
      return res.json({
        status: 404,
        success: false,
        message: 'Lead Not Found',
      });
    }

    const updatedLead = await Lead.findByIdAndUpdate(
      req.body.id,
      { isVerified: lead.isVerified === 'true' ? 'false' : 'true' },
      {
        new: true,
      }
    );

    return res.json({
      status: 200,
      success: true,
      message: 'Lead Updated Successfully',
      data: updatedLead,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//star lead
export const starLead = async (req, res) => {
  try {
    console.log(req.body.id);
    const lead = await Lead.findById(req.body.id);
    if (!lead) {
      return res.json({
        status: 404,
        success: false,
        message: 'Lead Not Found',
      });
    }

    const updatedLead = await Lead.findByIdAndUpdate(
      req.body.id,
      { isStarred: lead.isStarred === 'true' ? 'false' : 'true' },
      {
        new: true,
      }
    );

    return res.json({
      status: 200,
      success: true,
      message: 'Lead Updated Successfully',
      data: updatedLead,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//verify many leads
export const verifyMultipleLeads = async (req, res) => {
  return res.json({
    status: 500,
    success: false,
    message: 'Import Lead',
  });
};

//delete lead
export const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.query.id);
    if (!lead) {
      return res.json({
        status: 404,
        success: false,
        message: 'Lead Not Found',
      });
    }

    await Lead.findByIdAndDelete(req.query.id);

    return res.json({
      status: 200,
      success: true,
      message: 'Lead Deleted Successfully',
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};
//delete many lead
export const deleteMultipleLeads = async (req, res) => {
  try {
    const lead = await Lead.findById(req.body.id);
    if (!lead) {
      return res.json({
        status: 404,
        success: false,
        message: 'Lead Not Found',
      });
    }

    await Lead.deleteMany();

    return res.json({
      status: 200,
      success: true,
      message: 'Lead Deleted Successfully',
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//import lead
export const importLead = async (req, res) => {
  try {
    const leads = await Lead.create(req.body);

    return res.json({
      status: 200,
      success: true,
      message: 'Lead Created Successfully',
      data: leads,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};
