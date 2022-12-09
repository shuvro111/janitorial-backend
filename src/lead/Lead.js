import mongoose from 'mongoose';

const LeadSchema = mongoose.Schema(
  {
    centerName: {
      type: String,
    },
    campaignName: {
      type: String,
      unique: true,
      required: true,
    },
    agentName: {
      type: String,
    },
    companyName: {
      type: String,
    },
    contactPerson: {
      type: String,
    },
    companyAddress: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
    phone: {
      type: Number,
    },
    altPhone: {
      type: Number,
    },
    email: {
      type: String,
    },
    appointmentDate: {
      type: String,
    },
    appointmentTime: {
      type: String,
    },
    activelySeeking: {
      type: String,
    },
    currentFrequency: {
      type: String,
    },
    comments: {
      type: String,
    },
    isStarred: {
      type: String,
    },
    isVerified: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
