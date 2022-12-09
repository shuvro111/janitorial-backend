import Stuff from './Stuff';

//create stuff
export const createStuff = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  try {
    const existingStuff = await Stuff.findOne({ email: email });

    if (existingStuff) {
      return res.json({
        status: 422,
        success: false,
        message: 'Email Already in Use',
      });
    }

    const stuff = new Stuff({
      name,
      email,
      password,
      role,
    });

    stuff.save();
    return res.json({
      status: 200,
      success: true,
      message: 'Stuff Created Successfully',
      data: stuff,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//get all stuff
export const getAllStuffs = async (req, res) => {
  try {
    const stuffs = await Stuff.find().sort({ createdAt: -1 });
    if (!stuffs) {
      return res.json({
        status: 404,
        success: false,
        message: 'No Stuff Available',
      });
    }
    return res.json({
      status: 200,
      success: true,
      message: 'All Stuffs Fetched Successfully',
      data: stuffs,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//get stuff by id
export const getStuffById = async (req, res) => {
  try {
    const stuff = await Stuff.findById(req.query.id);
    if (!stuff) {
      return res.json({
        status: 404,
        success: false,
        message: 'Stuff Not Found',
      });
    }
    return res.json({
      status: 200,
      success: true,
      message: 'Stuff Fetched Successfully',
      data: stuff,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//get stuff by email
export const getStuffByEmail = async (req, res) => {
  try {
    const stuff = await Stuff.findOne({
      email: req.query.email,
    });
    if (!stuff) {
      return res.json({
        status: 404,
        success: false,
        message: 'Stuff Not Found',
      });
    }
    return res.json({
      status: 200,
      success: true,
      message: 'Stuff Fetched Successfully',
      data: stuff,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//update stuff
export const updateStuff = async (req, res) => {
  try {
    const stuff = await Stuff.findById(req.body.id);
    if (!stuff) {
      return res.json({
        status: 404,
        success: false,
        message: 'Stuff Not Found',
      });
    }

    const updatedStuff = await Stuff.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
    });

    stuff.save();

    return res.json({
      status: 200,
      success: true,
      message: 'Stuff Updated Successfully',
      data: updatedStuff,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};

//delete stuff
export const deleteStuff = async (req, res) => {
  try {
    const stuff = await Stuff.findById(req.query.id);
    if (!stuff) {
      return res.json({
        status: 404,
        success: false,
        message: 'Stuff Not Found',
      });
    }

    await Stuff.findByIdAndDelete(req.query.id);

    return res.json({
      status: 200,
      success: true,
      message: 'Stuff Deleted Successfully',
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      message: error.message,
    });
  }
};
